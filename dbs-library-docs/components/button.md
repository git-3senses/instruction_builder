# Button Component

> Action button with variants, sizes, loading state, start/end slots, and full-width option

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsButtonComponent],
})
export class ButtonHost {}
```

---

## Basic Usage

```html
<dbs-button [variant]="'primary'">Button text</dbs-button>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| variant | 'primary'|'secondary'|'plain'|'positive'|'destructive' | 'secondary' | Visual style. |
| size | 'xs'|'sm'|'md'|'lg' | 'md' | Button size. |
| type | 'button'|'submit'|'reset' | 'button' | Native button type. |
| disabled | boolean | false | Disable interaction. |
| loading | boolean | false | Show loading state (primary/secondary/positive/destructive only). |
| fullWidth | boolean | false | Stretch to container width. |
| dim | boolean | false | Colors for dark backgrounds (e.g., in snackbars). |
| bound | boolean | false | Negative margin for optical alignment (plain only). |

### Slots

- (default) — Main label/content
- startSlot — Leading content (icon/badge/logo)
- endSlot — Trailing content

---

## Examples

```html
<!-- Variants -->
<dbs-button [variant]="'primary'">Primary</dbs-button>
<dbs-button [variant]="'secondary'">Secondary</dbs-button>
<dbs-button [variant]="'plain'">Plain</dbs-button>
<dbs-button [variant]="'positive'">Positive</dbs-button>
<dbs-button [variant]="'destructive'">Destructive</dbs-button>

<!-- Sizes -->
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-button [size]="'xs'">XS</dbs-button>
  <dbs-button [size]="'sm'">SM</dbs-button>
  <dbs-button [size]="'md'">MD</dbs-button>
  <dbs-button [size]="'lg'">LG</dbs-button>
</div>

<!-- Full width -->
<dbs-button [fullWidth]="true">Full-width button</dbs-button>

<!-- Disabled -->
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-button [disabled]="true" [variant]="'primary'">Primary</dbs-button>
  <dbs-button [disabled]="true" [variant]="'secondary'">Secondary</dbs-button>
  <dbs-button [disabled]="true" [variant]="'plain'">Plain</dbs-button>
  <dbs-button [disabled]="true" [variant]="'positive'">Positive</dbs-button>
  <dbs-button [disabled]="true" [variant]="'destructive'">Destructive</dbs-button>
</div>

<!-- Start/End slots with DLS sizing guidance (8px gap, 16px icon) -->
<style>
  svg-icon { width:16px;height:16px; }
</style>
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-button><svg-icon startSlot iconName="chevron-left"></svg-icon>Previous</dbs-button>
  <dbs-button>Next<svg-icon endSlot iconName="chevron-right"></svg-icon></dbs-button>
</div>

<!-- Dim on dark -->
<div style="display:flex;gap:8px;flex-wrap:wrap;background:var(--color-background-level-2);padding:8px;">
  <dbs-button [dim]="true" [variant]="'secondary'">Dim Secondary</dbs-button>
  <dbs-button [dim]="true" [variant]="'plain'">Dim Plain</dbs-button>
</div>

<!-- Loading -->
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-button [loading]="true" [variant]="'primary'"></dbs-button>
  <dbs-button [loading]="true" [variant]="'secondary'"></dbs-button>
  <dbs-button [loading]="true" [variant]="'positive'"></dbs-button>
  <dbs-button [loading]="true" [variant]="'destructive'"></dbs-button>
</div>

<!-- Bound plain for optical alignment -->
<p style="display:inline">Start of a line of text</p>
<div><dbs-button [variant]="'plain'" [bound]="true" [size]="'xs'">Bound</dbs-button></div>
```

---

## Quick Reference

### Variants

| Variant | Purpose |
|---------|---------|
| primary | High-emphasis primary actions |
| secondary | Medium-emphasis secondary actions |
| plain | Low-emphasis inline/actions in cards/dialogs |
| positive | Strong positive outcome actions |
| destructive | Risky/destructive actions |

### Sizes

| Size | Typical Use |
|------|-------------|
| xs | Dense UIs, inline text alignment |
| sm | Secondary actions, mobile |
| md | Default general purpose |
| lg | Prominent CTAs |

```typescript
// Form submit example
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DbsButtonComponent } from '@dbs-angular/core';

@Component({
  selector: 'form-submit-story',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsButtonComponent],
  templateUrl: 'form-submit-story.component.html'
})
export class FormSubmitStoryComponent {
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({});
  submitted = false;
  onSubmit() { this.submitted = true; }
  onClear() { this.submitted = false; }
}
```

```html
<!-- form-submit-story.component.html -->
<form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
  <dbs-button type="submit" variant="primary">Submit</dbs-button>
</form>
<h3 *ngIf="submitted">
  Submitted!
  <dbs-button type="button" size="sm" (click)="onClear()">Clear</dbs-button>
</h3>
```

---

## Styling Best Practices

- Use primary for high-emphasis actions; secondary for medium, plain for low-emphasis; positive for strong confirmation; destructive for risky actions.
- Keep icon + label gap to 8px and icon size to 16px.
- Avoid disabled in forms; prefer validation with page-level and inline alerts.
- Use `dim` for dark backgrounds such as snackbars; ensure contrast.

---

## Behavior Notes

- Loading replaces label with spinner for supported variants.
- `bound` only applies to plain; used to align with text visually.
- `type="submit"` hooks into (ngSubmit) in Angular forms.

---

**Component File:** `button.md`
**Last Updated:** 2025-10-27
