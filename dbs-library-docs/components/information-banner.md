# Information Banner Component

> Page-level inline banner for success/info/warning/error messages with optional actions and custom icon

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsInformationBannerComponent, DbsButtonComponent, DbsLinkComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsInformationBannerComponent, DbsButtonComponent, DbsLinkComponent],
})
export class InformationBannerHost {}
```

---

## Basic Usage

```html
<dbs-information-banner
  [variant]="'warning'"
  [title]="'This is a demo title'"
  [description]="'This is a demo description for a warning banner.'"
  [dismissible]="true">
</dbs-information-banner>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| variant | 'success'|'info'|'warning'|'error' | - | Visual style and semantics. |
| title | string | '' | Optional title. |
| description | string | '' | Optional description/body. |
| dismissible | boolean | true | Show close button. |
| opened | boolean | true | Show/hide the banner; two-way via `openedChange`. |

### Events

- openedChange: boolean — emits when opened state changes

### Slots

- (default) — Custom content area (replaces title/description block)
- [iconSlot] — Replace default icon

---

## Examples

```html
<!-- Variants -->
<dbs-information-banner [variant]="'success'" [title]="'Success'" [description]="'Action completed.'"></dbs-information-banner>
<dbs-information-banner [variant]="'info'" [title]="'FYI'" [description]="'Informational note.'"></dbs-information-banner>
<dbs-information-banner [variant]="'warning'" [title]="'Warning'" [description]="'Please review.'"></dbs-information-banner>
<dbs-information-banner [variant]="'error'" [title]="'Error'" [description]="'Something went wrong.'"></dbs-information-banner>

<!-- Only custom content -->
<dbs-information-banner [variant]="'info'">
  Review did not show any discriminatory words per <dbs-link>TAFEP guidelines</dbs-link>.
</dbs-information-banner>

<!-- With actions -->
<dbs-information-banner [variant]="'info'" [title]="'Action needed'" [description]="'You can take an action.'">
  <div>
    <dbs-button size="sm">Label</dbs-button>
  </div>
  </dbs-information-banner>

<!-- Custom icon -->
<dbs-information-banner [variant]="'info'" [title]="'Custom icon'" [description]="'Using iconSlot'">
  <svg-icon iconSlot iconName="comment-pencil" fill="var(--color-info)"></svg-icon>
</dbs-information-banner>
```

---

## Styling Best Practices

- Place banners near relevant content; avoid stacking multiple banners vertically.
- Use concise copy; reserve error variant for blocking issues.
- Keep action buttons limited and small (`size='sm'`).

---

## Behavior Notes

- `dismissible` controls the presence of a close button; also toggle `opened` for programmatic control.
- If both title and description are omitted, provide custom content via default slot.

---

**Component File:** `information-banner.md`
**Last Updated:** 2025-10-27

