# Avatar Component

> User/profile graphic supporting initials, logos, icons, or images; multiple sizes and background colors

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsAvatarComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsAvatarComponent],
})
export class AvatarHost {}
```

---

## Basic Usage

```html
<dbs-avatar [name]="'John Doe'"></dbs-avatar>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| name | string | '' | Text used to derive initials (text variant). |
| backgroundColor | string | 'neutral' | Background color for text avatar (supports palettes like none, white, neutral, goji, ginger, lemon, lime, melon, mint, lavender, acai, and mixed pairs). |
| size | 'xs'|'sm'|'md'|'lg'|'xl' | 'md' | Avatar size. |
| variant | 'text'|'logo'|'icon'|'profile-image'|'squared' | 'text' | Visual/content variant. |

### Slot

- (default) — For logo/icon/image content

---

## Examples

```html
<!-- Sizes -->
<div style="display:flex;gap:8px;align-items:center;">
  <dbs-avatar [size]="'xs'" [name]="'Red Apple'"></dbs-avatar>
  <dbs-avatar [size]="'sm'" [name]="'Green Pear'"></dbs-avatar>
  <dbs-avatar [size]="'md'" [name]="'White Melon'"></dbs-avatar>
  <dbs-avatar [size]="'lg'" [name]="'Purple Grape'"></dbs-avatar>
  <dbs-avatar [size]="'xl'" [name]="'Pink Strawberry'"></dbs-avatar>
</div>

<!-- Background colors (text) -->
<div style="display:flex;gap:8px;flex-wrap:wrap;">
  <dbs-avatar [backgroundColor]="'none'" [name]="'none'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'white'" [name]="'white'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'neutral'" [name]="'neutral'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'goji'" [name]="'goji'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'ginger'" [name]="'ginger'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'lemon'" [name]="'lemon'"></dbs-avatar>
  <dbs-avatar [backgroundColor]="'mint'" [name]="'mint'"></dbs-avatar>
</div>

<!-- Variants -->
<dbs-avatar [variant]="'logo'"><img src="/assets/logo.svg" alt="logo" /></dbs-avatar>
<dbs-avatar [variant]="'icon'"><svg-icon iconName="user"></svg-icon></dbs-avatar>
<dbs-avatar [variant]="'profile-image'"><img src="/assets/profile.jpg" alt="profile" /></dbs-avatar>
<dbs-avatar [variant]="'squared'" [name]="'DBS'"></dbs-avatar>
```

---

## Styling Best Practices

- Use initials for fallback when image/logo is absent.
- Select background colors for contrast and brand alignment.

---

## Behavior Notes

- For `logo`/`icon`/`profile-image`, provide content via the default slot.

---

**Component File:** `avatar.md`
**Last Updated:** 2025-10-27

