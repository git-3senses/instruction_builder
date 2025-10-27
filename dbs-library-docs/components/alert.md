# Alert Component

> Inline message to display warnings, errors, or informational notes

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsAlertComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsAlertComponent],
})
export class AlertHost {}
```

---

## Basic Usage

```html
<dbs-alert [opened]="true" [title]="'Too many failed attempts'">
  Please try again after 5 minutes.
</dbs-alert>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| opened | boolean | true | Show or hide the alert. Two-way via `openedChange`. |
| title | string | '' | Optional alert title. |

### Events

- openedChange: boolean — emits when `opened` changes

### Slot

- (default) — Alert message content

### Methods

- closeAlert(): void — programmatically close the alert

---

## Examples

```html
<!-- Title + content -->
<dbs-alert [opened]="true" [title]="'Too many failed attempts'">Please try again after 5 minutes.</dbs-alert>

<!-- Content only -->
<dbs-alert [opened]="true">Your profile has been updated.</dbs-alert>

<!-- Two-way binding -->
<dbs-alert [(opened)]="isOpen" title="Warning">Account is locked.</dbs-alert>
```

---

## Styling Best Practices

- Keep messages concise and actionable; add a title when severity is high.
- Place alerts near the affected content or at page-level for form errors.

---

## Behavior Notes

- When `opened=false`, content is removed from layout.
- Use `openedChange` to synchronize dismissals.

---

**Component File:** `alert.md`
**Last Updated:** 2025-10-27

