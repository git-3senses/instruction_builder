# Floating Action Button Component

> Prominent floating action; supports sizes and dim for dark backgrounds

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsFloatingActionButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsFloatingActionButtonComponent],
})
export class FabHost {}
```

---

## Basic Usage

```html
<dbs-floating-action-button>
  <svg-icon iconName="plus"></svg-icon>
</dbs-floating-action-button>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | 'xs'|'sm'|'md'|'lg' | 'md' | Control size. |
| dim | boolean | false | Colors for dark backgrounds. |

### Slot

- (default) — Place the icon/content here (typically a 24px icon)

---

## Examples

```html
<!-- Sizes -->
<dbs-floating-action-button [size]="'xs'"><svg-icon iconName="chevron-up"></svg-icon></dbs-floating-action-button>
<dbs-floating-action-button [size]="'sm'"><svg-icon iconName="chevron-up"></svg-icon></dbs-floating-action-button>
<dbs-floating-action-button><svg-icon iconName="chevron-up"></svg-icon></dbs-floating-action-button>
<dbs-floating-action-button [size]="'lg'"><svg-icon iconName="chevron-up"></svg-icon></dbs-floating-action-button>

<!-- Dim on dark -->
<div style="background:var(--color-background-level-2);padding:8px;display:flex;gap:8px;">
  <dbs-floating-action-button [size]="'xs'" [dim]="true"><svg-icon iconName="check"></svg-icon></dbs-floating-action-button>
  <dbs-floating-action-button [size]="'sm'" [dim]="true"><svg-icon iconName="check"></svg-icon></dbs-floating-action-button>
</div>
```

---

## Styling Best Practices

- Pair with a primary, high-value action; avoid multiple FABs in a single view.
- Ensure adequate contrast on dim/dark backgrounds.

---

## Behavior Notes

- FAB typically anchors at viewport edges; ensure it does not obscure key UI.

---

**Component File:** `floating-action-button.md`
**Last Updated:** 2025-10-27

