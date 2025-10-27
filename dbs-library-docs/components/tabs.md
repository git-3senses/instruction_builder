# Tabs Component

> Multi‑variant tab navigation with counts, icons, and two-line labels

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsTabsComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsTabsComponent],
})
export class TabsHost {}
```

---

## Basic Usage

```html
<dbs-tabs
  [defaultTab]="'Tab 1'"
  [variant]="'default'"
  [size]="'md'"
  (onSelect)="onTabSelect($event)">
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'">
    <div style="padding-top: 16px">Tab 1 content here</div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div style="padding-top: 16px">Tab 2 content here</div>
  </dbs-tab>
</dbs-tabs>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| defaultTab | any | - | Sets active tab by matching `tabId`. If truthy but unmatched, first tab becomes active; if falsy, none selected by default. |
| variant | 'default'|'filter'|'switch'|'sub-tab' | 'default' | Visual style of tabs (replaces deprecated `type`). |
| twoline | boolean | false | Tabs with `\n` in `tabTitle` render on two lines when menu overflows (default variant only). |
| size | 'md'|'sm' | 'md' | Size for default and filter variants. |
| padding | 0|4|8|12|16|20|24|32 | 0 | Horizontal padding utility applied to the group. |
| showElevation | boolean | true | Shows shadow under tab group (default variant only). |
| showTabContent | boolean | true | Toggles rendering of tab content area. |
| onSelect | EventEmitter | - | Emits when a tab is selected. |

### Child: dbs-tab

| Property | Type | Description |
|----------|------|-------------|
| tabId | string | Unique id used for selection and `defaultTab` matching. |
| tabTitle | string | Tab label; supports newline for two-line titles. |
| count | number | Optional badge count. |
| iconName | string | Optional DLS icon name to show with title. |

---

## Variants and Sizes

```html
<!-- Default (md) -->
<dbs-tabs [variant]="'default'" [size]="'md'" [defaultTab]="'Tab 1'" (onSelect)="onTabSelect($event)">
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11"></dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'"></dbs-tab>
</dbs-tabs>

<!-- Filter (sm) with icon and count -->
<dbs-tabs [variant]="'filter'" [size]="'sm'" [defaultTab]="'Tab 3'">
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'"></dbs-tab>
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="5" [iconName]="'user'"></dbs-tab>
</dbs-tabs>
```

---

## Complete Example

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsTabsComponent } from '@dbs-angular/core';

type TabSelectEvent = { tabId: string } | any;

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [CommonModule, DbsTabsComponent],
  templateUrl: './tabs-demo.component.html',
  styleUrls: ['./tabs-demo.component.css']
})
export class TabsDemoComponent {
  active = signal('Tab 1');

  onTabSelect(evt: TabSelectEvent) {
    // Some implementations emit the tabId; adapt as needed
    this.active.set((evt?.tabId ?? evt) as string);
  }
}
```

```html
<!-- tabs-demo.component.html -->
<section class="tabs-container">
  <dbs-tabs
    [variant]="'default'"
    [size]="'md'"
    [defaultTab]="active()"
    [twoline]="false"
    [padding]="16"
    (onSelect)="onTabSelect($event)">
    <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'">
      <div class="tab-content">Tab 1 content here</div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
      <div class="tab-content">Tab 2 content here</div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
      <div class="tab-content">Tab 3 content here</div>
    </dbs-tab>
  </dbs-tabs>
</section>
```

```css
/* tabs-demo.component.css */
.tabs-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
}

.tab-content {
  padding-top: 16px;
  color: var(--color-text);
}
```

---

## Design Tokens Used

- --color-text
- --color-border
- --color-background-level-0
- --spacing-{sm,md,lg}

---

## Styling Best Practices

- Choose variant by information hierarchy: default for primary sections, filter for chip-like filtering, switch for binary navigation.
- Prefer `size='md'` on desktop and `size='sm'` in dense or mobile layouts.
- Use `twoline` only when labels necessarily wrap; keep titles concise.
- Keep horizontal spacing consistent via `padding` values from the allowed set.

---

## Behavior Notes

- `defaultTab` matches against each child `tabId`. If unmatched and truthy, first tab is selected.
- `onSelect` emits on user selection. Some builds emit `{ tabId }`; align handler accordingly.
- When `showTabContent` is false, the content area is not rendered; host layout should handle spacing.

---

**Component File:** `tabs.md`
**Last Updated:** 2025-10-27

