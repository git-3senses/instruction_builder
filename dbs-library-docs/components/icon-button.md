# Icon Button Component

> Clickable icon-only button with standard, outline, and circle variants; supports dim and bound

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsIconButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsIconButtonComponent],
})
export class IconButtonHost {}
```

---

## Basic Usage

```html
<dbs-icon-button [variant]="'standard'">
  <svg-icon iconName="close"></svg-icon>
</dbs-icon-button>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| variant | 'standard'|'outline'|'circle' | 'standard' | Visual style. |
| size | 'xs'|'sm'|'md'|'lg' | 'md' | Control size. |
| disabled | boolean | false | Disable interaction. |
| dim | boolean | false | Colors for dark backgrounds. |
| bound | boolean | false | Negative margin for optical alignment (standard only). |

### Slot

- (default) — Place the SVG element here

---

## Examples

```html
<!-- Variants -->
<dbs-icon-button [variant]="'standard'"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>
<dbs-icon-button [variant]="'outline'"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>
<dbs-icon-button [variant]="'circle'"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>

<!-- Sizes -->
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-icon-button [size]="'xs'"><svg-icon iconName="close"></svg-icon></dbs-icon-button>
  <dbs-icon-button [size]="'sm'"><svg-icon iconName="close"></svg-icon></dbs-icon-button>
  <dbs-icon-button [size]="'md'"><svg-icon iconName="close"></svg-icon></dbs-icon-button>
  <dbs-icon-button [size]="'lg'"><svg-icon iconName="close"></svg-icon></dbs-icon-button>
</div>

<!-- Disabled -->
<dbs-icon-button [disabled]="true"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>

<!-- Dim on dark -->
<div style="display:flex;gap:8px;flex-wrap:wrap;background:var(--color-background-level-2);padding:8px;">
  <dbs-icon-button [dim]="true" [variant]="'standard'"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>
  <dbs-icon-button [dim]="true" [variant]="'outline'"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>
</div>

<!-- Bound standard (optical alignment) -->
<p>Start of a line of text</p>
<dbs-icon-button [variant]="'standard'" [bound]="true"><svg-icon iconName="chevron-right"></svg-icon></dbs-icon-button>
```

---

## Styling Best Practices

- Provide aria-labels when icon-only; ensure meaning is accessible.
- Use `bound` only for standard variant to align with adjacent text.
- Keep icons sized consistently; follow container size.

---

## Behavior Notes

- Prefer `dim` for dark backgrounds.
- Disabled state prevents focus and click.

---

**Component File:** `icon-button.md`
**Last Updated:** 2025-10-27

---

## Quick Reference

### Variants

| Variant | Purpose |
|---------|---------|
| standard | Padded icon-only button |
| outline | Bordered icon-only button |
| circle | Circular icon-only button |

### Sizes

| Size | Typical Use |
|------|-------------|
| xs | Tight spaces, toolbar icons |
| sm | Default dense usage |
| md | Default general usage |
| lg | Prominent icon actions |
