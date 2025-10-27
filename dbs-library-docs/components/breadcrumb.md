# Breadcrumb Component

> Navigation trail with truncation and selection handling

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsBreadcrumbComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsBreadcrumbComponent],
})
export class BreadcrumbHost {}
```

---

## Basic Usage

```html
<dbs-breadcrumb
  [maxLeading]="2"
  [maxTrailing]="2"
  [selected]="selected"
  [breadcrumbs]="breadcrumbs"
  (onSelect)="onSelect($event)">
</dbs-breadcrumb>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| maxLeading | number | 2 | Items to show before truncation (earlier crumbs collapse into a menu). |
| maxTrailing | number | 2 | Items to show after truncation (later crumbs collapse into a menu). |
| selected | string|BreadcrumbItem | - | Selected crumb; pass a value or a BreadcrumbItem. |
| breadcrumbs | Array<BreadcrumbItem> | [] | List of crumbs. Selection is controlled via `selected`. |

### Events

- onSelect — emits selected BreadcrumbItem/value

### Types

```typescript
interface BreadcrumbItem {
  value: string;
  label: string;
  selected?: boolean;
}
```

---

## Examples

```html
<!-- With ellipsis truncation -->
<dbs-breadcrumb [maxLeading]="2" [maxTrailing]="2" [selected]="selected" [breadcrumbs]="breadcrumbs" (onSelect)="onSelect($event)"></dbs-breadcrumb>

<!-- Custom popover trigger on link click -->
<dbs-breadcrumb
  (click)="($event?.target?.tagName === 'A') ? popover.openPopover($event?.target, 'bottom-start') : null"
  [breadcrumbs]="[{ value: 'Item 1', label: 'Item 1' }, { value: 'Item 2', label: 'Item 2' }, { value: 'Item 3', label: 'Item 3' }]"
  [maxLeading]="2"
  [maxTrailing]="2"
  [selected]="selected"
  (onSelect)="onSelect($event)">
</dbs-breadcrumb>
```

---

## Styling Best Practices

- Keep labels short; rely on ellipsis for long trails.
- Use `onSelect` to navigate; do not depend on anchor default only.

---

**Component File:** `breadcrumb.md`
**Last Updated:** 2025-10-27

