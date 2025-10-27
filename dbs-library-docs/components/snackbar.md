# Snackbar Component

> Transient feedback/toast with auto-close, status icons, custom icons, and actions

---

## Import

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsSnackbarComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsSnackbarComponent, DbsButtonComponent],
})
export class SnackbarHost {}
```

---

## Basic Usage

```html
<dbs-snackbar [opened]="true" [autoClose]="false">This is the content</dbs-snackbar>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| opened | boolean | true | Show or hide snackbar. Two-way via `(openedChange)`. |
| autoClose | boolean | true | Auto-dismiss after `timer` ms. |
| timer | number | 4000 | Time in ms before auto-dismiss (if `autoClose`). |
| closeButton | boolean | true | Show or hide the close button. |
| status | 'success'|'danger'|'warning'|'info' | - | Built-in status icon and color. |
| id | string | '' | Optional identifier for distinguishing snackbars. |
| maxWidth | number|null | token | Custom max-width (px). Defaults to `--snackbar-max-width`. |

### Slots

- (default) — Snackbar content
- iconSlot — Custom icon element
- actionsSlot — One or more action buttons (use `size="sm"`)

### Events

- openedChange: boolean — Emits when opened state changes

---

## Examples

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsSnackbarComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-snackbar-demo',
  standalone: true,
  imports: [CommonModule, DbsSnackbarComponent, DbsButtonComponent],
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent {
  opened = signal(false);

  show() { this.opened.set(true); }
  onOpenedChange(v: boolean) { this.opened.set(v); }
}
```

```html
<!-- snackbar-demo.component.html -->
<section class="demo">
  <dbs-button (click)="show()">Show snackbar</dbs-button>

  <!-- Auto-close with custom timer -->
  <dbs-snackbar
    [autoClose]="true"
    [timer]="1000"
    [opened]="opened()"
    (openedChange)="onOpenedChange($event)">
    This is the content
  </dbs-snackbar>

  <!-- Status icons -->
  <div class="stack">
    <dbs-snackbar [autoClose]="false" [status]="'success'">Success message</dbs-snackbar>
    <dbs-snackbar [autoClose]="false" [status]="'danger'">Danger message</dbs-snackbar>
    <dbs-snackbar [autoClose]="false" [status]="'warning'">Warning message</dbs-snackbar>
    <dbs-snackbar [autoClose]="false" [status]="'info'">Info message</dbs-snackbar>
  </div>

  <!-- Custom icon -->
  <dbs-snackbar [autoClose]="false">
    Snackbar with custom icon
    <svg iconSlot width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" fill="currentColor" />
    </svg>
  </dbs-snackbar>

  <!-- Actions -->
  <dbs-snackbar [autoClose]="false">
    Snackbar with action
    <dbs-button actionsSlot variant="primary" size="sm">Label</dbs-button>
  </dbs-snackbar>
</section>
```

```css
/* snackbar-demo.component.css */
.demo { display: flex; flex-direction: column; gap: 16px; }
.stack { display: flex; flex-direction: column; gap: 8px; }
```

---

## Styling Best Practices

- Limit to one or two actions; use `size="sm"` for action buttons.
- Prefer built-in statuses for consistency; use `iconSlot` for special cases.
- Keep messages concise; wrap long text to avoid covering content.
- Use `maxWidth` only when necessary; default token fits most layouts.

---

## Behavior Notes

- `autoClose` and `timer` control lifecycle; user interaction (close button) should also emit `openedChange=false`.
- Status sets icon and style; custom icon via `iconSlot` overrides the default.
- When used inside containers, prefer `DbsSnackbarContainer` to control stacking and placement.

---

**Component File:** `snackbar.md`
**Last Updated:** 2025-10-27

