# DBS Angular Part 12

# **File Upload**

# Usage

Import `DbsFileUploadComponent` into your component or module.

```tsx
import { DbsFileUploadComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsFileUploadComponent],
})
```

## **Stories**

### **Basic**

A basic file upload with progress bar

- **file:** The formControl will have an array of objects each object will have the properties
    1. **id:** Unique id
    2. **file:** The actual file data
    3. **name:** The file's name without extension
    4. **extension:** The file's extension
    5. **description:** The file's description, you may use this to provide more info.
    6. **valid:** If `validext && validsize && validname && validnamelength`
    7. **validext:** If the extension is accepted by `accept`
    8. **validsize:** If the extension is less than `maxSize`
    9. **validname:** If file name passes the `fileNameRegExp.test()`
    10. **validnamelength:** If file name less than `fileNameMaxLength`
    11. **progress:** Starts at 0 but can be changed to update the progressbar
    12. **validupload:** To indicate upload success. If true hides progressbar, If false will trigger `uploadingError` to display
- **progressbar:**
    
    The `<dbs-progressbar>` exists as the DLS 3.1 design pattern and will be included by default in each file display.
    
- **hideProgressbar:**
    
    Use `[hideProgressbar] = true` as some applications do not immediately upload files, thus progressbar may be simulated or hidden.
    
    - This sets `object.validupload` to true to hide the progressbar on output, simulating that the 'upload' was immediately successful.
    - Else you may use `object.progress` with incremental addition to update the progressbar on output, when =>100 `validupload` will also be set to `true`.
- **maxSize:**
    
    You may limit the size of the files. If not stated "Supports any file size" will be displayed in the droparea.
    
- **imagePreview:**
    
    Image files will show previews if possible.
    
    - Clicking on the image preview will open a image preview dialog.
- **hideUpload:**
    
    You may hide the upload for a list of files display.
    

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Form Control Demo**

Please pass any dummy files **minimally** with this structure

```

formControl:new FormControl([{
   file: new File(['Capture4'], "Capture4.pdf"), // this is required!
   progress: 100, // this sets the file as already uploaded
 }])

```

```tsx
<dbs-file-upload [imagePreview]="imagePreview" [accept]="accept" [formControl]="formControl"  ></dbs-file-upload>
formControl.value: {{formControl.value|json}}
```

### **File Upload With Progress Bar**

A basic file upload with progress bar

### How to use the Progress Bar

Note that you may use `[hideProgressbar]` to show the file size instead of the progress bar, if you only want to show the progess bar on submission

To use the progress bar implement the `request` funtion with `reportProgress: true` in your `HttpClient` requests. Use the HTTP response to update the file's `progress`

When you set hideProgressBar = true at the start, you need to show the progress bar upon upload/submission by:

- setting `hideProgressBar` = `false` and
- `file.validupload` = `undefined`.
- Set `file.progress` = `0` to show 0% progress before upload begins.

You can use `response.type === HttpEventType.Response` to retrieve the response body from BE and do any necessary action upon completion/error.

You can use `response.type === HttpEventType.UploadProgress` to check the response's type to ensure it has the progress properties and compute the progress percentage. Example is shown in the JSON code snippet below.

On upload errors you may use the `reuploadClick` output to replace the file and reupload via the API

