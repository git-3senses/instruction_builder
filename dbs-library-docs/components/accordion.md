# Accordion Component

> Expandable/collapsible section with title, optional subtitle, and customizable header content

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsAccordionComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsAccordionComponent, DbsButtonComponent],
})
export class AccordionHost {}
```

---

## Basic Usage

```html
<dbs-accordion [title]="'This is the title'">This is the content.</dbs-accordion>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | '' | Header title. |
| opened | boolean | false | Expanded state; two-way via `openedChange`. |
| subtitle | string | '' | Optional header subtitle. |
| variant | 'box'|'separator' | 'box' | Visual style. |

### Events

- openedChange: boolean — emits when expanded state changes

### Slots

- (default) — Main content
- headerSlot — Replace the entire default header content
- headerStartSlot — Before header title/subtitle
- headerEndSlot — After header title/subtitle (before chevron)
- headerBottomSlot — Below the header

### Methods

- toggle(): void — toggle expanded state

---

## Examples

```html
<!-- Opened -->
<dbs-accordion [title]="'This is the title'" [opened]="true">This is the content.</dbs-accordion>

<!-- Separator variant -->
<dbs-accordion [title]="'This is the title'" [variant]="'separator'">This is the content.</dbs-accordion>

<!-- With subtitle and header end slot -->
<dbs-accordion [title]="'This is the title'" [subtitle]="'This is the subtitle'">
  This is the content.
  <dbs-button headerEndSlot variant="plain">Action</dbs-button>
</dbs-accordion>
```

---

## Styling Best Practices

- Use `separator` to minimize chrome where borders are visually heavy.
- Place contextual actions in `headerEndSlot`.

---

**Component File:** `accordion.md`
**Last Updated:** 2025-10-27

