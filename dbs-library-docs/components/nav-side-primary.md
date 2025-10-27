# Primary Side Nav Component

> App-level vertical navigation with headings, subpages, badges, and router integration

---

## Import

```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DbsNavSidePrimaryComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DbsButtonComponent, DbsNavSidePrimaryComponent],
})
export class NavSidePrimaryHost {}
```

---

## Basic Usage

```html
<dbs-nav-side-primary
  [navItems]="navItems"
  [navItemsFooter]="navItemsFooter"
  (onNavClick)="onNavClick($event)">
</dbs-nav-side-primary>
```

---

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| navItems | NavHeadingOrItem[] | Main navigation items; supports headings and items with optional `subpages` (NavSubItem[]). |
| navItemsFooter | NavHeadingOrItem[] | Optional footer items area. |
| opened | boolean | Controls expanded/collapsed state (for overlay/compact patterns). |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| onNavClick | NavItem | Fired when a selectable item is clicked; use to navigate. |

---

## Complete Example (Router + Overlay Pattern)

```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DbsButtonComponent, DbsNavSidePrimaryComponent, NavHeadingOrItem, NavItem } from '@dbs-angular/core';

@Component({
  selector: 'app-primary-side-nav-demo',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DbsButtonComponent, DbsNavSidePrimaryComponent],
  templateUrl: './primary-side-nav-demo.component.html',
  styleUrls: ['./primary-side-nav-demo.component.css']
})
export class PrimarySideNavDemoComponent {
  router = inject(Router);

  navItems: NavHeadingOrItem[] = [
    { selected: false, selectable: true, icon: 'home-tab', label: 'Home', route: 'home' },
    { selected: false, selectable: true, icon: 'user', label: 'Users', route: 'users' },
    {
      selected: false,
      selectable: true,
      icon: 'report',
      label: 'Reports',
      subpages: [
        { selected: false, selectable: true, label: 'Report A', route: 'report-a' },
        { selected: false, selectable: true, label: 'Report B', route: 'report-b' },
      ],
    },
    { selected: false, selectable: true, icon: 'bell', label: 'Alerts', badge: { priority: 'low', text: '3' } },
  ];

  navItemsFooter: NavHeadingOrItem[] = [
    { selected: false, selectable: true, label: 'Help & Feedback', icon: 'circle-question' },
  ];

  onNavClick(navItem: NavItem) {
    if (navItem.route) this.router.navigate([navItem.route]);
  }
}
```

```html
<!-- primary-side-nav-demo.component.html -->
<div class="layout">
  <header class="sidenav">
    <dbs-nav-side-primary
      [navItems]="navItems"
      [navItemsFooter]="navItemsFooter"
      (onNavClick)="onNavClick($event)">
    </dbs-nav-side-primary>
  </header>
  <main class="content">
    <div class="router-outlet">
      <router-outlet />
    </div>
    <div class="links">
      <dbs-button routerLink="/home">Home</dbs-button>
      <dbs-button routerLink="/users">Users</dbs-button>
      <dbs-button routerLink="/report-a">Report A</dbs-button>
      <dbs-button routerLink="/report-b">Report B</dbs-button>
    </div>
  </main>
  <!-- Optional overlay pattern: collapse content margin to 72px and let sidenav overlay when opened -->
</div>
```

```css
/* primary-side-nav-demo.component.css */
.layout {
  display: flex;
  position: absolute;
  inset: 0;
}

.sidenav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
}

.content {
  width: 100%;
  margin-left: 72px; /* collapsed width */
  padding: 48px;
  background: var(--color-background-level-1);
  overflow-y: auto;
}

.router-outlet { padding: 24px 0; }

.links { display: flex; gap: 8px; flex-wrap: wrap; }
```

---

## Styling Best Practices

- Use overlay pattern to prevent main content reflow when expanding the sidebar.
- Keep interactive elements reachable: primary actions should remain in the content area.
- Use badges for secondary emphasis; avoid overuse to reduce noise.
- Ensure sufficient contrast and spacing using DLS tokens.

---

## Behavior Notes

- Items can be headings or nav items with `subpages`; more than 5 subpages may switch to a panel overflow behavior.
- `onNavClick` is the canonical event for navigation; read `route` and navigate with Angular Router.
- Footer items are optional and typically hold settings/help.

---

**Component File:** `nav-side-primary.md`
**Last Updated:** 2025-10-27