```tsx
import { Component, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsFileUploadComponent } from "../../dbs-file-upload.component";
import { HttpClient, HttpEventType, HttpRequest } from "@angular/common/http";
import { FileInfo } from "../../models/file-info.model";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";

@Injectable({
  providedIn: "root",
})
export class DemoFileUploadService {
  constructor(private _httpClient: HttpClient) {}
  public uploadFile(file: FileInfo) {
    console.log(`uploadFile`, file);
    let req = new HttpRequest("POST", "/upload/file", file, {
      reportProgress: true,
    });
    return this._httpClient.request(req);
  }
}

@Component({
  selector: "simulate-progress-story",
  standalone: true,
  imports: [CommonModule, DbsFileUploadComponent, DbsButtonComponent],
  templateUrl: `simulate-progress-story.component.html`,
  providers: [DemoFileUploadService],
})
export class SimulateProgressStoryComponent {
  constructor(private _fileUploadService: DemoFileUploadService) {}
  files: any[];
  uploadFile(files: any[]) {
    console.log(`files`, files);
    files.forEach((file: FileInfo) => {
      this._fileUploadService.uploadFile(file).subscribe((response: any) => {
        if (response.type === HttpEventType.UploadProgress) {
          const progress = {
            type: response.type,
            loaded: response.loaded,
            total: response.total,
          };
          file.progress = Math.round((progress.loaded / progress.total) * 100);
        } else if (response?.type === HttpEventType.Response) {
          if (response?.status === 200) {
            /* handle success */
            console.log(`SUCCESS`, response);
          } else {
            /* handle failure */
            file.validupload = false;
            console.error(`SIMULATED FAILURE TO UPLOAD`, response);
          }
        }
      });
    });
  }
}
HTML
<dbs-file-upload
  [accept]="'.pdf,.jpeg,.jpg,.doc,.docx,.txt,.xls,.xlsx,.bmp,.tif,.gif,.png,.html,.msg'"
  [maxSize]="2"
  [imagePreview]="true"
  (filesBinded)="files = $event;"
></dbs-file-upload>
<dbs-button (click)="uploadFile(files)">Upload</dbs-button>
```

### **Multiple File Upload Progress Bar**

Multiple file uploads settings can set with the inputs:

- `multiple`: set `true` to allow multiple file uploads,
- `maxFiles`: max number of files,
- `maxDisplayRows`: sets height of multiple file upload area by number of files,
- `displayMaxFilesError`: default `true` to display max number of files error.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [maxSize]="maxSize" [maxFiles]="maxFiles" [maxDisplayRows]="maxDisplayRows" [multiple]="multiple" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Base 64**

Some applications require the upload of files with their `base64` values instead.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [base64]="base64" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Disabled**

When setting `disabled` to `true`, the file upload will be completely disabled. When input is disabled, controls are naturally also disabled.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [disabled]="disabled" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Disabled And Hide Upload**

Only allow users to download files.

**Note:**

- `formControl` has to be `disabled` to prevent users from deleting the file.
- set `hideProgressBar` to `false` to display the file size.
- set `hideUpload` to `true` to hide the upload area.

```tsx
<dbs-file-upload  (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [hideUpload]="hideUpload" [disabled]="disabled" [hideProgressbar]="hideProgressbar" [formControl]="formControl" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Dummy Files And Downloading**

There may be a need to display dummy files ie just placeholders or loaded files from a backend API.

To do this you need to set the `formControl` to contain this information

this.fc.patchValue([{
file: new File([`fileName`], `fileName.pdf`), // This is the dummy data needed, if Backend API sends the file place it here as well
progress: 100,
}])

```tsx
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";
import { DbsFileUploadComponent } from "../../dbs-file-upload.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "dummy-files-story",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DbsFileUploadComponent,
    DbsButtonComponent,
  ],
  templateUrl: `dummy-files-story.component.html`,
})
export class DummyFilesStoryComponent {
  fc = new FormControl({
    value: [
      {
        file: new File(
          [
            "Veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylong file name",
          ],
          "Veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylong file name.pdf",
        ),
        progress: 100,
      },
    ],
    disabled: true,
  });
  counter = 0;
  patchFiles() {
    this.fc.reset();
    this.fc.patchValue([
      {
        file: new File(
          [`fileName${this.counter++}`],
          `fileName${this.counter}.pdf`,
        ),
        progress: 100,
      },
    ]);
  }
  /** Download just opens the url provided by backend
   * or calls an API based on the file's data
   */
  download(file: any) {
    /** example of a static url */
    const url = "/dbs-angular-lib-logo--light.svg";
    window.open(url);
  }
}
HTML
<div [ngStyle]="{border:'2px solid red'}">
  <dbs-file-upload
    [imagePreview]="true"
    [accept]="'.pdf,.jpeg,.jpg,.doc,.docx,.txt,.xls,.xlsx,.bmp,.tif,.gif,.png,.html,.msg'"
    [hideUpload]="true"
    [hideProgressbar]="true"
    [disabled]="true"
    [formControl]="fc"
    (downloadEmitter)="download($event)"
  ></dbs-file-upload>
