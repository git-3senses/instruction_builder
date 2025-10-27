# Secondary Side Nav Component

> Contextual page navigation with title, collapsible subpages, and optional click-outside collapse

---

## Import

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsNavSideSecondaryComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsNavSideSecondaryComponent],
})
export class NavSideSecondaryHost {}
```

---

## Basic Usage

```html
<dbs-nav-side-secondary
  [title]="'Page title'"
  [navItems]="navItems"
  [navItemsFooter]="navItemsFooter">
</dbs-nav-side-secondary>
```

---

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| title | string | Section/page title rendered above the list. |
| navItems | NavItem[] | List of items; supports `subpages` for nested items. |
| navItemsFooter | NavItem[] | Optional footer items. |
| isSubpagePanelOpen | boolean | Opens subpage panel by default (when many subpages). |
| collapseNavOnClickOutside | boolean | Collapse the nav when clicking outside. |

---

## Example

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsNavSideSecondaryComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-secondary-side-nav-demo',
  standalone: true,
  imports: [CommonModule, DbsNavSideSecondaryComponent],
  templateUrl: './secondary-side-nav-demo.component.html',
  styleUrls: ['./secondary-side-nav-demo.component.css']
})
export class SecondarySideNavDemoComponent {
  navItems = [
    { selected: false, selectable: true, label: 'route page', route: 'home' },
    { selected: false, selectable: false, label: 'href page', href: '#testpage', target: '_blank' },
    { selected: false, selectable: false, label: 'non-navigation item' },
    {
      selected: false,
      selectable: true,
      label: 'with >5 subpages',
      subpages: [
        { selected: false, selectable: true, label: 'Report A', route: 'report-a' },
        { selected: false, selectable: true, label: 'Report B', route: 'report-b' },
        { selected: false, selectable: true, label: 'Report C', route: 'report-c' },
        { selected: false, selectable: true, label: 'Report D', route: 'report-d' },
        { selected: false, selectable: true, label: 'Report E', route: 'report-e' },
        { selected: false, selectable: true, label: 'Report F', route: 'report-f' },
      ],
      isSubpagePanelOpen: true,
    },
  ];

  navItemsFooter = [
    { selected: false, selectable: true, label: 'Help and Feedback', icon: 'circle-question' },
  ];
}
```

```html
<!-- secondary-side-nav-demo.component.html -->
<aside class="secondary-nav">
  <dbs-nav-side-secondary
    [title]="'Page title'"
    [navItems]="navItems"
    [navItemsFooter]="navItemsFooter"
    [collapseNavOnClickOutside]="true">
  </dbs-nav-side-secondary>
</aside>
```

```css
/* secondary-side-nav-demo.component.css */
.secondary-nav {
  width: 280px;
  background: var(--color-background-level-0);
  border-right: 1px solid var(--color-border);
}
```

---

## Styling Best Practices

- Use secondary side nav for in-section navigation (e.g., settings pages, dashboards).
- When subpages exceed five items, consider starting with `isSubpagePanelOpen` for quicker access.
- Use `collapseNavOnClickOutside` in dense layouts to save space.

---

## Behavior Notes

- Items can be non-selectable placeholders or external links (`href`/`target`).
- Subpages render nested navigation; behavior may switch to a panel for long lists.

---

**Component File:** `nav-side-secondary.md`
**Last Updated:** 2025-10-27

