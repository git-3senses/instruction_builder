# File Upload Component

> Drag-and-drop upload with validation, previews, multiple files, base64 output, and progress integration

---

## Import

```typescript
import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { DbsFileUploadComponent, DbsProgressBarComponent, DbsButtonComponent } from '@dbs-angular/core';

@Injectable({ providedIn: 'root' })
export class DemoFileUploadService {
  constructor(private http: HttpClient) {}
  uploadFile(file: any) {
    const req = new HttpRequest('POST', '/upload/file', file, { reportProgress: true });
    return this.http.request(req);
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsFileUploadComponent, DbsProgressBarComponent, DbsButtonComponent],
})
export class FileUploadHost {}
```

---

## Basic Usage

```html
<dbs-file-upload
  (filesBinded)="filesBinded($event)"
  [imagePreview]="true"
  [accept]="'.pdf,.jpeg,.jpg,.doc,.docx,.txt,.xls,.xlsx,.bmp,.tif,.gif,.png,.html,.msg'"
  (deleteEmitter)="onDelete($event)"
  (downloadEmitter)="onDownload($event)"
  (fileChanged)="onFileChanged($event)"
  (reuploadClick)="onReupload($event)">
</dbs-file-upload>
```

---

## Key Inputs

| Input | Type | Default | Notes |
|-------|------|---------|-------|
| accept | string | '*' | Comma-separated extensions (e.g. '.pdf,.doc'); add trailing ',' to allow no extension. |
| imagePreview | boolean | false | Show image icon replacement and preview dialog on click. |
| maxSize | number | - | Max size in MB. |
| multiple | boolean | false | Allow multiple file uploads. |
| maxFiles | number | - | Maximum number of files when multiple. |
| maxDisplayRows | number | - | Height of file list area by number of rows (multiple only). |
| displayMaxFilesError | boolean | true | Show error when exceeding `maxFiles`. |
| base64 | boolean | false | Output includes base64 for each file. |
| disabled | boolean | false | Disables control and actions. |
| displayDownload | boolean | true | Toggle per-item download icon. |
| displayFileSize | boolean | true | Show size below filename. |
| displayImagePreviewIcon | boolean | true | Show image preview icon. |
| allowSameFileUpload | boolean | false | Disable duplicate checking. |
| alreadyUploadedFileCount | number | 0 | Count of files already uploaded. |
| hideProgressbar | boolean | - | Hide default inline progress bar (sets validupload true). |
| hideUpload | boolean | - | Hide upload drop area (display only). |
| dragDropText | string | 'Drag your file here or' | Instruction text. |
| dragDropHelpText | string|null | null | Supporting text below instruction. |
| extensionError | string | 'Extension is not valid.' | Error text. |
| fileNameError | string | 'File Name is not valid.' | Error text. |
| fileNameMaxLength | number | NaN | Max filename length (sets `validnamelength`). |

### Outputs

- filesBinded: EventEmitter<any[]> — raw bound files array
- fileChanged: EventEmitter<(FileOutput|Base64Output|FileInfo|void)[]> — normalized file data list with computed fields
- deleteEmitter: EventEmitter<any> — file requested for deletion
- downloadEmitter: EventEmitter<any> — file requested for download
- reuploadClick: EventEmitter<any> — file needing reupload when `validupload=false`

### Slots

- (default) — File upload content
- dropAreaSlot — Override drop area content text

---

## Progress Integration Example

```typescript
import { Component, inject } from '@angular/core';
import { DemoFileUploadService } from './demo-upload.service';

@Component({
  selector: 'app-file-upload-demo',
  standalone: true,
  imports: [FileUploadHost],
  templateUrl: './file-upload-demo.component.html'
})
export class FileUploadDemoComponent {
  private svc = inject(DemoFileUploadService);
  files: any[] = [];

  onFiles(files: any[]) { this.files = files; }

  uploadAll() {
    this.files.forEach((file: any) => {
      this.svc.uploadFile(file).subscribe((response: any) => {
        if (response?.type === HttpEventType.UploadProgress) {
          file.progress = Math.round((response.loaded / (response.total || 1)) * 100);
        } else if (response?.type === HttpEventType.Response) {
          file.validupload = response.status === 200;
        }
      });
    });
  }
}
```

```html
<!-- file-upload-demo.component.html -->
<dbs-file-upload
  [accept]="'.pdf,.jpeg,.jpg,.doc,.docx,.txt,.xls,.xlsx,.bmp,.tif,.gif,.png,.html,.msg'"
  [maxSize]="2"
  [imagePreview]="true"
  (filesBinded)="onFiles($event)">
</dbs-file-upload>
<dbs-button (click)="uploadAll()">Upload</dbs-button>
```

---

## Multiple Files and Base64

```html
<dbs-file-upload
  [multiple]="true"
  [maxFiles]="5"
  [maxDisplayRows]="4"
  [imagePreview]="true"
  [accept]="'.pdf,.jpg'"
  (fileChanged)="onFileChanged($event)">
</dbs-file-upload>

<dbs-file-upload
  [base64]="true"
  [imagePreview]="true"
  [accept]="'.pdf,.jpg'"
  (fileChanged)="onFileChanged($event)">
</dbs-file-upload>
```

---

## Disabled, Display Only

```html
<dbs-file-upload
  [disabled]="true"
  [hideUpload]="true"
  [hideProgressbar]="false"
  [formControl]="new UntypedFormControl([{ file: new File(['file'], 'file.pdf'), progress: 100 }], { nonNullable: true })">
</dbs-file-upload>
```

---

## Styling Best Practices

- Use `hideProgressbar` until upload starts; set `validupload=undefined` and `progress=0` to re-show on submission.
- Keep file names concise; enforce `fileNameMaxLength` for truncation policies.
- Always validate against `accept` and `maxSize` to prevent back-end errors.
- For image previews, ensure adequate contrast and click target.

---

## Behavior Notes

- File object in control/value includes computed fields: `valid*`, `progress`, `validupload`, optional `base64`/`imgSrc`.
- Emits `reuploadClick` for retry flows when an upload error occurs.
- Error state follows Angular invalid/dirty/touched classes on host element.

---

**Component File:** `file-upload.md`
**Last Updated:** 2025-10-27