</div>
<dbs-button (click)="patchFiles()">Patch files</dbs-button>
<br />
fc:{{fc.value|json}}
```

### **Disabled And Hide Additional Information**

Users can choose to remove icon and file size, based on user preference.

**Note:**

- `displayImagePreviewIcon` : set `false` to hide icon
- `hideUpload`: set `true` to hide upload area
- `hideProgressbar`: set `true` to hide file size
- `displayFileSize`: set `false` to hide file size
- `displayDownload`: set `false` to hide download button

```tsx
<dbs-file-upload [imagePreview]="imagePreview" [accept]="accept" [hideUpload]="hideUpload" [disabled]="disabled" [displayImagePreviewIcon]="displayImagePreviewIcon" [hideProgressbar]="hideProgressbar" [displayDownload]="displayDownload" [formControl]="formControl"  ></dbs-file-upload>
```

### **Hide Droparea Single Upload**

You may hide the single upload droparea to display only the single file uploaded. **Note:** Only for single upload.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [maxSize]="maxSize" [hideOnSingle]="hideOnSingle" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Style Variation Small**

Set `class='small'` for reduced height via reduced paddings(16px) default is `24px`, for mobile use as well.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [maxSize]="maxSize" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)" class="small"></dbs-file-upload>
```

### **Style Variation Left Align**

Left-aligned layout is commonly used to save space to achieve a more compact layout, especially when there are multiple upload areas required.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [maxSize]="maxSize" [leftAlignText]="leftAlignText" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

### **Custom Download Section**

Left-aligned layout is commonly used to save space to achieve a more compact layout, especially when there are multiple upload areas required.

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" [maxSize]="maxSize" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"
  [customDownloadTemplate] = 'customTemplate'
  #upload
></dbs-file-upload>

<ng-template #customTemplate let-file let-id="index">
  <div [style.display]="'flex'" [style.gap.px]="12" [style.align-items]="'center'" [style.align-items]="'center'">

    <span *ngIf='file.imgSrc==null' class="icon file" 
        [ngClass]="{ 
          'id':id,
          'icon__file-pdf': file.extension=='.pdf',
          'icon__file-image': file.extension=='.jpg' || file.extension=='.png',
          'icon__file--xls': file.extension=='.xls',
          'icon__file': file.extension!='.pdf' && file.extension!='.jpg' && file.extension!='.png' && file.extension!='.xls'
        }"></span>
      <div (click)='dialog.showDialog()' *ngIf=' file.imgSrc!=null' class='file-upload__file-display--file image-container' [ngClass]="{'id':id}">
        <img [style.width.px]="40" [alt]="'fileUpload'" *ngIf='file.imgSrc!=null'  [ngClass]="{'id':id}" [src]="file.imgSrc" [id]='file.id' (error)="file.imgSrc=null">
      </div>
            <dbs-modal #dialog [title]="file?.file?.name ?? ''" >
              <img [alt]="'image-dialog__image'" [style.width.%]="100" [style.height.%]="100" src='{{file?.imgSrc}}'>
            </dbs-modal>
      <div [style.width.%]="100" [style.display]="'flex'" [style.flex-direction]="'column'">
        <span>
          {{file.name}}
        </span>
        <span [style.font-size.px]="13" [style.color]="'#69737B'">
          {{upload.byteSizeConverter(file.file.size)}}
        </span>
        <span [style.font-size.px]="13" [style.color]="'#69737B'">
          {{file.progress}}% -- Validating file information
        </span>
        <div *ngIf=' file.valid && upload.fileProgressChecker(file)' >
          <dbs-progressbar [dynamic]='false' [progress]='null' color='yellow' [mini]="true"></dbs-progressbar>
        </div>
      </div>
  </div>
