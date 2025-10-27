# File Download Component

> Display a downloadable file item with optional image preview, size, and delete action

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsFileDownloadComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsFileDownloadComponent],
})
export class FileDownloadHost {}
```

---

## Basic Usage

```html
<dbs-file-download
  [file]="{ file: new File(['data'], 'example.pdf'), progress: 100 }"
  (downloadEmitter)="onDownload($event)"
  (deleteEmitter)="onDelete($event)">
</dbs-file-download>
```

---

## Key Inputs

| Input | Type | Default | Notes |
|-------|------|---------|-------|
| file | object | required | Mandatory; contains underlying File and computed fields (e.g., progress). |
| imagePreview | boolean | false | Replace icon with image preview and modal on click. |
| displayDelete | boolean | true | Toggle delete icon. |
| displayFileSize | boolean | true | Toggle size text. |
| displayImagePreviewIcon | boolean | true | Toggle image icon. |

### Outputs

- downloadEmitter — emitted when name or download icon clicked
- deleteEmitter — emitted on delete icon click

---

## Styling Best Practices

- Use with disabled `dbs-file-upload` to present a read-only list of files.
- Prefer uniform container spacing and tokenized colors for size text.

---

## Behavior Notes

- `file` input is required; component will error if missing.
- Image preview replaces icon and opens a modal when clicked.

---

**Component File:** `file-download.md`
**Last Updated:** 2025-10-27

