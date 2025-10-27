# Pagination Component

> Paged navigation with simple and full modes, i18n, custom slots, and loading states

---

## Import

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsPaginationComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, DbsPaginationComponent, DbsButtonComponent],
})
export class PaginationHost {}
```

---

## Basic Usage

```html
<dbs-pagination
  [itemsCount]="itemsCount"
  [rowsPerPage]="rowsPerPage"
  [(currentPage)]="currentPage">
</dbs-pagination>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| itemsCount | number | 0 | Total number of items. |
| rowsPerPage | number | 10 | Items per page. |
| currentPage | number (two-way) | 1 | Current page index (1-based). |
| inputPageOption | boolean | true | When false, renders simple previous/next buttons only. |
| showCounterText | boolean | true | Shows the item counter text (e.g., 1–10 of 237). |
| showRowNumberDropdown | boolean | true | Shows rows-per-page selector. |
| firstLastOption | boolean | true | Shows first/last page controls. |
| loading | boolean | false | Displays loading state; can be customized via `loadingSlot`. |
| translate | Record<string,string> | - | i18n labels for UI text. |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| currentPageChange | number | Emits when page changes. |
| goToPage | number | Emits when user requests a page directly. |
| indexChange | `{ startIndex: number; endIndex: number }` | Emits the current item index range for the page. |
| rowsPerPageChange | number | Emits when rows-per-page changes. |

### Slots

- loadingSlot — custom loader UI while `loading` is true
- itemCounterSlot — custom item counter text
- itemCounterDropdownSlot — custom rows-per-page dropdown area
- buttonContainerSlot — custom area for pagination buttons (full mode)
- customButtonsSlot — custom area for buttons in simple mode

---

## Complete Example

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsPaginationComponent, DbsButtonComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-pagination-demo',
  standalone: true,
  imports: [CommonModule, DbsPaginationComponent, DbsButtonComponent],
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.css']
})
export class PaginationDemoComponent {
  // State
  itemsCount = signal(237);
  rowsPerPage = signal(10);
  currentPage = signal(1);
  loading = signal(false);

  // Feature toggles
  inputPageOption = signal(true);
  showCounterText = signal(true);
  showRowNumberDropdown = signal(true);
  firstLastOption = signal(true);

  // i18n labels (shape depends on app usage)
  translate = signal<Record<string, string>>({
    of: 'of',
    items: 'items',
    page: 'Page',
    rowsPerPage: 'Rows per page',
  });

  // Derived
  indexRange = signal({ startIndex: 0, endIndex: 10 });

  // Handlers
  onIndexChange(range: { startIndex: number; endIndex: number }) {
    this.indexRange.set(range);
  }

  onCurrentPageChange(page: number) {
    this.currentPage.set(page);
  }

  toggleLoading() {
    this.loading.set(!this.loading());
  }
}
```

```html
<!-- pagination-demo.component.html -->
<section class="page">
  <div class="controls">
    <dbs-button (click)="toggleLoading()">Loading: {{ loading() }}</dbs-button>
  </div>

  <!-- Full mode -->
  <dbs-pagination
    [itemsCount]="itemsCount()"
    [rowsPerPage]="rowsPerPage()"
    [showCounterText]="showCounterText()"
    [showRowNumberDropdown]="showRowNumberDropdown()"
    [firstLastOption]="firstLastOption()"
    [loading]="loading()"
    [translate]="translate()"
    (indexChange)="onIndexChange($event)"
    (currentPageChange)="onCurrentPageChange($event)">

    <div loadingSlot class="loader">
      <!-- Custom loader content -->
      <span class="dot"></span>
      <span>Loading...</span>
    </div>

    <div itemCounterSlot>
      {{ indexRange.startIndex + 1 }}–{{ indexRange.endIndex }} {{ translate().of }} {{ itemsCount() }} {{ translate().items }}
    </div>

    <div itemCounterDropdownSlot>
      <!-- Optional custom rows-per-page selector container -->
    </div>

    <div buttonContainerSlot>
      <!-- Optional custom button container for full mode -->
    </div>
  </dbs-pagination>

  <!-- Simple mode (previous/next only) -->
  <dbs-pagination
    [itemsCount]="itemsCount()"
    [rowsPerPage]="rowsPerPage()"
    [inputPageOption]="false"
    [loading]="loading()"
    [(currentPage)]="currentPage">
    <div customButtonsSlot class="simple-actions">
      <dbs-button size="sm">Custom Left</dbs-button>
      <dbs-button size="sm" variant="primary">Custom Right</dbs-button>
    </div>
  </dbs-pagination>
</section>
```

```css
/* pagination-demo.component.css */
.page {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.controls {
  display: flex;
  gap: 8px;
}

.loader {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text);
}

.loader .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text);
}

.simple-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

---

## Styling Best Practices

- Prefer full mode when users need to jump between pages and adjust page size; use simple mode to minimize UI for basic previous/next.
- Keep container widths responsive; use `max-width` and center alignment for tables or list pages.
- Use design tokens for spacing, borders, and colors; avoid hard-coded values except in examples.
- Provide `loadingSlot` for better perceived performance and consistent skeletons.

---

## Behavior Notes

- `indexChange` provides the current item range for display and analytics.
- When `inputPageOption` is false, only previous/next (and `customButtonsSlot` if provided) are rendered.
- `rowsPerPageChange` should reset `currentPage` if the current page exceeds the new last page.
- i18n `translate` keys vary by app; inject consistent labels for accessibility and localization.

---

**Component File:** `pagination.md`
**Last Updated:** 2025-10-27