</ng-template>
```

### **Error State**

The error state is shown when the classes on the host `<dbs-file-upload>` are

- ng-invalid
- ng-dirty
- ng-touched

Here the formControl is

```tsx
new UntypedFormControl({
    value: [{
      file: new File(["Capture4"], "Capture4.pdf"),
      progress: 100,
    }],
    disabled:false
  })
```

```tsx
<dbs-checkbox 
[label]="'Show Error state'"
(change)='$event.target.checked?formControl.setErrors({required:true})&&formControl.markAsDirty()&&formControl.markAsTouched():formControl.setErrors(null)'>
</dbs-checkbox>
<dbs-file-upload [imagePreview]="imagePreview" [accept]="accept" [formControl]="formControl" [class]="'ng-touched ng-dirty'" ></dbs-file-upload>
```

**API Reference**

```tsx
<dbs-file-upload (filesBinded)="filesBinded($event)" [imagePreview]="imagePreview" [accept]="accept" (deleteEmitter)="deleteEmitter($event)" (downloadEmitter)="downloadEmitter($event)" (fileChanged)="fileChanged($event)" (reuploadClick)="reuploadClick($event)"></dbs-file-upload>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **filesBinded** | emitter for direct files to allow bindingEventEmitter<any[]> | new EventEmitter<any[]>() |  |
| **deleteEmitter** | Outputs the file to be deleted when delete icon is clickedEventEmitter<any> | new EventEmitter<any>() |  |
| **downloadEmitter** | Outputs the file when clickedEventEmitter<any> | new EventEmitter<any>() |  |
| **fileChanged** | Outputs an array of binded Objects
Example:
[{
"id": "58h09s1qf9vlgng9941",
"file": {**See below**},
"name": "THE FILES NAME",
"extension": ".docx",
"description": "",
"valid": true,
"validext": true,
"validsize": true,
"validname": true,
"validnamelength": true,
"progress": 100,
"validupload": true
**if [base64]='true'**
"base64": "data:application/pdf;base64,... FULL BASE64 OUTPUT....
**if [imagePreview]='true'**
imgSrc: "data:image/jpeg;base64,... FULL BASE64 OUTPUT....
} ,
........ ]
"file":{
"lastModified": "1681374706702"
"lastModifiedDate": Thu Apr 13 2023 16:31:46 GMT+0800 (Singapore Standard Time)
"name": "Annotation 2023-04-13 163136.jpg"
"size": 76433
"type": "image/jpeg"
"webkitRelativePath": ""
}EventEmitter<[]> | new EventEmitter<(FileOutput | Base64Output | void | FileInfo)[]>() |  |
| **reuploadClick** | emits clicked on reupload button for triggering upload event again. Outputs the file when `validupload` is `false` for you to call the upload API again. FileInfoEventEmitter<any> | new EventEmitter<any>() |  |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **imagePreview** | Will display the image in the icon section if possible.boolean | false | [x] |
| **accept** | File types as string e.g. '.pdf,.doc,.docx', add a trailing ',' if you'd like to allow no file extensions.string | * |  |
| **allowSameFileUpload** | If true, will not check if file has been previously uploaded.boolean | false |  |
| **alreadyUploadedFileCount** | number of files that has been uploadednumber | 0 |  |
| **base64** | Will output the files with base64.boolean | false |  |
| **customDownloadTemplate** | Pass in to fully customise the uploaded file component displayTemplateRef<any> |  |  |
| **disabled** | Will disable the input.boolean | false |  |
| **displayDownload** | If false, will not show the download button next to an uploaded item.boolean | true |  |
| **displayFileSize** | Display file size below file name, false to hide.boolean | true |  |
| **displayImagePreviewIcon** | Display left icon for file preview, `false` to hideboolean | true |  |
| **displayMaxFilesError** | Will allow display of `maxFilesError` below the files uploaded area.boolean | true |  |
| **dragDropHelpText** | Supporting text displayed below the default 'Drag your file here or Browse' text.stringnull |  |  |
| **dragDropText** | The displayed instructions, if overwritten the red 'browse' will not showstring | Drag your file here or |  |
| **extensionError** | The displayed error if file type not included in `accept`.string | Extension is not valid. |  |
| **fileNameError** | The displayed error if file name does not pass Regex test for `fileNameRegExp` input .string | File Name is not valid. |  |
| **fileNameLengthError** | The displayed error if `fileNameMaxLength` is defined. Note that the displayed error is set in onInitstring | "" |  |
| **fileNameMaxLength** | If not defined there will be no fileNameLengthErrornumber | NaN |  |
| **fileNameRegExp** | This regex will run `this.fileNameRegExp.test(fileName)` and set the `file.fileNameError` to true.RegExp |  |  |
| **fileSizeError** | The displayed error if file size exceeds `maxSize`.string | File Size is over the maximum limit. |  |
| **hideOnSingle** | If true, will hide the droparea once file uploaded, if `multiple` is false.boolean | false |  |
| **hideProgressbar** | Will hide the `dbs-progressbar` by simulating succesful upload with `file.validupload = true`.boolean | false |  |
| **hideUpload** | Will hide the upload section, may be used for just displaying filesboolean | false |  |
| **hideUploadSuccess** | when `true`, files will not be displayed after upload is successful (ie. file.validupload=true)boolean | false |  |
| **leftAlignText** | Left aligns text.boolean | false |  |
| **maxDisplayRows** | Sets the height of the multiple files uploaded area, by the number of files. Assumes a height of 72px for each file display
Please note this does not account for extremely long file names that will cause the file display to increase in height by breaking line.number | 4 |  |
| **maxFiles** | Sets the maximum number of files if `multiple` is true.number | 6 |  |
| **maxFilesError** | The displayed error if file size exceeds `maxFiles`.string | Number of Files is over the maximum. |  |
| **maxSize** | Maximum file size in MBnumber | 0 |  |
| **multiple** | Allow for multiple files to be uploaded.boolean | false |  |
| **numFilesError** | The displayed error `multiple = false` and user tries to upload more than one file.string | You may not add more than one file. |  |
| **showFiles** | displays the files that are uploadedboolean | true |  |
| **uploadingError** | The displayed error if `file.validupload` is set to falsestring | Error Uploading File. |  |
| **Hide properties itemsproperties** | Hide properties items |  |  |
| **errorDetails** | object of error typesobject | { fileSizeError: false, extensionError: false, maxFilesError: false, isProcessing: false, validUploadError: false, fileNameError: false, fileNameLengthError: false, } |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **customContent** | No longer need to have custom content. Simply define dropAreaSlot to overwrite default content @deprecatedboolean | false |  |
| **addDescription** | *(deprecated - IBGT)*
Has no effect~~Show Description text~~boolean | false |  |
| **attachmentsHeader** | *(deprecated - IBGT)*
Has no effect~~Attachment text~~boolean | false |  |
| **centerAlignContent** | *(deprecated - IBGT)*
Has no effect~~Has no effect. DLS 3.1 has center alignment as a default.~~boolean | false |  |
| **descMaxLength** | *(deprecated - IBGT)*
Has no effect~~Length of Description text~~number | NaN |  |
| **descriptionHeader** | *(deprecated - IBGT)*
Has no effect~~Description text~~boolean | false |  |
| **displayErrors** | *(deprecated - IBGT)*
Use `displayMaxFilesError` instead.~~Will allow display of `maxFilesError` below the files uploaded area.~~boolean | false |  |
| **displayMultipleBelow** | *(deprecated - IBGT)*
As DLS 3.1 requires files be displayed below.~~Sets the files uploaded to be displayed below the droparea.~~boolean | false |  |
| **filesTag** | *(deprecated - IBGT)*
Has no effect~~Changes reference word of files~~boolean | false |  |
| **minimal** | *(deprecated - IBGT)*
Has no effect. Now you may set the `file.validupload` to hide the display of loader.boolean | false |  |
| **newDesign** | *(deprecated - IBGT)*
Use `customContent` instead, to do custom droparea content.~~Used to display DLS 3.0 design~~boolean | false |  |
| **orTag** | *(deprecated - IBGT)*
Has no effectstring |  |  |
| **showTooltip** | *(deprecated - IBGT)*
Has no effectboolean | false |  |
| **showUploadIcon** | *(deprecated - IBGT)*
Hide upload icon in DLS 3.0boolean | false |  |
| **text** | *(deprecated - IBGT)*
Has no effectboolean | false |  |
| **tooltipPosition** | *(deprecated - IBGT)*
Has no effectboolean | false |  |
| **uploadId** | *(deprecated - IBGT)*
Has no effect~~In DLS 3.0 ID uploads existed as a component display.~~boolean | false |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **registerOnChange** | calls onChange(fn: function) => void |  |  |
| **registerOnTouched** | calls onTouched(fn: function) => void |  |  |
| **setDisabledState** | sets disabled state of file upload area(isDisabled: boolean) => void |  |  |
| **updateUploadProgress** | updates the upload progress of a file in the files(fileObj: FileOutput, addedProgress: number) => boolean |  |  |
| **updateUploadStatus** | update upload status of file object(fileObj: FileOutput, uploadValid: boolean) => boolean |  |  |
| **validate** | checks if there is errors and returns errorDetails object(c: UntypedFormControl) => { fileSizeError: boolean; extensionError: boolean; maxFilesError: boolean; isProcessing: boolean; validUploadError: boolean; fileNameError: boolean; fileNameLengthError: boolean; } |  |  |
| **writeValue** | checks and updates files uploaded according to value input(value: any) => void |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The file upload's main content.HTMLElement | - |  |
| **dropAreaSlot** | Drop area text content.HTMLElement | - |  |

