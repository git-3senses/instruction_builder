# Loader Component

> Visual indicator for loading or busy states; shows/hides via a single boolean input

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsLoaderComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsLoaderComponent],
})
export class LoaderHost {}
```

---

## Basic Usage

```html
<dbs-loader [loading]="isLoading"></dbs-loader>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| loading | boolean | false | When true, shows the loader; otherwise hidden. |

---

## Examples

```html
<!-- Inline loader -->
<dbs-loader [loading]="true"></dbs-loader>

<!-- Conditional display around content -->
<div *ngIf="isLoading; else content"><dbs-loader [loading]="true"></dbs-loader></div>
<ng-template #content>Loaded content</ng-template>
```

---

## Styling Best Practices

- Use loaders to indicate async operations; avoid long-running loaders without progress feedback.
- For partial areas, pair with skeletons or placeholder containers.

---

**Component File:** `loader.md`
**Last Updated:** 2025-10-27

