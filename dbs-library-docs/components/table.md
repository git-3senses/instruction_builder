# Table Component

> Advanced data table built on TanStack Table with sorting, filtering, pagination, and custom styling

**Built on:** [TanStack Table](https://tanstack.com/table) - Headless table logic allows full customization while maintaining DBS visual styles.

---

## Import

```typescript
import { DbsTableComponent, ColumnDef, ColumnMeta } from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsTableComponent],
})
```

---

## Basic Usage

```typescript
// Define data type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
};

// Component
export class TableComponent {
  data: Person[] = [
    { firstName: 'John', lastName: 'Doe', age: 24, visits: 100, status: 'Active' },
    { firstName: 'Jane', lastName: 'Smith', age: 40, visits: 40, status: 'Inactive' }
  ];

  columns: ColumnDef<Person>[] = [
    { accessorKey: 'firstName', header: 'First Name' },
    { accessorKey: 'lastName', header: 'Last Name' },
    { accessorKey: 'age', header: 'Age' },
    { accessorKey: 'visits', header: 'Visits' },
    { accessorKey: 'status', header: 'Status' }
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns"></dbs-table>
```

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **data** | `T[]` | `[]` | Table data array |
| **columns** | `ColumnDef<T>[]` | `[]` | Column definitions |
| **size** | `'regular'\|'small'\|'mini'` | `'regular'` | Table size |
| **rowStyle** | `'plain'\|'zebra'` | `'plain'` | Row styling |
| **title** | `string` | `""` | Table title |
| **sortingState** | `SortingState` | `[]` | Sorting state (two-way) |
| **columnFiltersState** | `ColumnFiltersState` | `[]` | Filter state (two-way) |
| **globalFilter** | `string` | `""` | Global search value |
| **paginationState** | `PaginationState` | - | Pagination state |

---

## Size Variants

Tables come in 3 sizes with different padding and font sizes.

```typescript
export class SizesComponent {
  data: Person[] = [...];
  columns: ColumnDef<Person>[] = [...];
}
```

```html
<!-- Regular (default) -->
<dbs-table
  [data]="data"
  [columns]="columns"
  size="regular"
  title="Regular size">
</dbs-table>

<!-- Small -->
<dbs-table
  [data]="data"
  [columns]="columns"
  size="small"
  title="Small size">
</dbs-table>

<!-- Mini -->
<dbs-table
  [data]="data"
  [columns]="columns"
  size="mini"
  title="Mini size">
</dbs-table>
```

### CSS - Spacing Between Tables

```css
/* Component CSS */
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 24px spacing between tables */
}
```

---

## Row Styling

### Plain vs Zebra Striping

```html
<!-- Plain rows (default) -->
<dbs-table
  [data]="data"
  [columns]="columns"
  rowStyle="plain">
</dbs-table>

<!-- Zebra striping (alternating row colors) -->
<dbs-table
  [data]="data"
  [columns]="columns"
  rowStyle="zebra">
</dbs-table>
```

### CSS - Table Container Layout

```css
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* Space between multiple tables */
}
```

---

## Colored & Disabled Rows

Individual rows can be colored or disabled using column `meta` properties.

```typescript
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
};

export class ColoredRowsComponent {
  data: Person[] = [
    { firstName: 'John', lastName: 'Doe', age: 24, visits: 50, status: 'Single' },
    { firstName: 'Jane', lastName: 'Smith', age: 40, visits: 10, status: 'Married' },
    { firstName: 'Bob', lastName: 'Wilson', age: 45, visits: 200, status: 'Complicated' }
  ];

  // Shared row metadata
  rowMeta: ColumnMeta<Person, unknown> = {
    columnSizing: 'fixed',
    // Background color function - returns design token
    backgroundColor: (cell: Cell<Person, unknown>) => {
      if (cell?.row.original.status === 'Single') {
        return '--color-background-success-subtle'; // Green background
      }
      return null; // Default background
    },
    // Disabled state function
    disabled: (cell: Cell<Person, unknown>) => {
      return cell?.row.original.status === 'Complicated'; // Disable "Complicated" rows
    }
  };

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      header: 'First Name',
      size: 150,
      meta: {
        ...this.rowMeta,
        pinPosition: 'left' // Pin column to left
      }
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
      size: 150,
      meta: {
        ...this.rowMeta,
        pinPosition: 'left'
      }
    },
    {
      accessorKey: 'age',
      header: 'Age',
      size: 150,
      meta: { ...this.rowMeta }
    },
    {
      accessorKey: 'visits',
      header: 'Visits',
      size: 150,
      meta: { ...this.rowMeta }
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 150,
      meta: { ...this.rowMeta }
    }
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns" style="width: 100%"></dbs-table>
```

**Result:**
- Rows with status='Single' → Green background
- Rows with status='Complicated' → Disabled (grayed out, not clickable)

---

## Cell Alignment

Horizontal and vertical alignment controlled via `meta` properties.

```typescript
export class AlignmentComponent {
  data: Person[] = [...];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      header: 'Left Aligned (default)',
      meta: {
        align: 'left' // Horizontal alignment
      }
    },
    {
      accessorKey: 'age',
      header: 'Right Aligned',
      meta: {
        align: 'right' // Right-align numbers
      }
    },
    {
      accessorKey: 'status',
      header: 'Center Aligned',
      meta: {
        align: 'center',
        verticalAlign: 'middle' // Vertical alignment (top/middle/bottom)
      }
    }
  ];
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [ngStyle]="{ width: '100%', 'max-width': '500px' }">
</dbs-table>
```

**Note:** Cells are typically top-aligned vertically.

---

## Sorting

Sorting is **enabled by default**. Disable per-column or configure options.

```typescript
export class SortingComponent {
  data: Person[] = [...];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      header: 'First Name'
      // Sorting enabled by default
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
      sortDescFirst: true // Sort descending first when clicked
    },
    {
      accessorKey: 'age',
      header: 'Age',
      enableSorting: false // Disable sorting for this column
    },
    {
      accessorKey: 'visits',
      header: 'Visits'
      // Default sorting
    },
    {
      accessorKey: 'position',
      header: 'Position',
      invertSorting: true // Invert sort direction
    }
  ];

  // Two-way bound sorting state
  sortingState = signal<SortingState>([
    {
      id: 'lastName', // Column ID
      desc: false      // Ascending
    }
  ]);
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(sortingState)]="sortingState">
</dbs-table>

<!-- Display current sort state -->
<pre>sortingState: {{ sortingState() | json }}</pre>
```

**SortingState Type:**
```typescript
type SortingState = {
  id: string;    // Column accessorKey
  desc: boolean; // true = descending, false = ascending
}[];
```

---

## Column Filtering

Enable filtering per-column with `filterVariant` in `meta`.

### Filter Variants

- **text** - Text input search
- **select** - Single-select dropdown
- **multiSelect** - Multi-select dropdown
- **date** - Date picker
- **dateRange** - Date range picker

```typescript
export class FilteringComponent {
  data: Person[] = [...];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      header: 'First Name',
      meta: {
        filterVariant: 'text' // Text search filter
      }
    },
    {
      accessorKey: 'status',
      header: 'Status',
      meta: {
        filterVariant: 'select', // Dropdown filter
        filterSelectOptions: ['Single', 'Married', 'Complicated']
      }
    },
    {
      accessorKey: 'age',
      header: 'Age',
      meta: {
        filterVariant: 'text' // Number search
      }
    }
  ];

  // Two-way bound filter state
  columnFiltersState = signal<ColumnFiltersState>([]);
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(columnFiltersState)]="columnFiltersState">
</dbs-table>

<pre>Filters: {{ columnFiltersState() | json }}</pre>
```

---

## Global Search

Search across all columns.

```typescript
export class GlobalSearchComponent {
  data: Person[] = [...];
  columns: ColumnDef<Person>[] = [...];

  globalFilter = signal(''); // Two-way bound search value
}
```

```html
<dbs-input
  placeholder="Search all columns..."
  [(ngModel)]="globalFilter">
</dbs-input>

<dbs-table
  [data]="data"
  [columns]="columns"
  [(globalFilter)]="globalFilter">
</dbs-table>
```

---

## Pagination

Enable pagination with page size and controls.

```typescript
export class PaginationComponent {
  data: Person[] = [...]; // Large dataset

  columns: ColumnDef<Person>[] = [...];

  // Pagination state
  paginationState = signal<PaginationState>({
    pageIndex: 0,    // Current page (0-indexed)
    pageSize: 10     // Rows per page
  });
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(paginationState)]="paginationState">
</dbs-table>
```

---

## Column Pinning

Pin columns to left or right (sticky).

```typescript
columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    meta: {
      pinPosition: 'left' // Pin to left side
    }
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    meta: {
      pinPosition: 'right' // Pin to right side
    }
  }
];
```

---

## Custom Cell Rendering

Render custom content in cells using Angular templates.

```typescript
export class CustomCellsComponent {
  data: Person[] = [...];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'status',
      header: 'Status',
      cell: (info) => {
        const status = info.getValue();
        return `<dbs-badge priority="${status === 'Active' ? 'high' : 'low'}">${status}</dbs-badge>`;
      }
    }
  ];
}
```

---

## Complete Example with Styling

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DbsTableComponent,
  ColumnDef,
  SortingState,
  ColumnFiltersState
} from '@dbs-angular/core';

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
};

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent {
  data: Transaction[] = [
    { id: '001', date: '2025-10-27', description: 'Payment', amount: 1500, status: 'Completed' },
    { id: '002', date: '2025-10-26', description: 'Transfer', amount: 500, status: 'Pending' },
    { id: '003', date: '2025-10-25', description: 'Withdrawal', amount: 200, status: 'Failed' }
  ];

  columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 100,
      meta: {
        pinPosition: 'left'
      }
    },
    {
      accessorKey: 'date',
      header: 'Date',
      size: 150,
      meta: {
        filterVariant: 'date'
      }
    },
    {
      accessorKey: 'description',
      header: 'Description',
      size: 250,
      meta: {
        filterVariant: 'text'
      }
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      size: 150,
      meta: {
        align: 'right'
      }
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 150,
      meta: {
        filterVariant: 'select',
        filterSelectOptions: ['Completed', 'Pending', 'Failed'],
        backgroundColor: (cell) => {
          const status = cell?.row.original.status;
          if (status === 'Completed') return '--color-background-success-subtle';
          if (status === 'Failed') return '--color-background-error-subtle';
          return null;
        }
      }
    }
  ];

  sortingState = signal<SortingState>([{ id: 'date', desc: true }]);
  columnFiltersState = signal<ColumnFiltersState>([]);
  paginationState = signal({ pageIndex: 0, pageSize: 10 });
}
```

```html
<!-- transactions-table.component.html -->
<div class="table-container">
  <dbs-table
    [data]="data"
    [columns]="columns"
    [size]="'regular'"
    [rowStyle]="'zebra'"
    [title]="'Recent Transactions'"
    [(sortingState)]="sortingState"
    [(columnFiltersState)]="columnFiltersState"
    [(paginationState)]="paginationState">
  </dbs-table>
