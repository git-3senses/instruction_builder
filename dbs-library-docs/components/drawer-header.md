# Drawer Header Component

> Drawer top bar with optional back/close controls and slots for icons/badges

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsDrawerHeaderComponent, DbsIconButtonComponent, DbsBadgeComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsDrawerHeaderComponent, DbsIconButtonComponent, DbsBadgeComponent],
})
export class DrawerHeaderHost {}
```

---

## Basic Usage

```html
<dbs-drawer-header [title]="'Title'" (onClose)="onClose($event)"></dbs-drawer-header>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | '' | Header title. |
| subtitle | string | '' | Optional subtitle. |
| dismissible | boolean | false | Shows close button when true. |

### Events

- onClose — emitted when close button is clicked

### Slots

- startSlot — leading icon (e.g., back)
- endSlot — trailing actions (icon buttons)
- titleSlot — inline badge next to title

---

## Examples

```html
<!-- Start Slot (back) -->
<dbs-drawer-header [title]="'Title'" (onClose)="onClose($event)">
  <dbs-icon-button startSlot size="sm" aria-label="Previous page">
    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M14.53 5.47a.75.75 0 010 1.06L9.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L7.47 12.53a.75.75 0 010-1.06l5-5a.75.75 0 011.06 0z" fill="var(--color-icon-active)"/></svg>
  </dbs-icon-button>
</dbs-drawer-header>

<!-- End Slot (share) -->
<dbs-drawer-header [title]="'Title'" (onClose)="onClose($event)">
  <dbs-icon-button endSlot size="sm" aria-label="Share">
    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.53.22l3 3a.75.75 0 11-1.06 1.06L12.75 4.81V14a.75.75 0 01-1.5 0V4.81L9.53 6.53A.75.75 0 018.47 5.47l3-3a.75.75 0 01.53-.22z" fill="var(--color-icon-active)"/></svg>
  </dbs-icon-button>
</dbs-drawer-header>

<!-- Title Slot (badge) -->
<dbs-drawer-header [title]="'Title'" (onClose)="onClose($event)">
  <dbs-badge titleSlot priority="medium">12</dbs-badge>
</dbs-drawer-header>
```

---

## Styling Best Practices

- Keep title short; push secondary actions to `endSlot`.
- Use `titleSlot` for small badges or counters aligned with the title.

---

## Behavior Notes

- When `dismissible=false`, header may omit the close button; provide explicit closing action elsewhere.

---

**Component File:** `drawer-header.md`
**Last Updated:** 2025-10-27

