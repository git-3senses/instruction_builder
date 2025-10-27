# Search Component

> Search input with built-in filtering capability and clear button

## Import

```typescript
import { DbsSearchComponent } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsSearchComponent],
})
```

## Basic Usage

```html
<!-- Basic Search -->
<dbs-search
  [value]="searchQuery"
  [placeholder]="'Search...'"
  (filterDataChange)="onFilter($event)">
</dbs-search>

<!-- With Data Filtering -->
<dbs-search
  [value]="searchQuery"
  [origData]="items"
  [searchkeyWords]="['name', 'email']"
  (filterDataChange)="filteredItems = $event">
</dbs-search>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **value** | `string` | `""` | Search input value |
| **placeholder** | `string` | `""` | Placeholder text |
| **size** | `'sm'\|'md'` | `'md'` | Search bar size |
| **disabled** | `boolean` | `false` | Disabled state |
| **showClear** | `boolean` | `true` | Show clear button |
| **origData** | `any[]` | `[]` | Data array to filter |
| **searchkeyWords** | `string[]` | `[]` | Fields to search in |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **filterDataChange** | `EventEmitter<any[]>` | Emits filtered data |
| **clear** | `EventEmitter` | Emits when cleared |

---

## CSS & Styling

### Design Tokens

```css
--color-border                    /* Input border */
--color-background-level-0        /* Input background */
--color-text-primary              /* Input text */
--spacing-sm                      /* 8px */
--spacing-md                      /* 16px */
```

### Component Styling

```css
.search-container {
  width: 100%;
  max-width: 400px;
}

dbs-search {
  width: 100%;
}

dbs-search[size="sm"] {
  font-size: 14px;
}
```

---

## Complete Example

### TypeScript

```typescript
import { Component } from '@angular/core';
import { DbsSearchComponent, DbsTableComponent } from '@dbs-angular/core';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [DbsSearchComponent, DbsTableComponent],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchValue = '';
  filteredData: any[] = [];

  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Manager' }
  ];

  columns = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'role', header: 'Role' }
  ];

  constructor() {
    this.filteredData = this.users;
  }

  onFilterChange(filtered: any[]) {
    this.filteredData = filtered;
  }
}
```

### HTML

```html
<div class="search-demo">
  <h2>User Search</h2>

  <div class="search-section">
    <dbs-search
      [value]="searchValue"
      [origData]="users"
      [searchkeyWords]="['name', 'email', 'role']"
      [placeholder]="'Search users...'"
      [size]="'md'"
      (filterDataChange)="onFilterChange($event)">
    </dbs-search>

    <div class="results-count">
      Found {{filteredData.length}} of {{users.length}} users
    </div>
  </div>

  <dbs-table
    [data]="filteredData"
    [columns]="columns"
    style="width: 100%;">
  </dbs-table>
</div>
```

### CSS

```css
.search-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px;
}

.search-demo h2 {
  margin: 0 0 24px 0;
  font-size: 24px;
  font-weight: 600;
}

.search-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.results-count {
  font-size: 14px;
  color: var(--color-text-secondary);
}

dbs-search {
  width: 100%;
  max-width: 400px;
}

@media (max-width: 768px) {
  .search-demo {
    padding: 24px 16px;
  }

  dbs-search {
    max-width: 100%;
  }
}
```

---

## Styling Best Practices

```css
/* Standard width */
dbs-search {
  width: 100%;
  max-width: 400px;
}

/* Full width */
dbs-search {
  width: 100%;
}

/* Small size */
dbs-search[size="sm"] {
  max-width: 300px;
}
```

---

**Component File:** `search.md`
**Last Updated:** 2025-10-27
