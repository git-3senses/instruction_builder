# Card Button Component

> Card-like button for navigation or actions; supports icon/title/subtitle and custom content

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsCardButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsCardButtonComponent],
})
export class CardButtonHost {}
```

---

## Basic Usage

```html
<dbs-card-button [title]="'Card Button Title'" [subtitle]="'Card Button Subtitle'">
  <svg-icon iconSlot iconName="plus-circle"></svg-icon>
</dbs-card-button>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | '' | Title text. |
| subtitle | string | '' | Subtitle text. |
| disabled | boolean | false | Disable interaction. |

### Slots

- iconSlot — Icon before the text
- (default) — Content after title and subtitle
- titleSlot — Custom title content
- subtitleSlot — Custom subtitle content

---

## Examples

```html
<!-- Title only -->
<dbs-card-button [title]="'Card Button Title'"></dbs-card-button>

<!-- Subtitle only -->
<dbs-card-button [subtitle]="'Card Button Subtitle'"></dbs-card-button>

<!-- Custom content -->
<dbs-card-button><svg-icon iconSlot iconName="plus-circle"></svg-icon><div>Custom content</div></dbs-card-button>

<!-- Mixed inputs and slots -->
<dbs-card-button [title]="'Regular Title'"><span subtitleSlot>Custom <em>Subtitle</em></span><svg-icon iconSlot iconName="plus-circle"></svg-icon></dbs-card-button>
```

---

## Styling Best Practices

- Keep titles concise; use subtitles for supporting context.
- Icons should be meaningful and consistent with the destination/action.

---

## Behavior Notes

- When both `titleSlot` and `title` are provided, prefer `titleSlot` as the rendered title.

---

**Component File:** `card-button.md`
**Last Updated:** 2025-10-27