# **File Download**

# Usage

Import `DbsFileDownloadComponent` into your component or module.

```tsx
import { DbsFileDownloadComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsFileDownloadComponent],
})
```

## **Stories**

### **Basic Example**

Basic Example for default file download.

**Note**:

- Clicking on the file name or the download icon will trigger the `downloadEmitter` output emitter.
- `file` input is mandatory in order to display the `dbs-file-download` component, else there will be errors

```tsx
<dbs-file-download  (downloadEmitter)="downloadEmitter($event)" [file]="file" (deleteEmitter)="deleteEmitter($event)"></dbs-file-download>
```

### **Optional Fields**

Optional fields can be hidden with the inputs.

- Set `displayDelete` to `false` to hide the delete icon.
- Set `displayFileSize` to `false` to hide the file size text.
- Set `displayImagePreviewIcon` to `false` to hide the file icon.

```tsx
<dbs-file-download  (downloadEmitter)="downloadEmitter($event)" [file]="file" [displayDelete]="displayDelete" [displayFileSize]="displayFileSize" [displayImagePreviewIcon]="displayImagePreviewIcon" (deleteEmitter)="deleteEmitter($event)"></dbs-file-download>
```

### **Image Preview**

Image files can have a preview option by setting `imagePreview` to `true`.

- File icon will be replaced by a preview of the image.
- Clicking on the image icon will open a modal with the image file.

/