# Badge Component

> Small status indicator; can render as a dot or with text, with priority levels

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsBadgeComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsBadgeComponent],
})
export class BadgeHost {}
```

---

## Basic Usage

```html
<!-- With text -->
<dbs-badge [priority]="'medium'">New</dbs-badge>

<!-- Dot indicator only (no content) -->
<dbs-badge [priority]="'high'"></dbs-badge>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| priority | 'high'|'medium'|'low' | 'medium' | Emphasis/priority level. |

### Slot

- (default) — Badge content; omit for dot-only

---

## Examples

```html
<div style="display:flex; gap:12px; align-items:center;">
  <dbs-badge [priority]="'high'">99+</dbs-badge>
  <dbs-badge [priority]="'medium'">New</dbs-badge>
  <dbs-badge [priority]="'low'"></dbs-badge>
</div>
```

---

## Styling Best Practices

- Attach to the top-right of icons, buttons, or links; keep content short.
- Prefer dot-only for subtle presence; text for counts or short labels.

---

**Component File:** `badge.md`
**Last Updated:** 2025-10-27