</div>
```

```css
/* transactions-table.component.css */
.table-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

/* Add spacing between multiple tables */
:host {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

---

## Design Tokens Used

Tables use these design tokens for styling:

- `--color-background-level-0` - Default background
- `--color-background-level-1` - Zebra stripes
- `--color-background-success-subtle` - Success row background
- `--color-background-error-subtle` - Error row background
- `--color-text` - Default text
- `--color-text-subtle` - Disabled text
- `--color-border` - Cell borders

---

## Styling Best Practices

### Container Width

```html
<!-- Full width -->
<dbs-table [data]="data" [columns]="columns" style="width: 100%"></dbs-table>

<!-- Max width with centering -->
<dbs-table
  [data]="data"
  [columns]="columns"
  [ngStyle]="{ width: '100%', 'max-width': '1200px', margin: '0 auto' }">
</dbs-table>
```

### Multiple Tables Spacing

```css
:host {
  display: flex;
  flex-direction: column;
  gap: 24px; /* DLS spacing token */
}
```

### Column Widths

```typescript
// Fixed width columns
columns: ColumnDef<T>[] = [
  { accessorKey: 'id', header: 'ID', size: 80 },
  { accessorKey: 'name', header: 'Name', size: 200 },
  { accessorKey: 'description', header: 'Description' } // Auto-width
];
```

---

## Behavior Notes

- **Sorting:** Click column header to sort, click again to reverse, click third time to clear
- **Filtering:** Filter controls appear in column headers when `filterVariant` is set
- **Pagination:** Shows controls at bottom when enabled
- **Row colors:** Apply to entire row by setting `backgroundColor` on ALL column metas
- **Disabled rows:** Set `disabled` on ALL column metas for entire row
- **Pinned columns:** Remain fixed during horizontal scroll

---

**Component File:** `table.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27

