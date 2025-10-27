# Link Component

> Stylized anchor with color options and optional bound (optical alignment)

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsLinkComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsLinkComponent],
})
export class LinkHost {}
```

---

## Basic Usage

```html
<div style="
  font-family: var(--text-body-font-family);
  font-weight: var(--text-body-font-weight);
  font-size: var(--text-body-md-font-size);
  line-height: var(--text-body-leading);
  letter-spacing: var(--text-body-tracking);
">
  <dbs-link [href]="href" [color]="'product'">I am a link</dbs-link>
</div>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| href | string | '' | URL for anchor. |
| color | 'product'|'subtle'|'text'|'on-dim' | 'product' | Visual color style. |
| bound | boolean | true | Negative margin for optical alignment. Set false to remove.

### Slot

- (default) — Link text/content

---

## Examples

```html
<dbs-link [href]="'https://example.com'" [color]="'product'" [bound]="false">Link (product, unbound)</dbs-link>
<dbs-link [href]="'https://example.com'" [color]="'subtle'">Link (subtle)</dbs-link>
<dbs-link [href]="'https://example.com'" [color]="'text'">Link (text)</dbs-link>
<div style="background: var(--color-icon-active); padding: 8px;">
  <dbs-link [href]="'https://example.com'" [color]="'on-dim'">Link (on-dim)</dbs-link>
</div>
```

---

## Styling Best Practices

- Place links inline with copy; avoid using as buttons.
- Use `on-dim` only on dark backgrounds to ensure contrast.

---

## Behavior Notes

- `bound` defaults to true to align with typography metrics; set to false when alignment is not needed.

---

**Component File:** `link.md`
**Last Updated:** 2025-10-27

