# Drawer Component

> Sliding panel with overlay, header/footer composition, and controlled open/close

---

## Import

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsDrawerComponent, DbsButtonComponent, DbsSnackbarContainerComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsDrawerComponent, DbsButtonComponent, DbsSnackbarContainerComponent],
})
export class DrawerHost {}
```

---

## Basic Usage

```html
<div style="min-height: 500px;">
  <dbs-button (click)="drawer.setOpened(true)">Open Drawer</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer (bound)</dbs-button>

  <dbs-drawer
    #drawer
    [overlay]="true"
    [dismissible]="true"
    [opened]="opened"
    [title]="'Drawer Title'"
    (onBack)="onBack($event)"
    (openedChange)="opened = $event">
    <!-- Drawer content here -->
  </dbs-drawer>

  <!-- Body-layer snackbar container with z-index above drawer -->
  <dbs-snackbar-container [style.z-index]="drawer.zIndex + 20" [moveToDocument] [snackbars]="snackbars"></dbs-snackbar-container>
</div>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| overlay | boolean | true | Show background overlay behind the drawer. |
| dismissible | boolean | true | Allow close via outside click and close icon. |
| opened | boolean | false | Controlled open state; two-way via `openedChange`. |
| title | string | '' | Title displayed in the header (if used). |

### Events

- onBack — emitted from header/back interaction
- openedChange — emitted when open state changes

### Methods

- setOpened(value: boolean)

---

## Composition

Use `dbs-drawer-header` and `dbs-drawer-footer` inside the drawer content region for consistent layout.

```html
<dbs-drawer [opened]="opened" (openedChange)="opened=$event">
  <dbs-drawer-header [title]="'Title'"></dbs-drawer-header>
  <section style="padding: 16px;">Body content</section>
  <dbs-drawer-footer>
    <dbs-button endSlot variant="primary">Next</dbs-button>
    <dbs-button endSlot>Cancel</dbs-button>
  </dbs-drawer-footer>
</dbs-drawer>
```

---

## Styling Best Practices

- Elevation and z-index: components like snackbar containers may require `moveToDocument` and a higher z-index than the drawer.
- Keep content scrollable inside while header/footer remain sticky, when supported.
- Use concise titles; place secondary actions in footer.

---

## Behavior Notes

- `dismissible=false` prevents closing via overlay or close icon; handle closing via explicit actions.
- Overlay presence improves focus and modal semantics; ensure proper focus trapping if available.

---

**Component File:** `drawer.md`
**Last Updated:** 2025-10-27

