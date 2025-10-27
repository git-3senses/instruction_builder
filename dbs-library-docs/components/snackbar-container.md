# Snackbar Container Component

> Manages a list/stack of snackbars with defaults for auto-close, timer, close button, and DOM placement

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsSnackbarContainerComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsSnackbarContainerComponent, DbsButtonComponent],
})
export class SnackbarContainerHost {}
```

---

## Basic Usage

```html
<dbs-snackbar-container
  [autoClose]="false"
  [snackbars]="[
    { message: 'Default snackbar.' },
    { message: 'Success.', status: 'success' },
    { message: 'Danger.', status: 'danger' },
    { message: 'Warning.', status: 'warning' },
    { message: 'Info.', status: 'info' }
  ]">
</dbs-snackbar-container>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| autoClose | boolean | true | Default `autoClose` for each snackbar item. |
| timer | number | 4000 | Default `timer` for each snackbar item. |
| closeButton | boolean | true | Default `closeButton` for each snackbar item. |
| maxWidth | number|null | token | Default max-width for snackbars (px). |
| snackbars | DbsSnackbarContainerComponentSnackbar[] | [] | Snackbars to render; per-item `autoClose`/`timer` may override defaults. |
| moveToDocument | boolean | false | Render container at end of `document.body` for layering.

### Events

- openedChange — Emits when a snackbar’s `opened` changes
- snackbarsChange — Emits when the snackbars array changes

### Slots

- (default) — Pass customised `dbs-snackbar` content when not using `snackbars` data

---

## Data Shape (DbsSnackbarContainerComponentSnackbar)

```typescript
type DbsSnackbarContainerComponentSnackbar = {
  id?: string;
  message: string;
  status?: 'success'|'danger'|'warning'|'info';
  autoClose?: boolean;
  timer?: number;
  icon?: { name: string };
  actions?: Array<{
    text: string;
    variant?: 'primary'|'secondary'|'plain';
    loading?: boolean;
    onClick?: () => any;
  }>;
};
```

---

## Examples

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsSnackbarContainerComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-snackbar-container-demo',
  standalone: true,
  imports: [CommonModule, DbsButtonComponent, DbsSnackbarContainerComponent],
  templateUrl: './snackbar-container-demo.component.html',
  styleUrls: ['./snackbar-container-demo.component.css']
})
export class SnackbarContainerDemoComponent {
  messagesTemplate = [
    { message: 'Simple snackbar.' },
    { message: 'With custom icon.', icon: { name: 'pulse' } },
    { message: 'Success status.', status: 'success' },
  ];

  messages = [] as any[];

  showTemplate() { this.messages = this.messagesTemplate.map(m => ({ id: crypto.randomUUID(), ...m })); }
  clear() { this.messages = []; }
  pushSuccess() { this.messages = [{ id: crypto.randomUUID(), message: 'Saved', status: 'success' }, ...this.messages]; }
}
```

```html
<!-- snackbar-container-demo.component.html -->
<section class="demo">
  <div class="actions">
    <dbs-button (click)="showTemplate()">Show examples</dbs-button>
    <dbs-button (click)="pushSuccess()" variant="primary">Push success</dbs-button>
    <dbs-button (click)="clear()" variant="plain">Clear</dbs-button>
  </div>

  <dbs-snackbar-container [autoClose]="false" [snackbars]="messages"></dbs-snackbar-container>

  <p>Move To Document</p>
  <dbs-snackbar-container [autoClose]="false" [moveToDocument] [snackbars]="messages"></dbs-snackbar-container>
</section>
```

```css
/* snackbar-container-demo.component.css */
.demo { display: flex; flex-direction: column; gap: 16px; }
.actions { display: flex; gap: 8px; flex-wrap: wrap; }
```

---

## Styling Best Practices

- Use container for stacking, consistent placement, and z-layering.
- Prefer `moveToDocument` where overlay layering or MFE isolation requires body-level placement.
- Keep max width reasonable via tokens or `maxWidth` for readability.

---

## Behavior Notes

- Each snackbar can override `autoClose`/`timer` set by the container.
- Provide stable `id` values for tracking and screen reader updates.
- Use actions sparingly; prefer one primary action.

---

**Component File:** `snackbar-container.md`
**Last Updated:** 2025-10-27

