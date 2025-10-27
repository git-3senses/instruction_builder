# DBS Angular Part 5

## Table

The table component uses the headless logic, state, and processing of [TanStack Table](https://tanstack.com/table/latest/docs/introduction) under the hood. This allows us to simplify usage of the component and provide some out-of-the-box features such as sorting, filtering, and global search. The headless nature of the component also means that if additional features need to be implemented, the core table instance can be extended upon or re-created, all while maintaining the visual styles of the component.

### Usage

Import `DbsTableComponent` into your component or module.

```html
import { DbsTableComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsTableComponent],
})
```

### STORIES

Basic

A basic table requires row data as `data`, and column definitions as `columns`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "basic-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `basic.component.html`,
})
export class BasicStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns"></dbs-table>
```

Sizes

There are 3 sizes: `regular`, `small`, and `mini`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "sizes-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `sizes.component.html`,
  styleUrl: `sizes.component.css`,
})
export class SizesStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```tsx
<dbs-table
  [data]="data"
  [columns]="columns"
  size="regular"
  title="Regular size"
></dbs-table>
<dbs-table
  [data]="data"
  [columns]="columns"
  size="small"
  title="Small size"
></dbs-table>
<dbs-table
  [data]="data"
  [columns]="columns"
  size="mini"
  title="Mini size"
></dbs-table>
```

```tsx
:host {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

Row Styles

There are 3 row styles: `default`, `minimal`, and `zebra`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "row-styles-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `row-styles.component.html`,
  styleUrl: `row-styles.component.css`,
})
export class RowStylesStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  rowStyle="default"
  title="Default row style"
></dbs-table>
<dbs-table
  [data]="data"
  [columns]="columns"
  rowStyle="minimal"
  title="Minimal row style"
></dbs-table>
<dbs-table
  [data]="data"
  [columns]="columns"
  rowStyle="zebra"
  title="Zebra row style"
></dbs-table>
```

```css
:host {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

**Coloured And Disabled Rows**

Individual rows can be coloured differently by setting the `backgroundColor` meta, or set to disabled with the `disabled` meta in the column definition. These settings must be applied on all of the columns in the row to achieve the desired effect.

The `backgroundColor` meta property takes in a function that returns any of the colour tokens from design tokens as a string. Return `null` to use the default colour.

The `disabled` meta property takes in a function that returns the disabled state as a boolean.

```tsx
import { Component } from "@angular/core";
import {
  DbsTableComponent,
  ColumnDef,
  ColumnMeta,
  Cell,
} from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "colored-disabled-rows-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `colored-disabled-rows.component.html`,
})
export class ColoredDisabledRowsStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      status: "Complicated",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      status: "In Relationship",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      status: "In Relationship",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      status: "In Relationship",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      status: "In Relationship",
    },
  ];

  rowMeta: ColumnMeta<Person, unknown> = {
    columnSizing: "fixed",
    backgroundColor: (cell: Cell<Person, unknown>) => {
      if (cell?.row.original.status === "Single") {
        return "--color-background-success-subtle";
      }
      return null;
    },
    disabled: (cell: Cell<Person, unknown>) => {
      return cell?.row.original.status === "Complicated";
    },
  };

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 150,
      meta: {
        ...this.rowMeta,
        pinPosition: "left",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 150,
      meta: {
        ...this.rowMeta,
        pinPosition: "left",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      size: 150,
      meta: { ...this.rowMeta },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      size: 150,
      meta: { ...this.rowMeta },
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 150,
      meta: { ...this.rowMeta },
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns" style="width: 100%"></dbs-table>
```

**Cell Alignment**

Content in each column can be horizontally aligned left/right by setting the `align` meta in the column definition. Vertical alignment can also be adjusted to top/middle/bottom by setting the `verticalAlign` meta if needed. However typically, cells should be top-aligned.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "cell-alignment-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `cell-alignment.component.html`,
})
export class CellAlignmentStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "Left Aligned (default)",
      meta: {
        align: "left",
      },
    },
    {
      accessorKey: "age",
      header: "Right Aligned",
      meta: {
        align: "right",
      },
    },
  ];
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [ngStyle]="{ width: '100%', 'max-width': '500px' }"
></dbs-table>
```

### **Sorting**

Column sorting is enabled by default, but it can be disabled with `enableSorting: false` on the column you wish to prevent sorting. Other options such as `sortDescFirst` and `invertSorting` are also available. Refer to the [TanStack Table documentation](https://tanstack.com/table/v8/docs/guide/sorting) for more info.

`sortingState` can then be used to set and read the current sorting applied. This is a model that allows for two-way binding, and is accompanied by the `sortingStateChange` Output.

`sortingState` is an array of type `{ desc: boolean; id: string; }[]`, where:

- `desc`: Whether the column is sorted in descending direction
- `id`: The ID of the column

```tsx
import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsTableComponent,
  ColumnDef,
  SortingState,
} from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
  position?: string;
};

@Component({
  selector: "sorting-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `sorting.component.html`,
})
export class SortingStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      position: "2",
    },
    {
      firstName: "tanner",
      lastName: "miller",
      age: "40",
      visits: "40",
      position: "4",
    },
    {
      firstName: "tanner",
      lastName: "dirte",
      age: "45",
      visits: "20",
      position: "1",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      position: "3",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      sortDescFirst: true,
    },
    {
      accessorKey: "age",
      header: "Age",
      enableSorting: false,
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "position",
      header: "Position",
      invertSorting: true,
    },
  ];

  sortingState = signal<SortingState>([
    {
      desc: false,
      id: "lastName",
    },
  ]);
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(sortingState)]="sortingState"
></dbs-table>

<pre>
sortingState:
{{ sortingState() | json }}
</pre>
```

### **Column Filtering**

For each column that you would like to enable filtering, a `filterVariant` must be defined in the meta. There are currently 5 options for `filterVariant`: `text`, `select`, `multiSelect`, `date`, and `dateRange`.

`columnFiltersState` can then be used to set and read the current filters applied. This is a model that allows for two-way binding, and is accompanied by the `columnFiltersStateChange` Output.

`columnFiltersState` is an array of type `{ id: string; value: unknown; }[]`, where:

- `id`: The ID of the column
- `value`: The column's filter value

For the `select` and `multiSelect` filter variants, the list of options are automatically derived from the values in the column. However, a `filterOptions` array may also be passed in to override the list. A search input for the filter options can be enabled with `showFilterSearch: true`, and then a `onFilterSearch` function can be passed to perform actions using the search value (e.g. calling an API to update the filter options).

For the `date` and `dateRange` filter variants, the format of the date can be customised by passing a string into `dateFormat` (e.g. `"DD/MM/YY"`).

```tsx
import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsTableComponent,
  ColumnDef,
  ColumnFiltersState,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  birthDate?: Date | null;
  createdAt?: Date | null;
  status?: string;
};

@Component({
  selector: "column-filtering-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `column-filtering.component.html`,
})
export class ColumnFilteringStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      birthDate: null,
      createdAt: new Date(),
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      birthDate: new Date("25 August 2000"),
      createdAt: null,
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      birthDate: new Date("17 July 1995"),
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 150,
      meta: {
        columnSizing: "fixed",
        filterVariant: "text",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 150,
      meta: {
        columnSizing: "fixed",
        filterVariant: "text",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      size: 100,
      meta: {
        columnSizing: "fixed",
        filterVariant: "text",
      },
    },
    {
      accessorKey: "birthDate",
      header: "Birth Date",
      cell: (props) =>
        (props.cell.getValue() as Date | null)?.toLocaleDateString(),
      filterFn: "date",
      size: 180,
      meta: {
        columnSizing: "fixed",
        filterVariant: "date",
        dateFormat: "DD MMM",
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) =>
        (props.cell.getValue() as Date | null)?.toLocaleDateString(),
      filterFn: "dateRange",
      size: 280,
      meta: {
        columnSizing: "fixed",
        filterVariant: "dateRange",
        dateFormat: "DD/MM/YY",
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      filterFn: "multiSelect",
      size: 200,
      meta: {
        columnSizing: "fixed",
        filterVariant: "multiSelect",
        showFilterSearch: true,
        onFilterSearch: (filterValue, column) => {
          console.log({ filterValue, column });
        },
      },
    },
    {
      accessorFn: (row) => {
        if (row.age && parseInt(row.age) >= 40) {
          return "Yes";
        }
        return "No";
      },
      header: "Is old?",
      size: 150,
      meta: {
        columnSizing: "fixed",
        filterVariant: "select",
        filterOptions: [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
        ],
      },
    },
  ];

  columnFiltersState = signal<ColumnFiltersState>([
    {
      id: "firstName",
      value: "tan",
    },
  ]);
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(columnFiltersState)]="columnFiltersState"
  style="width: 100%"
></dbs-table>

<pre>
columnFiltersState:
{{ columnFiltersState() | json }}
</pre>
```

### **Custom Filtering Logic**

In some cases, you may require a different logic for filtering rows than the default one.

To achieve that, an object containing a record of custom filter functions must be passed into the `filterFns` Input. Then, in the column definition's `filterFn` property, reference the respective function's object key (e.g. "age" in the example below) as defined in the `filterFns` Input.

The filter function should return a boolean determining whether the row should be rendered or not.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsTableComponent,
  ColumnDef,
  Row,
  TData,
  FilterMeta,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
};

@Component({
  selector: "custom-filtering-logic-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `custom-filtering-logic.component.html`,
})
export class CustomFilteringLogicStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "age",
      header: 'Age (try typing in "old" or "young")',
      filterFn: "age",
      meta: {
        filterVariant: "text",
      },
    },
  ];

  ageFilter(
    row: Row<TData<Person>>,
    columnId: string,
    filterValue: string,
    addMeta: (meta: FilterMeta) => void,
  ): boolean {
    if (filterValue && filterValue.length > 0) {
      const value = row.getValue(columnId) as string;
      switch (filterValue) {
        case "old":
          return parseInt(value) >= 40;
        case "young":
          return parseInt(value) < 40;
        default:
          return value === filterValue;
      }
    }
    return true;
  }

  filterFns = {
    age: this.ageFilter,
  };
}
```

```tsx
<dbs-table
  [data]="data"
  [columns]="columns"
  [filterFns]="filterFns"
></dbs-table>
```

### **Column Grouping**

Columns can be grouped by nesting them within other columns via the `columns` array in the column definition.

If additional borders are required in the data cells, the `borders` meta property can be set with a function that returns an object of type `{ left?: boolean; right?: boolean; }`.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsTableComponent, ColumnDef } from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  birthDate?: Date;
  createdAt?: Date;
  status?: string;
};

@Component({
  selector: "column-grouping-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `column-grouping.component.html`,
})
export class ColumnGroupingStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      birthDate: new Date(),
      createdAt: new Date(),
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      birthDate: new Date("25 August 2000"),
      createdAt: new Date("4 September 2024"),
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      birthDate: new Date("17 July 1995"),
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorFn: () => null,
      id: "spacer_1",
      header: "",
      enableSorting: false,
      columns: [
        {
          accessorKey: "status",
          header: "Status",
          meta: {
            filterVariant: "text",
          },
        },
        {
          accessorKey: "age",
          header: "Age",
          meta: {
            filterVariant: "text",
            borders: (cell) => ({ right: true }),
          },
        },
      ],
    },
    {
      accessorFn: () => null,
      id: "names",
      header: "Names",
      enableSorting: false,
      columns: [
        {
          accessorKey: "firstName",
          header: "First Name",
          meta: {
            filterVariant: "text",
          },
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
          meta: {
            filterVariant: "text",
            borders: (cell) => ({ right: true }),
          },
        },
      ],
    },
    {
      accessorFn: () => null,
      id: "dates",
      header: "Dates",
      enableSorting: false,
      columns: [
        {
          accessorKey: "birthDate",
          header: "Birth Date",
          cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
          meta: {
            filterVariant: "text",
          },
        },
        {
          accessorKey: "createdAt",
          header: "Created At",
          cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
          meta: {
            filterVariant: "text",
          },
        },
      ],
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns"></dbs-table>
```

Sticky Header

The table header can be made sticky with `[stickyHeader]="true"`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  createdAt?: Date;
  status?: string;
  title?: string;
};

@Component({
  selector: "sticky-header-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `sticky-header.component.html`,
})
export class StickyHeaderStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      createdAt: new Date(),
      status: "In Relationship",
      title: "fugit voluptas sed molestias voluptatem provident",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      createdAt: new Date("4 September 2024"),
      status: "Single",
      title: "voluptate et itaque vero tempora molestiae",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      createdAt: new Date(),
      status: "In Relationship",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      createdAt: new Date(),
      status: "In Relationship",
      title: "doloribus ad provident suscipit at",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      createdAt: new Date(),
      status: "In Relationship",
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      createdAt: new Date(),
      status: "In Relationship",
      title: "dolor sint quo a velit explicabo quia nam",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```tsx
<dbs-table
  [data]="data"
  [columns]="columns"
  [stickyHeader]="true"
  style="height: 300px"
></dbs-table>
```

Sticky Row Footer

A `<tfoot>` row can be added by setting the `footer` property in the column meta. The row can be made sticky with `[stickyFooter]="true"`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  createdAt?: Date;
  status?: string;
  title?: string;
};

@Component({
  selector: "sticky-row-footer-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `sticky-row-footer.component.html`,
})
export class StickyRowFooterStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      createdAt: new Date(),
      status: "In Relationship",
      title: "fugit voluptas sed molestias voluptatem provident",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      createdAt: new Date("4 September 2024"),
      status: "Single",
      title: "voluptate et itaque vero tempora molestiae",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      createdAt: new Date(),
      status: "In Relationship",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      createdAt: new Date(),
      status: "In Relationship",
      title: "doloribus ad provident suscipit at",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      createdAt: new Date(),
      status: "In Relationship",
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      createdAt: new Date(),
      status: "In Relationship",
      title: "dolor sint quo a velit explicabo quia nam",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
      footer: (context) => {
        const rows = context.table.getFilteredRowModel().rows;
        let total = 0;
        rows.forEach((row) => {
          total = total + parseInt(row.getValue("age"));
        });
        return `Avg: ${(total / rows.length).toFixed(3)}`;
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      footer: (context) => {
        const rows = context.table.getFilteredRowModel().rows;
        let total = 0;
        rows.forEach((row) => {
          total = total + parseInt(row.getValue("visits"));
        });
        return `Total: ${total}`;
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [stickyFooter]="true"
  style="height: 300px"
></dbs-table>
```

### **Column Sizing and Re-sizing**

The size of individual columns can be controlled by setting `columnSizing: 'fixed'` in the column meta (defaults to `'auto'`), and then setting the `size` property in the column definition.

Re-sizing of columns can be enabled with `enableColumnResizing` set to true. Only columns with `columnSizing: 'fixed'` can be resized.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  title?: string;
};

@Component({
  selector: "column-sizing-resizing-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `column-sizing-resizing.component.html`,
})
export class ColumnSizingResizingStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      title: "fugit voluptas sed molestias voluptatem provident",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      title: "voluptate et itaque vero tempora molestiae",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      title: "adipisci placeat illum aut reiciendis qui",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: (context) => `size: ${context.column.getSize()}`,
      size: 90,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "title",
      header: (context) => `size: ${context.column.getSize()}`,
      size: 400,
      meta: {
        columnSizing: "fixed",
      },
    },
  ];
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [enableColumnResizing]="true"
  title="Width constrained"
  style="width: 100%; margin-bottom: 24px"
></dbs-table>
<dbs-table
  [data]="data"
  [columns]="columns"
  [enableColumnResizing]="true"
  title="Width unconstrained"
></dbs-table>
```

### **Column Pinning**

You may pin a column to the left or right of a table by providing it with a `pinPosition` in the column meta. The allowed values for `pinPosition` are: `'left'`, `'right'`, and `false`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  createdAt?: Date;
  status?: string;
  title?: string;
};

@Component({
  selector: "column-pinning-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `column-pinning.component.html`,
})
export class ColumnPinningStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      createdAt: new Date(),
      status: "In Relationship",
      title: "fugit voluptas sed molestias voluptatem provident",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      createdAt: new Date("4 September 2024"),
      status: "Single",
      title: "voluptate et itaque vero tempora molestiae",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      createdAt: new Date(),
      status: "In Relationship",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      createdAt: new Date(),
      status: "In Relationship",
      title: "doloribus ad provident suscipit at",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      createdAt: new Date(),
      status: "In Relationship",
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      createdAt: new Date(),
      status: "In Relationship",
      title: "dolor sint quo a velit explicabo quia nam",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 150,
      meta: {
        pinPosition: "left",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 150,
      meta: {
        pinPosition: "right",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      size: 80,
      meta: {
        pinPosition: "left",
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "title",
      header: "Title",
      size: 500,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
      size: 150,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      size: 150,
      meta: {
        pinPosition: "right",
        columnSizing: "fixed",
      },
    },
  ];
}
```

### **Pagination**

Pagination must be enabled with the `pagination` Input.

`paginationState` can then be used to set the current page and number of rows per page. This is a model that allows for two-way binding, and is accompanied by the `paginationStateChange` Output.

`paginationState` is an object that accepts the following:

- `pageIndex`: Index of the page to be displayed (default: 0)
- `pageSize`: Number of items to show per page (default: 99999)

```tsx
import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { mockPostData } from "../../../../utils/mockData";
import {
  ColumnDef,
  DbsTableComponent,
  PaginationState,
} from "../../../../public-api";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

@Component({
  selector: "pagination-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `pagination.component.html`,
})
export class PaginationStoryComponent {
  /** Row data */
  data: Post[] = mockPostData;

  /** Column definitions */
  columns: ColumnDef<Post>[] = [
    {
      accessorKey: "id",
      header: "Post ID",
      enableSorting: false,
    },
    {
      accessorKey: "userId",
      header: "Author ID",
      enableSorting: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: true,
    },
  ];

  /** Pagination state to override defaults */
  paginationState = signal<PaginationState>({
    pageIndex: 2,
    pageSize: 8,
  });
}
```

### **Server-side Pagination**

If pagination is handled by the server, `manualPagination` must be set to `true`. This turns off automatic pagination. The total number of items must also be provided in `rowCount`.

Additionally, use `paginationState` to tell the component which page is currently being displayed and how many rows are being displayed in each page.

Listen to the `paginationStateChange` event to determine the next page to be fetched from the server, then use `loading` to control the loading state while data is being fetched.

```tsx
import { Component, inject, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MockHttpService } from "../../../../services/mock-http.service";
import {
  ColumnDef,
  DbsTableComponent,
  PaginationState,
} from "../../../../public-api";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

@Component({
  selector: "server-side-pagination-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `server-side-pagination.component.html`,
})
export class ServerSidePaginationStoryComponent implements OnInit {
  /** Row data */
  data = signal<Post[]>([]);

  /** Column definitions */
  columns: ColumnDef<Post>[] = [
    {
      accessorKey: "id",
      header: "Post ID",
      enableSorting: false,
    },
    {
      accessorKey: "userId",
      header: "Author ID",
      enableSorting: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: false,
    },
  ];

  /** Loading state */
  loading: boolean = false;

  /** Total number of data items */
  rowCount: number;

  /** Pagination state to override defaults */
  paginationState = signal<PaginationState>({
    pageIndex: 2,
    pageSize: 8,
  });

  /** Inject mock data */
  mockHttpService = inject(MockHttpService);

  /** Fetches post data */
  fetchData(pagination: PaginationState) {
    this.loading = true;

    this.mockHttpService.getPosts(pagination).subscribe((response) => {
      this.data.set(response.data);
      this.rowCount = response.total;
      this.loading = false;

      // Ensure local state is updated
      this.paginationState.set({
        pageIndex: response.pageIndex,
        pageSize: response.pageSize,
      });
    });
  }

  /** Fetch data for new page on page change */
  onPaginationStateChange({ pageIndex, pageSize }: PaginationState) {
    const { pageIndex: pageIndexState, pageSize: pageSizeState } =
      this.paginationState();
    if (pageIndex !== pageIndexState || pageSize !== pageSizeState) {
      this.fetchData({ pageIndex, pageSize });
    }
  }

  ngOnInit() {
    // Fetch initial data
    this.fetchData(this.paginationState());
  }
}
```

### **Row Selection**

Row selection can be added to the first column using the `DbsTableSelectionComponent` component.

`rowSelectionState` can then be used to set and read the index of the selected rows. This is a model that allows for two-way binding, and is accompanied by the `rowSelectionStateChange` Output.

`rowSelectionState` is an object of type `Record<string, boolean>`, where `boolean` is the selected state of the row.

To enable/disable selection for specific rows, a boolean or function can be passed into `enableRowSelection`, which should either return `true` to enable selection, or `false` to disable selection.

The "select all" behaviour can be set to only select all rows in the current page. This is done by passing in `selectAllPageRows: true` into the `DbsTableSelectionComponent` component.

```tsx
import { Component, effect, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  DbsButtonComponent,
  DbsSwitchComponent,
  DbsTableComponent,
  DbsTableSelectionComponent,
  ColumnDef,
  RowSelectionState,
  FlexRenderComponent,
  PaginationState,
  Row,
  TData,
} from "../../../../public-api";
import { mockPostData } from "../../../../utils/mockData";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

@Component({
  selector: "row-selection-story",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DbsTableComponent,
    DbsButtonComponent,
    DbsSwitchComponent,
  ],
  templateUrl: `row-selection.component.html`,
  styleUrl: `row-selection.component.css`,
})
export class RowSelectionStoryComponent {
  /** Row data */
  data: Post[] = mockPostData;

  /** Column definitions */
  columns: ColumnDef<Post>[] = [
    {
      accessorFn: () => null,
      id: "select",
      enableSorting: false,
      header: () => {
        return new FlexRenderComponent(DbsTableSelectionComponent, {
          context: "header",
          selectAllPageRows: this.selectAllPageRows.value || false,
        });
      },
      cell: () => {
        return new FlexRenderComponent(DbsTableSelectionComponent, {
          context: "row",
        });
      },
    },
    {
      accessorKey: "id",
      header: "Post ID",
      enableSorting: false,
    },
    {
      accessorKey: "userId",
      header: "Author ID",
      enableSorting: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: true,
    },
  ];

  /** Pagination state to override defaults */
  paginationState = signal<PaginationState>({
    pageIndex: 2,
    pageSize: 8,
  });

  /** Row selection state */
  rowSelectionState = signal<RowSelectionState>({ 19: true, 20: true });

  rowSelectionKeys: string[] = [];

  rowSelectionEffect = effect(() => {
    this.rowSelectionKeys = Object.keys(this.rowSelectionState());
  });

  /** Function to determine if row selection should be enabled on each row. */
  enableRowSelection = (row: Row<TData<Post>>) => {
    return !!((row.index + 1) % 7);
  };

  formBuilder = inject(FormBuilder);

  selectAllPageRows = this.formBuilder.control(false);
}
```

```html
<label class="select-all-page-rows-toggle">
  <dbs-switch [formControl]="selectAllPageRows"></dbs-switch>
  <div>
    <div class="body">Page-level "select all"</div>
    <div class="label label--sm">
      @if (selectAllPageRows.value) {
        "Select all" toggles all selectable rows in the current page only.
      } @else {
        "Select all" toggles all selectable rows in all pages of the table.
      }
    </div>
  </div>
</label>

<dbs-table
  [data]="data"
  [columns]="columns"
  [title]="'Row selection'"
  [stickyHeader]="true"
  [pagination]="true"
  [(paginationState)]="paginationState"
  [(rowSelectionState)]="rowSelectionState"
  [enableRowSelection]="enableRowSelection"
  style="height: 533px"
>
  @if (rowSelectionKeys.length > 0) {
    <div headerEndSlot class="actions">
      <span class="actions-text">{{
        rowSelectionKeys.length +
          ' row' +
          (rowSelectionKeys.length > 1 ? 's' : '') +
          ' selected'
      }}</span>
      <dbs-button>Delete</dbs-button>
      <dbs-button>Batch edit</dbs-button>
    </div>
  }
</dbs-table>

<pre>
rowSelectionState:
{{ rowSelectionState() | json }}
</pre>
```

### **Clickable Cells**

Individual cells can be made clickable by setting the `clickable` meta in the column definition.

The `clickable` meta property takes in a function that returns a boolean indicating whether it can be clickable or not.

A function can then be passed into the `onCellClick` meta property to perform actions when a cell is clicked.

```tsx
import { Component, signal } from "@angular/core";
import { DbsTableComponent, ColumnDef, ColumnMeta } from "@dbs-angular/core";
import { CommonModule } from "@angular/common";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "clickable-cells-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent],
  templateUrl: `clickable-cells.component.html`,
})
export class ClickableCellsStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  rowMeta: ColumnMeta<Person, unknown> = {
    disabled: (cell) => {
      if (cell?.row.original.status === "Single") {
        return true;
      }
      return false;
    },
    clickable: (cell) => {
      if (cell?.row.original.status === "Single") {
        return false;
      }
      return true;
    },
    onCellClick: (cell) => {
      if (cell.row.original.firstName && cell.row.original.lastName) {
        this.selectedRow.set(
          `${cell.row.original.firstName} ${cell.row.original.lastName}`,
        );
      }
    },
  };

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      meta: this.rowMeta,
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      meta: this.rowMeta,
    },
    {
      accessorKey: "age",
      header: "Age",
      meta: this.rowMeta,
    },
    {
      accessorKey: "visits",
      header: "Visits",
      meta: this.rowMeta,
    },
    {
      accessorKey: "status",
      header: "Status",
      meta: this.rowMeta,
    },
  ];

  selectedRow = signal<string>("");
}
```

```html
<dbs-table [data]="data" [columns]="columns"></dbs-table>

@if (selectedRow()) {
  <p>
    row clicked: <strong>{{ selectedRow() }}</strong>
  </p>
}
```

### **With Title**

A title in the header can be provided with `title`.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "with-title-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `with-title.component.html`,
})
export class WithTitleStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

### **Header**

The header can be customised by passing content into the slots `headerStartSlot`, `headerEndSlot`, and `headerBottomSlot`.

```tsx
import { Component, ViewChild } from "@angular/core";
import {
  DbsTableComponent,
  ColumnDef,
  DbsButtonComponent,
  DbsComboFormElementsComponent,
  DbsIconButtonComponent,
  DbsSvgIconComponent,
  DbsSearchComponent,
  DbsSelectComponent,
  TabComponent,
  TabsComponent,
  Table,
} from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "header-story",
  standalone: true,
  imports: [
    DbsTableComponent,
    DbsButtonComponent,
    DbsComboFormElementsComponent,
    DbsIconButtonComponent,
    DbsSvgIconComponent,
    DbsSearchComponent,
    DbsSelectComponent,
    TabComponent,
    TabsComponent,
  ],
  templateUrl: `header.component.html`,
  styleUrl: `header.component.css`,
})
export class HeaderStoryComponent {
  @ViewChild("table1Ref") table1Ref: DbsTableComponent<Person>;
  @ViewChild("table2Ref") table2Ref: DbsTableComponent<Person>;
  @ViewChild("table3Ref") table3Ref: DbsTableComponent<Person>;
  @ViewChild("table4Ref") table4Ref: DbsTableComponent<Person>;

  /** The core table instance generated within the component and referenced here. */
  table1?: Table<Person>;
  table2?: Table<Person>;
  table3?: Table<Person>;
  table4?: Table<Person>;

  ngAfterViewInit() {
    // Reference the internal table instance
    this.table1 = this.table1Ref._table as Table<Person>;
    this.table2 = this.table2Ref._table as Table<Person>;
    this.table3 = this.table3Ref._table as Table<Person>;
    this.table4 = this.table4Ref._table as Table<Person>;
  }

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  data1: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
  ];

  data2: Person[] = [
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
  ];

  data3: Person[] = [
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  table2Data: Person[] = this.data1;

  onTabChange($event: TabComponent) {
    switch ($event.tabId) {
      case "in-progress":
        this.table2Data = this.data1;
        break;
      case "completed":
        this.table2Data = this.data2;
        break;
      case "archived":
        this.table2Data = this.data3;
        break;
    }
  }
}
```

```html
<!-- Title + search + actions -->
<dbs-table
  #table1Ref
  [data]="data1"
  [columns]="columns"
  title="Title"
  style="width: 100%"
>
  <div headerEndSlot class="end-slot">
    <dbs-search
      placeholder="Search"
      class="search-bar"
      [size]="'md'"
      (input)="table1?.setGlobalFilter($any($event).target.value)"
      (clear)="table1?.setGlobalFilter(undefined)"
    ></dbs-search>
    <div class="actions">
      <dbs-icon-button size="sm">
        <svg-icon iconName="more-vertical"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="gear"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="circle-question"></svg-icon>
      </dbs-icon-button>
    </div>
  </div>
</dbs-table>

<!-- Tabs + search + actions -->
<dbs-table
  #table2Ref
  [data]="table2Data"
  [columns]="columns"
  style="width: 100%"
>
  <dbs-tabs
    headerStartSlot
    variant="filter"
    [defaultTab]="'completed'"
    (onSelect)="onTabChange($event)"
  >
    <dbs-tab
      [tabId]="'in-progress'"
      [tabTitle]="'In progress'"
      [count]="12"
    ></dbs-tab>
    <dbs-tab
      [tabId]="'completed'"
      [tabTitle]="'Completed'"
      [count]="12"
    ></dbs-tab>
    <dbs-tab
      [tabId]="'archived'"
      [tabTitle]="'Archived'"
      [count]="12"
    ></dbs-tab>
  </dbs-tabs>
  <div headerEndSlot class="end-slot">
    <dbs-search
      placeholder="Search"
      class="search-bar"
      [size]="'md'"
      (input)="table2?.setGlobalFilter($any($event).target.value)"
      (clear)="table2?.setGlobalFilter(undefined)"
    ></dbs-search>
    <div class="actions">
      <dbs-icon-button size="sm">
        <svg-icon iconName="more-vertical"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="gear"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="circle-question"></svg-icon>
      </dbs-icon-button>
    </div>
  </div>
</dbs-table>

<!-- Filter group + search + actions -->
<dbs-table #table3Ref [data]="data1" [columns]="columns" style="width: 100%">
  <dbs-combo-form-elements headerStartSlot>
    <dbs-select
      [values]="[
        {
          label: 'Current statement',
          value: 'Current statement',
          selected: true
        },
        { label: 'Unbilled', value: 'Unbilled' }
      ]"
    ></dbs-select>
    <dbs-select
      [values]="[
        { label: 'SGD', value: 'SGD', selected: true },
        { label: 'MYR', value: 'MYR' },
        { label: 'USD', value: 'USD' }
      ]"
    ></dbs-select>
    <dbs-button>
      <svg-icon iconName="filter"></svg-icon>
      Filter
    </dbs-button>
  </dbs-combo-form-elements>
  <div headerEndSlot class="end-slot">
    <dbs-search
      placeholder="Search"
      class="search-bar"
      [size]="'md'"
      (input)="table3?.setGlobalFilter($any($event).target.value)"
      (clear)="table3?.setGlobalFilter(undefined)"
    ></dbs-search>
    <div class="actions">
      <dbs-icon-button size="sm">
        <svg-icon iconName="more-vertical"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="gear"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="circle-question"></svg-icon>
      </dbs-icon-button>
    </div>
  </div>
</dbs-table>

<!-- Search + actions -->
<dbs-table #table4Ref [data]="data1" [columns]="columns" style="width: 100%">
  <dbs-search
    headerStartSlot
    class="search-bar"
    placeholder="Search"
    [size]="'md'"
    (input)="table4?.setGlobalFilter($any($event).target.value)"
    (clear)="table4?.setGlobalFilter(undefined)"
  ></dbs-search>
  <div headerEndSlot class="end-slot">
    <div class="actions">
      <dbs-button>Label</dbs-button>
      <dbs-button>Label</dbs-button>
    </div>
    <div class="actions">
      <dbs-icon-button size="sm">
        <svg-icon iconName="more-vertical"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="gear"></svg-icon>
      </dbs-icon-button>
      <dbs-icon-button size="sm">
        <svg-icon iconName="circle-question"></svg-icon>
      </dbs-icon-button>
    </div>
  </div>
</dbs-table>
```

```css
:host {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.end-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
@media only screen and (min-width: 40em) {
  .end-slot {
    justify-content: flex-end;
  }
}

.search-bar {
  display: block;
  flex-grow: 1;
  max-width: 360px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
```

### **Footer**

Content can be added into the footer using `footerSlot`.

```tsx
import { Component } from "@angular/core";
import {
  DbsTableComponent,
  ColumnDef,
  DbsPaginationComponent,
} from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "footer-story",
  standalone: true,
  imports: [DbsTableComponent, DbsPaginationComponent],
  templateUrl: `footer.component.html`,
})
export class FooterStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns">
  <dbs-pagination footerSlot [loading]="true"></dbs-pagination>
</dbs-table>
```

### **Empty State**

When there are no rows to display, the table renders an empty state. A custom `<dbs-empty-state>` component can be provided through the `emptyStateSlot` slot to replace the default.

```tsx
import { Component } from "@angular/core";
import {
  DbsTableComponent,
  ColumnDef,
  DbsButtonComponent,
  DbsEmptyStateComponent,
} from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "empty-state-story",
  standalone: true,
  imports: [DbsTableComponent, DbsButtonComponent, DbsEmptyStateComponent],
  templateUrl: `empty-state.component.html`,
  styleUrl: `empty-state.component.css`,
})
export class EmptyStateStoryComponent {
  data: Person[] = [];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<!-- Default empty state -->
<dbs-table [data]="data" [columns]="columns"></dbs-table>

<!-- Custom empty state -->
<dbs-table [data]="data" [columns]="columns">
  <dbs-empty-state
    emptyStateSlot
    class="empty-state"
    title="Nothing to see here"
    description="Refine your search to get more results."
  >
    <svg
      illustrationSlot
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M140.684 116.197C143.968 108.037 145.775 99.124 145.775 89.7887C145.775 50.701 114.088 19.0141 75.0002 19.0141C35.9125 19.0141 4.22559 50.701 4.22559 89.7887C4.22559 99.124 6.03296 108.037 9.31688 116.197H140.684Z"
        fill="#FFE6E6"
      />
      <path
        d="M78.125 35.1375C76.6125 37.4875 75.3625 38.75 73.85 41.1125C72.1875 40.35 70.225 39.3625 68.375 39.25C66.8875 39.1625 64.2 39.6125 62.525 40.9875C61.5625 38.95 60.175 37.05 58.975 35.15C58.9 35.025 58.8125 34.9 58.675 34.875C58.4875 34.8375 58.325 35.0125 58.2125 35.1625C53.875 41 53.4625 49.4875 57.225 55.7C57.7 56.4875 58.2625 57.2625 59.075 57.7125C59.2875 57.825 59.525 57.9375 59.65 58.1375C59.775 58.3625 59.75 58.6375 59.7 58.8875C58.8125 63.9625 55.5875 68.25 52.9625 72.675C51.9625 74.3625 51.025 76.1375 50.65 78.0625C50.275 79.9875 50.525 82.125 51.725 83.6875C52.2875 84.425 53.0375 85 53.8125 85.5125C55.8625 86.8625 58.2 87.7875 60.625 88.2125C61.9375 88.45 63.275 88.525 64.6125 88.6C68.825 88.825 73.35 88.8375 76.875 86.525C79.9 84.5375 81.7625 80.9 81.6 77.275C81.525 75.5625 81.0375 73.9 80.4875 72.275C79.725 70.0125 78.8375 67.8 77.825 65.6375C77.0375 63.9375 76.45 62.3375 75.9375 60.5125C75.725 59.7625 75.45 58.725 75.6875 57.95C75.8875 57.3 76.4875 56.7875 76.8625 56.2C77.425 55.325 77.925 54.4125 78.4 53.4875C79.875 50.5875 80.0375 47.575 79.9125 44.3375C79.7875 40.925 78.925 38.425 78.125 35.125V35.1375Z"
        fill="white"
      />
      <path
        d="M99.3625 55.4875V43.1625H140.575V107.65H99.3625V71.575"
        fill="#C7CFD5"
      />
      <path
        d="M99.3625 55.4875V43.1625H140.575V107.65H99.3625V71.575"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M85.4875 79.5125C88.5125 77.95 89.8251 74.35 90.5876 71.025C91.3626 67.6 92.3125 64.1 94.4125 61.225C97.2875 57.3 107.013 53.7875 111.163 57.5C112.6 58.7875 112.638 61.5 110.663 62.2875C109.575 62.725 108.363 62.425 107.188 62.35C103.25 62.1 99.4125 64.675 98.3 68.4625C97.7625 70.2875 97.85 72.2 97.3251 74.0125C96.8001 75.825 95.9875 77.675 94.9875 79.3375"
        fill="white"
      />
      <path
        d="M85.4875 79.5125C88.5125 77.95 89.8251 74.35 90.5876 71.025C91.3626 67.6 92.3125 64.1 94.4125 61.225C97.2875 57.3 107.013 53.7875 111.163 57.5C112.6 58.7875 112.638 61.5 110.663 62.2875C109.575 62.725 108.363 62.425 107.188 62.35C103.25 62.1 99.4125 64.675 98.3 68.4625C97.7625 70.2875 97.8501 72.2 97.3251 74.0125C96.8001 75.825 95.9875 77.675 94.9875 79.3375"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M101.638 57.0625C102.338 58.125 102.888 59.2875 103.238 60.5125"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M96.3254 59.3375C97.0129 60.3125 97.5879 61.3625 98.0379 62.4625"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M94.2122 65.9C95.2747 66.9625 96.5372 67.8375 97.9122 68.4375"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M91.2122 70.0375C92.0622 70.725 93.1372 71.15 94.2247 71.225"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.2621 82.1V107.587H11.7871V65.05H46.2621V78.275"
        fill="#C7CFD5"
      />
      <path
        d="M46.2621 82.1V107.587H11.7871V65.05H46.2621V78.275"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.9 108.875H25.8125V88.1625C25.8125 87.2375 25.8125 84.6375 25.9125 83.7125C26.7625 84.2625 27.1 84.3875 27.6125 84.7125C27.9875 84.3125 28.2 84.075 28.55 83.65C28.9 83.9875 29.8125 84.7625 29.8125 84.7625C29.8125 84.7625 30.5875 84.0125 30.8625 83.7C30.9 88.15 30.9 91.2875 30.9 95.05V108.887V108.875Z"
        fill="white"
        stroke="white"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M116.062 79.65H40.1875V116.263H116.062V79.65Z"
        fill="white"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M99.281 87.6575L94.0714 84.606L82.497 104.366L87.7066 107.417L99.281 87.6575Z"
        fill="#C7CFD5"
        stroke="#C7CFD5"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.1875 79.65L30.75 90.975H124.738L116.062 79.65H40.1875Z"
        fill="white"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.8372 79.575C64.2497 76.7 59.6497 73.0875 56.4747 75.7C55.0372 76.875 53.5872 79.2625 54.9122 81.0125C55.8497 82.2625 57.8997 82.5875 59.3872 82.425C62.3747 82.0875 63.6497 80.9125 63.8372 79.575Z"
        fill="white"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.625 79.5125C57.7375 80.3875 57.7625 81.275 57.7 82.1625"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.4747 79.15C60.5372 80.1125 60.5122 81.0875 60.4122 82.05"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M83.5872 79.575C83.9997 76.7 79.3997 73.0875 76.2247 75.7C74.7872 76.875 73.3372 79.2625 74.6622 81.0125C75.5997 82.2625 77.6497 82.5875 79.1372 82.425C82.1247 82.0875 83.3997 80.9125 83.5872 79.575Z"
        fill="white"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M77.3867 79.5125C77.4992 80.3875 77.5242 81.275 77.4617 82.1625"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M80.2247 79.15C80.2872 80.1125 80.2622 81.0875 80.1622 82.05"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.3625 42.275C62.5125 40.35 65.25 39.3 67.95 39.3625C70.65 39.425 73.3 40.5875 75.3125 42.6"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M73.8875 41.0625C75.575 38.7125 76.1375 37.75 78.275 34.7875C79.2 39.3 80.3875 42.85 79.9375 47.4375C79.4875 52.025 77.4375 56.6875 73.5625 59.1875"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.4 40.6375C61.1375 38.6625 59.875 36.6875 58.6125 34.7125C54.4875 39.575 53.325 46.7625 55.725 52.675C56.95 55.7125 59.375 58.5875 62.625 59.0375"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M59.4375 57.7375C59.5625 61.7125 57.525 65.425 55.3875 68.8125C53.25 72.1875 50.875 75.6 50.2 79.525"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M75.6872 57.5125C75.1622 63.975 80.1247 69.0125 80.9497 75.125"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M65.55 39.9125C65.9 41.0625 66.05 42.25 66 43.425"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M68.2251 39.7625C68.6626 40.9375 68.8251 42.175 68.7251 43.4"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M70.8372 39.975C71.2247 41.025 71.4122 42.15 71.3997 43.275"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M61.1504 47.6125C62.6004 46.4125 64.8254 46.275 66.4379 47.2625"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.85 46.725C63.5625 47.0125 63.4875 47.5 63.7 47.8375C63.9125 48.175 64.4 48.3375 64.7625 48.1625C65.125 47.9875 65.2875 47.475 65.0875 47.125"
        fill="#17181A"
      />
      <path
        d="M63.85 46.725C63.5625 47.0125 63.4875 47.5 63.7 47.8375C63.9125 48.175 64.4 48.3375 64.7625 48.1625C65.125 47.9875 65.2875 47.475 65.0875 47.125"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M70.625 47.475C72.075 46.275 74.3 46.1375 75.9125 47.125"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M73.3246 46.6C73.0371 46.8875 72.9621 47.375 73.1746 47.7125C73.3871 48.05 73.8746 48.2125 74.2371 48.0375C74.5996 47.8625 74.7621 47.35 74.5621 47"
        fill="#17181A"
      />
      <path
        d="M73.3246 46.6C73.0371 46.8875 72.9621 47.375 73.1746 47.7125C73.3871 48.05 73.8746 48.2125 74.2371 48.0375C74.5996 47.8625 74.7621 47.35 74.5621 47"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M84.8496 103.013C86.4371 103.7 88.4996 102.938 89.2371 101.388C89.5371 100.75 89.6246 99.9625 89.2496 99.375C88.7996 98.65 87.9871 98.7375 87.6371 99.5125C87.1996 100.463 88.9871 100.85 89.5996 100.713C90.9121 100.4 91.5371 98.9125 91.6996 97.7125C91.7996 96.9625 91.5871 95.3 90.9496 94.8C90.5996 94.5125 90.0996 94.4375 89.6621 94.525C89.5496 94.55 89.4496 94.575 89.3621 94.65C89.2621 94.7375 89.2246 94.8875 89.2246 95.025C89.2246 95.675 89.9246 96.1625 90.5871 96.1375C91.2496 96.1125 91.8246 95.7 92.2996 95.2625C92.7371 94.8625 93.1371 94.4 93.3621 93.8375"
        stroke="#17181A"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6629 65.1125L2.27539 82.7625"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M46.1375 65.05L52.6125 69.65"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M140.913 78.075C137.888 78.075 121.675 78.25 119.563 78.175C119.463 78.175 120.35 77.475 121.588 76.3375C120.8 76.2125 119.4 75.8125 118.65 75.5625C120.1 75.1 120.7 74.85 121.688 74.425C120.713 74.0125 120.863 74.1125 119.463 73.3875C120.325 73.05 121.2 72.725 122.063 72.3875C121.425 71.75 121.175 71.3875 120.175 70.4C122.263 70.4 137.925 70.15 140.938 70.15V78.075H140.913Z"
        fill="white"
        stroke="white"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.625 65.6875C58.95 66.7875 60.675 67.4125 62.4125 67.4125"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56.0254 68.5125C56.9754 69.375 58.1504 69.9875 59.4129 70.2625"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M77.0379 65.75C75.7754 67.075 74.1629 68.075 72.4004 68.6"
        stroke="#17181A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M58.4625 38.775C58.1375 39.375 57.925 40 57.8 40.6375"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M77.575 39.2C77.7625 39.9375 77.7624 40.725 77.5874 41.475"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M68.875 50.025C68.9375 51.5 68.9125 52.9875 68.8125 54.4625"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M67.9746 49.5875H69.6246"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M122 116L141 116"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 116L33 116"
        stroke="#17181A"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <dbs-button>Return to dashboard</dbs-button>
  </dbs-empty-state>
</dbs-table>
```

### **No Container**

The table can be rendered without the container, allowing for full-screen implementations or as part of other layouts.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "../../../../public-api";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  createdAt?: Date;
  status?: string;
  title?: string;
};

@Component({
  selector: "no-container-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `no-container.component.html`,
})
export class NoContainerStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      createdAt: new Date(),
      status: "In Relationship",
      title: "fugit voluptas sed molestias voluptatem provident",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      createdAt: new Date("4 September 2024"),
      status: "Single",
      title: "voluptate et itaque vero tempora molestiae",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      createdAt: new Date("15 September 2024"),
      status: "Complicated",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      createdAt: new Date(),
      status: "In Relationship",
      title: "adipisci placeat illum aut reiciendis qui",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      createdAt: new Date(),
      status: "In Relationship",
      title: "doloribus ad provident suscipit at",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      createdAt: new Date(),
      status: "In Relationship",
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      createdAt: new Date(),
      status: "In Relationship",
      title: "dolor sint quo a velit explicabo quia nam",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (props) => (props.cell.getValue() as Date).toLocaleDateString(),
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns" [container]="false"></dbs-table>
```

### **Merging Cells Across Columns**

Each cell can be set to span across multiple columns. This can be used to turn rows into section headers as shown below.

To do so, two things need to be done with the meta properties in the column definition:

1. The cell whose column span needs to increase should be adjusted with the `colSpan` meta.
2. The rest of the cells that need to make way for the increased-span column need to be removed with the `rendered` meta.

The `colSpan` meta property takes in a function that returns the number of columns to span.

The `rendered` meta property takes in a function that returns a boolean determining if the `<td>` cell should be rendered or not.

The section header element can be added to the cell using the DbsTableSectionHeaderComponent component.

**NOTE: Sorting should be disabled as it typically does not work well with section headers like these due to the nature of sorted content.**

```tsx
import { Component, TemplateRef, viewChild } from "@angular/core";
import {
  DbsTableComponent,
  DbsTableSectionHeaderComponent,
  ColumnDef,
  Cell,
  CellContext,
  RowData,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
  sectionLabel?: never;
};

type Section = {
  firstName?: never;
  lastName?: never;
  age?: never;
  visits?: never;
  status?: never;
  sectionLabel?: string;
};

type Data = Person | Section;

@Component({
  selector: "custom-cell-colspan-story",
  standalone: true,
  imports: [DbsTableComponent, DbsTableSectionHeaderComponent],
  templateUrl: `custom-cell-colspan.component.html`,
})
export class CustomCellColspanStoryComponent {
  data: Data[] = [
    {
      sectionLabel: "Hong Kong",
    },
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "10",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
      status: "Complicated",
    },
    {
      sectionLabel: "Singapore",
    },
    {
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
      status: "In Relationship",
    },
    {
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
      status: "In Relationship",
    },
    {
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
      status: "In Relationship",
    },
    {
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
      status: "In Relationship",
    },
  ];

  columns: ColumnDef<Data>[] = [
    {
      accessorKey: "firstName",
      header: "First Name",
      enableSorting: false,
      // If sectionLabel is defined, render this cell as a section header. Otherwise render the cell's value.
      cell: ({ cell, row }) => {
        if (row.original.sectionLabel) {
          return this.sectionHeaderCell();
        }
        return cell.getValue();
      },
      meta: {
        // If sectionLabel is defined, set the colSpan to the max.
        colSpan: (cell: Cell<Data, unknown>) => {
          if (cell.row.original.sectionLabel) {
            return cell.row.getVisibleCells().length;
          }
          return 1;
        },
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      enableSorting: false,
      meta: {
        // If sectionLabel is defined, remove this cell as it will be occupied by the first column's cell.
        rendered: (cell: Cell<Data, unknown>) => {
          return !cell.row.original.sectionLabel;
        },
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      enableSorting: false,
      meta: {
        rendered: (cell: Cell<Data, unknown>) => {
          return !cell.row.original.sectionLabel;
        },
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      enableSorting: false,
      meta: {
        rendered: (cell: Cell<Data, unknown>) => {
          return !cell.row.original.sectionLabel;
        },
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      enableSorting: false,
      meta: {
        rendered: (cell: Cell<Data, unknown>) => {
          return !cell.row.original.sectionLabel;
        },
      },
    },
  ];

  sectionHeaderCell =
    viewChild<TemplateRef<{ $implicit: CellContext<RowData, Person> }>>(
      "sectionHeaderCell",
    );
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [stickyHeader]="true"
  style="width: 100%; height: 300px"
></dbs-table>

<ng-template #sectionHeaderCell let-context>
  <!-- Add the `dbs-table__td-reset` class to remove some default styling from the parent <td> element. -->
  <dbs-table-section-header class="dbs-table__td-reset">
    {{ context.row.original.sectionLabel.toUpperCase() }}
  </dbs-table-section-header>
</ng-template>
```

### **Merging Cells Across Rows**

Each cell in the same column can be set to span across multiple rows if they share the same value. To do so, set `enableRowSpan` to true in the column meta.

Optionally, `rowSpanState` can be used to set and read the array of `rowspan` values set to each cell in each row. This is a model that allows for two-way binding, and is accompanied by the `rowSpanStateChange` Output.

`rowSpanState` is an array of type `Record<string, number>`, where `number` is the rowspan value.

```tsx
import { Component } from "@angular/core";
import { DbsTableComponent, ColumnDef } from "@dbs-angular/core";

type Person = {
  country?: string;
  region?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
};

@Component({
  selector: "rowspan-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `rowspan.component.html`,
})
export class RowspanStoryComponent {
  data: Person[] = [
    {
      country: "Hong Kong",
      region: "Kowloon",
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "50",
    },
    {
      country: "Hong Kong",
      region: "Kowloon",
      firstName: "tanner",
      lastName: "linsley",
      age: "40",
      visits: "10",
    },
    {
      country: "Hong Kong",
      region: "Victoria",
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "200",
    },
    {
      country: "Taiwan",
      region: "Taipei",
      firstName: "edison",
      lastName: "chee",
      age: "29",
      visits: "38",
    },
    {
      country: "Singapore",
      region: "West",
      firstName: "neilson",
      lastName: "cheng",
      age: "21",
      visits: "291",
    },
    {
      country: "Singapore",
      region: "West",
      firstName: "amos",
      lastName: "wong",
      age: "25",
      visits: "900",
    },
    {
      country: "Singapore",
      region: "East",
      firstName: "dominic",
      lastName: "neo",
      age: "31",
      visits: "1",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: "country",
      header: "Country",
      meta: {
        enableRowSpan: true,
        borders: () => ({ right: true }),
        headerBorders: () => ({ right: true }),
      },
    },
    {
      accessorKey: "region",
      header: "Region",
      meta: {
        enableRowSpan: true,
        borders: () => ({ right: true }),
        headerBorders: () => ({ right: true }),
      },
    },
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
  ];
}
```

```html
<dbs-table [data]="data" [columns]="columns" style="width: 100%"></dbs-table>
```

### **Rendering Components In Cells**

Components can be rendered into cells using any one of 3 strategies:

1. Returning a `flexRenderComponent` function, passing in the component and an object containing the inputs, outputs, and injector.
2. Returning a `FlexRenderComponent` class, passing in the component and separate objects for the inputs, outputs, and injector.
3. Returning a reference to an `<ng-template>` containing the component, allowing inputs, outputs, and slot content to be passed in via the template.

The same can be done for the header and footer cells by passing into the `header` or `footer` properties respectively.

More info can be found in [TanStack Table: Rendering a Component](https://tanstack.com/table/latest/docs/framework/angular/angular-table#rendering-a-component).

```tsx
import { Component, Input, TemplateRef, viewChild } from "@angular/core";
import {
  DbsTableComponent,
  CellContext,
  ColumnDef,
  flexRenderComponent,
  FlexRenderComponent,
  DbsAvatarComponent,
  DbsIconButtonComponent,
  DbsSvgIconComponent,
  DbsTagComponent,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "person-cell",
  standalone: true,
  template: `{{ name }}
    <div class="age">Age: {{ age }}</div>`,
  styles: `
    .age {
      color: var(--color-text-subtle);
      font-size: var(--typography-font-size-2-xs);
    }
  `,
})
export class PersonCellComponent {
  @Input() age: string;
  @Input() name: string;
}

@Component({
  selector: "cell-component-renderer-story",
  standalone: true,
  imports: [
    DbsTableComponent,
    DbsIconButtonComponent,
    DbsSvgIconComponent,
    DbsTagComponent,
  ],
  templateUrl: `cell-component-renderer.component.html`,
})
export class CellComponentRendererStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      accessorKey: "avatar",
      header: "Avatar",
      cell: (context) => {
        // Option 1: Render component with `flexRenderComponent` function
        return flexRenderComponent(DbsAvatarComponent, {
          inputs: {
            size: "xs",
            name: context.getValue(),
          },
        });
      },
      enableSorting: false,
    },
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      id: "person",
      header: () => this.personHeader(),
      cell: (context) => {
        // Option 2: Render component with `FlexRenderComponent` class
        return new FlexRenderComponent(PersonCellComponent, {
          age: context.row.original.age,
          name: context.getValue(),
        });
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: () => {
        // Option 3: Render component with `<ng-template>`
        return this.statusCell();
      },
    },
    {
      accessorFn: () => null,
      id: "actions",
      header: "Actions",
      cell: () => this.actionsCell(),
      enableSorting: false,
    },
  ];

  personHeader = viewChild<TemplateRef<unknown>>("personHeader");

  statusCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("statusCell");

  actionsCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("actionsCell");

  onActionClick($event: Event) {
    console.log($event);
  }
}
```

```html
<dbs-table [data]="data" [columns]="columns"></dbs-table>

<ng-template #personHeader>
  <svg-icon [iconName]="'user'" style="width: 16px; height: 16px"></svg-icon>
  Person
</ng-template>

<ng-template #statusCell let-context>
  <dbs-tag>{{ context.getValue() }}</dbs-tag>
</ng-template>

<ng-template #actionsCell let-context>
  <div style="display: flex; justify-content: flex-end">
    <dbs-icon-button #btn size="sm" (click)="onActionClick($event)">
      <svg-icon iconName="more-vertical"></svg-icon>
    </dbs-icon-button>
  </div>
</ng-template>
```

### **Sub-components**

Sub-components can be nested below each row using `<ng-template #subComponentTemplate>`. The row data is available via the `row` variable within the template.

The expander element can be added to the first column using the `DbsTableExpanderComponent` component.

`expandedState` can then be used to set and read the index of the expanded rows. This is a model that allows for two-way binding, and is accompanied by the `expandedStateChange` Output.

`expandedState` is an object of type `true | Record<string, boolean>`, where `boolean` is the expanded state of the row. Setting it to `true` will expand all rows.

See [Table Patterns](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/patterns-table-patterns--docs) for more examples.

```tsx
import { Component, signal, TemplateRef, viewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsTableComponent,
  DbsTableExpanderComponent,
  ColumnDef,
  CellContext,
  ExpandedState,
  RowData,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
  friends?: string[];
};

@Component({
  selector: "sub-components-story",
  standalone: true,
  imports: [CommonModule, DbsTableComponent, DbsTableExpanderComponent],
  templateUrl: `sub-components.component.html`,
})
export class SubComponentsStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
      friends: ["tandy", "joe"],
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
      friends: ["tanner", "tandy", "edison", "neilson", "amos", "dominic"],
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorFn: () => null,
      id: "expander",
      header: () => null,
      cell: () => this.expanderCell(),
      enableSorting: false,
      size: 53,
      meta: {
        pinPosition: "left",
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 150,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 150,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      size: 150,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      size: 150,
      meta: {
        columnSizing: "fixed",
      },
    },
  ];

  expandedState = signal<ExpandedState>({ 0: true });

  expanderCell =
    viewChild<TemplateRef<{ $implicit: CellContext<RowData, Person> }>>(
      "expanderCell",
    );
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [(expandedState)]="expandedState"
  style="width: 100%"
>
  <ng-template #subComponentTemplate let-row>
    @if (row.original.friends && row.original.friends.length > 0) {
      <div
        style="
          padding: 24px;
          background-color: var(--color-background-alt);
          border-bottom: var(--table-heading-cell-border-bottom-width)
            var(--table-heading-cell-border-bottom-style)
            var(--table-heading-cell-border-bottom-color);
        "
      >
        <span>My friends are </span>
        @for (friend of row.original.friends; track $index) {
          @if ($last) {
            <span>and </span>
          }
          <span>{{ friend }}</span>
          @if (!$last) {
            <span>, </span>
          }
        }
        <span>.</span>
      </div>
    }
  </ng-template>
</dbs-table>

<ng-template #expanderCell let-context>
  @if (
    context.row.original.friends && context.row.original.friends.length > 0
  ) {
    <dbs-table-expander [row]="context.row"></dbs-table-expander>
  }
</ng-template>
```

### **Sub-rows**

Sub-rows can be nested within other rows and made expandable. To do so, a function must be passed into the `getSubRows` Input to determine how sub-rows are retrieved for each row.

Row controls for sub-rows should have a 16px padding on the left.

Usage of the expander element is described in the "Sub-components" story above.

```tsx
import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import {
  DbsTableComponent,
  DbsTableSelectionComponent,
  DbsTableExpanderComponent,
  ColumnDef,
  Row,
  TData,
  ExpandedState,
  flexRenderComponent,
} from "@dbs-angular/core";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
  friends?: Person[];
};

@Component({
  selector: "row-controls",
  standalone: true,
  imports: [
    CommonModule,
    DbsTableSelectionComponent,
    DbsTableExpanderComponent,
  ],
  styles: `
    .row-controls {
      display: flex;
      align-items: center;
      gap: var(--space-16);
      flex-shrink: 0;
      padding-left: calc(var(--space-16) * var(--dbs-table-row-depth));
    }
  `,
  template: `
    <div
      class="row-controls"
      [ngStyle]="{ '--dbs-table-row-depth': row.depth }"
    >
      <dbs-table-selection context="row"></dbs-table-selection>
      @if (row.original.friends && row.original.friends.length > 0) {
        <dbs-table-expander [row]="row"></dbs-table-expander>
      }
    </div>
  `,
})
export class RowControlsComponent {
  @Input() row: Row<TData<Person>>;
}

@Component({
  selector: "sub-rows-story",
  standalone: true,
  imports: [DbsTableComponent],
  templateUrl: `sub-rows.component.html`,
})
export class SubRowsStoryComponent {
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
      friends: [
        {
          firstName: "tanner",
          lastName: "linsley",
          age: "24",
          visits: "50",
          status: "In Relationship",
        },
        {
          firstName: "tandy",
          lastName: "miller",
          age: "40",
          visits: "10",
          status: "Single",
        },
        {
          firstName: "joe",
          lastName: "dirte",
          age: "45",
          visits: "200",
          status: "Complicated",
        },
      ],
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
      friends: [
        {
          firstName: "tanner",
          lastName: "linsley",
          age: "24",
          visits: "50",
          status: "In Relationship",
        },
        {
          firstName: "tandy",
          lastName: "miller",
          age: "40",
          visits: "10",
          status: "Single",
        },
        {
          firstName: "joe",
          lastName: "dirte",
          age: "45",
          visits: "200",
          status: "Complicated",
        },
        {
          firstName: "edison",
          lastName: "chee",
          age: "29",
          visits: "38",
          status: "In Relationship",
        },
        {
          firstName: "neilson",
          lastName: "cheng",
          age: "21",
          visits: "291",
          status: "In Relationship",
        },
        {
          firstName: "amos",
          lastName: "wong",
          age: "25",
          visits: "900",
          status: "In Relationship",
        },
        {
          firstName: "dominic",
          lastName: "neo",
          age: "31",
          visits: "1",
          status: "In Relationship",
        },
      ],
    },
  ];

  columns: ColumnDef<Person>[] = [
    {
      accessorFn: () => null,
      id: "expander",
      header: () => {
        return flexRenderComponent(DbsTableSelectionComponent, {
          inputs: { context: "header" },
        });
      },
      cell: (context) => {
        return flexRenderComponent(RowControlsComponent, {
          inputs: { row: context.row },
        });
      },
      enableSorting: false,
      size: 53,
      meta: {
        columnSizing: "fixed",
      },
    },
    {
      accessorKey: "firstName",
      header: "First Name",
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "visits",
      header: "Visits",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ];

  /** Function to retrieve the sub-rows of each row. */
  getSubRows = (originalRow: TData<Person>, _index: number) => {
    return originalRow.friends;
  };

  expandedState = signal<ExpandedState>({ 0: true });
}
```

```html
<dbs-table
  [data]="data"
  [columns]="columns"
  [getSubRows]="getSubRows"
  [(expandedState)]="expandedState"
></dbs-table>
```

### **Custom Rendering**

If there is a need to change the way the rows and headers are rendered, the existing table instance can be referenced with `@ViewChild` or `viewChild`. This instance can then be used to render the template logic, which can be passed into the table component. The component's default slot replaces elements in `<tbody>`, while the `theadSlot` slot replaces elements in `<thead>`.

```tsx
import { Component, TemplateRef, ViewChild, viewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsTableComponent,
  ColumnDef,
  FlexRenderDirective,
  Table,
  DbsAvatarComponent,
  DbsButtonComponent,
  DbsIconButtonComponent,
  DbsPaginationComponent,
  DbsSvgIconComponent,
  DbsTableThComponent,
  DbsTagComponent,
  DbsSearchComponent,
  CellContext,
} from "../../../../public-api";
import { GetFilterOptionsPipe } from "../../../utils";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "custom-rendering-story",
  standalone: true,
  imports: [
    CommonModule,
    FlexRenderDirective,
    GetFilterOptionsPipe,
    DbsSvgIconComponent,
    DbsAvatarComponent,
    DbsButtonComponent,
    DbsIconButtonComponent,
    DbsSearchComponent,
    DbsPaginationComponent,
    DbsTableComponent,
    DbsTableThComponent,
    DbsTagComponent,
  ],
  templateUrl: `custom-rendering.component.html`,
})
export class CustomRenderingStoryComponent {
  @ViewChild("tableRef") tableRef: DbsTableComponent<Person>;

  /** The core table instance generated within the component and referenced here. */
  table?: Table<Person>;

  ngAfterViewInit() {
    // Reference the internal table instance
    this.table = this.tableRef._table as Table<Person>;
  }

  /** Row data. */
  data: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ];

  /** Column definitions. */
  columns: ColumnDef<Person>[] = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      accessorKey: "avatar",
      header: "Avatar",
      cell: () => this.avatarCell(),
      enableSorting: false,
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "firstName",
      header: "First Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: () => this.statusCell(),
      meta: {
        filterVariant: "select",
      },
    },
  ];

  avatarCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("avatarCell");

  statusCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("statusCell");

  /** Size of the table. */
  size: "regular" | "small" | "mini" = "regular";

  /** The display style of rows in the table. */
  rowStyle: "default" | "minimal" | "zebra" = "default";
}
```

```html
<dbs-table
  #tableRef
  [rowStyle]="rowStyle"
  [size]="size"
  [data]="data"
  [columns]="columns"
>
  <!-- Global search -->
  <dbs-search
    headerStartSlot
    style="display: block; max-width: 360px"
    placeholder="Search"
    [size]="'md'"
    (input)="table?.setGlobalFilter($any($event).target.value)"
    (clear)="table?.setGlobalFilter(undefined)"
  ></dbs-search>
  <!-- Header buttons -->
  <div
    headerEndSlot
    style="
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    "
  >
    <dbs-button>Label</dbs-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="more-vertical"></svg-icon>
    </dbs-icon-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="gear"></svg-icon>
    </dbs-icon-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="circle-question"></svg-icon>
    </dbs-icon-button>
  </div>
  @for (headerGroup of table?.getHeaderGroups(); track headerGroup.id) {
    <div theadSlot style="display: contents">
      <tr class="dbs-table__thead-tr">
        @for (header of headerGroup.headers; track header.id) {
          @if (!header.isPlaceholder) {
            <dbs-table-th
              class="
              dbs-table__th
              dbs-table__th--align={{
                header.column.columnDef.meta?.align || 'left'
              }}
              "
              [colSpan]="header.colSpan"
              [canSort]="header.column.getCanSort()"
              [sorted]="header.column.getIsSorted()"
              [canFilter]="header.column.getCanFilter()"
              [filterVariant]="
                (header.column.columnDef.meta ?? {}).filterVariant
              "
              [filterValue]="$any(header.column.getFilterValue())"
              [filterOptions]="
                header.column.columnDef.meta?.filterOptions ??
                (header.column.getFacetedUniqueValues() | getFilterOptions)
              "
              (sort)="header.column.getToggleSortingHandler()?.($event)"
              (filter)="header.column.setFilterValue($event)"
            >
              <ng-container
                *flexRender="
                  header.column.columnDef.header;
                  props: header.getContext();
                  let headerValue
                "
              >
                {{ headerValue }}
              </ng-container>
            </dbs-table-th>
          }
        }
      </tr>
    </div>
  }
  @for (
    row of table?.getRowModel()?.rows;
    track row.id;
    let index = $index;
    let last = $last;
    let even = $even
  ) {
    <tr tbodySlot class="dbs-table__tbody-tr">
      @for (cell of row.getVisibleCells(); track cell.id) {
        <td
          class="
          dbs-table__td
          dbs-table__td--align-{{ cell.column.columnDef.meta?.align || 'left' }}
          dbs-table__td--vertical-align-{{
            cell.column.columnDef.meta?.verticalAlign || 'top'
          }}
          "
        >
          <ng-container
            *flexRender="
              cell.column.columnDef.cell;
              props: cell.getContext();
              let cell
            "
          >
            <!-- Render cell value with search term highlighting -->
            <div [innerHTML]="cell"></div>
          </ng-container>
        </td>
      }
    </tr>
  }
  <!-- Footer -->
  <dbs-pagination footerSlot [loading]="true"></dbs-pagination>
</dbs-table>

<ng-template #avatarCell let-context>
  <dbs-avatar size="xs" [name]="context.getValue()"></dbs-avatar>
</ng-template>

<ng-template #statusCell let-context>
  <dbs-tag>{{ context.getValue() }}</dbs-tag>
</ng-template>
```

### **Custom Table Instance**

Additional TanStack Table features can be added by re-creating the core table instance, allowing full control over the table state and logic. The re-created table instance can then be used for custom rendering, similar to the previous example. Refer to the [TanStack Table docs](https://tanstack.com/table/v8/docs/framework/angular/examples/grouping) for all the available features and examples provided by TanStack Table.

```tsx
import {
  Component,
  Signal,
  TemplateRef,
  signal,
  viewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  CellContext,
  ColumnDef,
  createAngularTable,
  FilterMeta,
  FlexRenderDirective,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  Row,
  Table,
} from "@tanstack/angular-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import { escapeRegExp } from "../../../../utils/escapeRegExp";
import {
  DbsTableComponent,
  DbsAvatarComponent,
  DbsButtonComponent,
  DbsEmptyStateComponent,
  DbsIconButtonComponent,
  DbsPaginationComponent,
  DbsSvgIconComponent,
  DbsTableThComponent,
  DbsTagComponent,
  DbsSearchComponent,
  TData,
  DropdownValue,
  SelectDateRange,
} from "../../../../public-api";
import { GetFilterOptionsPipe } from "../../../utils";

type Person = {
  firstName?: string;
  lastName?: string;
  age?: string;
  visits?: string;
  status?: string;
};

@Component({
  selector: "custom-table-instance-story",
  standalone: true,
  imports: [
    CommonModule,
    FlexRenderDirective,
    GetFilterOptionsPipe,
    DbsSvgIconComponent,
    DbsAvatarComponent,
    DbsButtonComponent,
    DbsEmptyStateComponent,
    DbsIconButtonComponent,
    DbsSearchComponent,
    DbsPaginationComponent,
    DbsTableComponent,
    DbsTableThComponent,
    DbsTagComponent,
  ],
  templateUrl: `custom-table-instance.component.html`,
})
export class CustomTableInstanceStoryComponent {
  /** Row data. */
  data = signal<Person[]>([
    {
      firstName: "tanner",
      lastName: "linsley",
      age: "24",
      visits: "100",
      status: "In Relationship",
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: "40",
      visits: "40",
      status: "Single",
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: "45",
      visits: "20",
      status: "Complicated",
    },
  ]);

  /** Column definitions. */
  columns = signal<ColumnDef<Person>[]>([
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      accessorKey: "avatar",
      header: "Avatar",
      cell: () => this.avatarCell(),
      enableSorting: false,
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "firstName",
      header: "First Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "age",
      header: "Age",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "visits",
      header: "Visits",
      meta: {
        filterVariant: "text",
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: () => this.statusCell(),
      meta: {
        filterVariant: "select",
      },
    },
  ]);

  avatarCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("avatarCell");

  statusCell =
    viewChild<TemplateRef<{ $implicit: CellContext<any, any> }>>("statusCell");

  /** Global filter state. */
  globalFilter = signal<string>("");

  /** The core table object containing the table state and APIs. */
  table: Table<Person> & (() => Table<Person>) & Signal<Table<Person>> =
    createAngularTable(() => ({
      data: this.data(),
      columns: this.columns(),
      filterFns: {
        fuzzy: this.fuzzyFilter,
        multiSelect: this.multiSelectFilter,
        date: this.dateFilter,
        dateRange: this.dateRangeFilter,
      },
      state: {
        globalFilter: this.globalFilter(),
      },
      onGlobalFilterChange: (updaterOrValue) => {
        updaterOrValue instanceof Function
          ? this.globalFilter.update(updaterOrValue)
          : this.globalFilter.set(updaterOrValue);
      },
      globalFilterFn: "fuzzy", // apply fuzzy filter to the global filter (most common use case for fuzzy filter)
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      debugTable: true,
    }));

  /** @internal Multi-select filter function to allow multiple select values. */
  multiSelectFilter(
    row: Row<TData<Person>>,
    columnId: string,
    filterValue: DropdownValue[],
    _: (meta: FilterMeta) => void,
  ) {
    if (filterValue && filterValue.length > 0) {
      const value = row.getValue(columnId) as string;
      return !!filterValue.find((val) => val.value === value);
    }
    return true;
  }

  /** @internal Date filter function to allow matching dates. */
  dateFilter(
    row: Row<TData<Person>>,
    columnId: string,
    filterValue: { date: Date | null },
    _: (meta: FilterMeta) => void,
  ) {
    if (filterValue.date) {
      const value = row.getValue(columnId) as Date;
      const isDateMatch = filterValue.date.getDate() === value.getDate();
      const isMonthMatch = filterValue.date.getMonth() === value.getMonth();
      const isYearMatch =
        filterValue.date.getFullYear() === value.getFullYear();
      return isDateMatch && isMonthMatch && isYearMatch;
    }
    return true;
  }

  /** @internal Date range filter function to allow dates within the date range. */
  dateRangeFilter(
    row: Row<TData<Person>>,
    columnId: string,
    filterValue: SelectDateRange,
    _: (meta: FilterMeta) => void,
  ) {
    const from = filterValue.from?.valueOf();
    const to = filterValue.to?.valueOf();
    const value = (row.getValue(columnId) as Date)?.valueOf();

    if (from && to) {
      return value >= from && value <= to;
    }
    if (from && !to) {
      return value >= from;
    }
    if (!from && to) {
      return value <= to;
    }
    return true;
  }

  /** A custom fuzzy filter function that will apply ranking info to rows (using match-sorter utils). */
  fuzzyFilter(
    row: Row<Person>,
    columnId: string,
    filterValue: any,
    addMeta: (meta: FilterMeta) => void,
  ) {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), filterValue);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  }

  /** Renders the plain text cell with search term highlighting. */
  renderCell(cellValue: string) {
    if (!this.globalFilter()) {
      return cellValue;
    }

    const searchRegex = new RegExp(
      `(${escapeRegExp(this.globalFilter())})`,
      "ig",
    );
    const highlightedText = cellValue.replace(
      searchRegex,
      '<span class="dbs-table__search-highlight">$1</span>',
    );
    return highlightedText;
  }

  /** Size of the table. */
  size: "regular" | "small" | "mini" = "regular";

  /** The display style of rows in the table. */
  rowStyle: "default" | "minimal" | "zebra" = "default";
}
```

```html
<dbs-table [rowStyle]="rowStyle" [size]="size">
  <!-- Global search -->
  <dbs-search
    headerStartSlot
    style="display: block; max-width: 360px"
    placeholder="Search"
    [size]="'md'"
    (input)="table.setGlobalFilter($any($event).target.value)"
    (clear)="table.setGlobalFilter(undefined)"
  ></dbs-search>
  <!-- Header buttons -->
  <div
    headerEndSlot
    style="
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    "
  >
    <dbs-button>Label</dbs-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="more-vertical"></svg-icon>
    </dbs-icon-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="gear"></svg-icon>
    </dbs-icon-button>
    <dbs-icon-button size="sm">
      <svg-icon iconName="circle-question"></svg-icon>
    </dbs-icon-button>
  </div>
  @for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
    <div theadSlot style="display: contents">
      <tr class="dbs-table__thead-tr">
        @for (header of headerGroup.headers; track header.id) {
          @if (!header.isPlaceholder) {
            <dbs-table-th
              class="
              dbs-table__th
              dbs-table__th--align={{
                header.column.columnDef.meta?.align || 'left'
              }}
              "
              [colSpan]="header.colSpan"
              [canSort]="header.column.getCanSort()"
              [sorted]="header.column.getIsSorted()"
              [canFilter]="header.column.getCanFilter()"
              [filterVariant]="
                (header.column.columnDef.meta ?? {}).filterVariant
              "
              [filterValue]="$any(header.column.getFilterValue())"
              [filterOptions]="
                header.column.columnDef.meta?.filterOptions ??
                (header.column.getFacetedUniqueValues() | getFilterOptions)
              "
              (sort)="header.column.getToggleSortingHandler()?.($event)"
              (filter)="header.column.setFilterValue($event)"
            >
              <ng-container
                *flexRender="
                  header.column.columnDef.header;
                  props: header.getContext();
                  let headerValue
                "
              >
                {{ headerValue }}
              </ng-container>
            </dbs-table-th>
          }
        }
      </tr>
    </div>
  }
  @for (
    row of table.getRowModel().rows;
    track row.id;
    let index = $index;
    let last = $last;
    let even = $even
  ) {
    <tr tbodySlot class="dbs-table__tbody-tr">
      @for (cell of row.getVisibleCells(); track cell.id) {
        <td
          class="
          dbs-table__td
          dbs-table__td--align-{{ cell.column.columnDef.meta?.align || 'left' }}
          dbs-table__td--vertical-align-{{
            cell.column.columnDef.meta?.verticalAlign || 'top'
          }}
          "
        >
          <ng-container
            *flexRender="
              cell.column.columnDef.cell;
              props: cell.getContext();
              let cell
            "
          >
            <!-- Render cell value with search term highlighting -->
            <div [innerHTML]="cell"></div>
          </ng-container>
        </td>
      }
    </tr>
  }
  <!-- Footer -->
  <dbs-pagination footerSlot [loading]="true"></dbs-pagination>

  <!-- Render empty state if no items -->
  @if (table.getRowModel().rows.length <= 0) {
    <div emptyStateSlot class="dbs-table__empty-state">
      <ng-container [ngTemplateOutlet]="emptyStateDefault"></ng-container>
    </div>
  }
</dbs-table>

<ng-template #avatarCell let-context>
  <dbs-avatar size="xs" [name]="context.getValue()"></dbs-avatar>
</ng-template>

<ng-template #statusCell let-context>
  <dbs-tag>{{ context.getValue() }}</dbs-tag>
</ng-template>

<ng-template #emptyStateDefault>
  <dbs-empty-state title="No items to display">
    <svg
      illustrationSlot
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M137.573 103C140.433 95.549 142 87.4575 142 79C142 41.9969 112.003 12 75 12C37.9969 12 8 41.9969 8 79C8 87.4575 9.56706 95.549 12.4267 103H137.573Z"
        fill="#FFE6E6"
      />
      <mask
        id="mask0_41_3317"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="12"
        width="134"
        height="91"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M137.573 103C140.433 95.549 142 87.4575 142 79C142 41.9969 112.003 12 75 12C37.9969 12 8 41.9969 8 79C8 87.4575 9.56706 95.549 12.4267 103H137.573Z"
          fill="#DDE3E7"
        />
      </mask>
      <g mask="url(#mask0_41_3317)">
        <rect
          x="16.375"
          y="86.375"
          width="117.25"
          height="31.25"
          rx="3.625"
          fill="white"
          stroke="#17181A"
          stroke-width="0.75"
        />
        <rect x="24" y="95" width="102" height="4" rx="2" fill="#C7CFD5" />
      </g>
      <rect
        x="16.375"
        y="62.375"
        width="117.25"
        height="19.25"
        rx="3.625"
        fill="white"
        stroke="#17181A"
        stroke-width="0.75"
      />
      <rect x="24" y="70" width="102" height="4" rx="2" fill="#C7CFD5" />
      <path
        d="M146 131L139 122"
        stroke="#17181A"
        stroke-width="4"
        stroke-linecap="round"
      />
      <circle
        cx="125"
        cy="103"
        r="23.25"
        fill="white"
        stroke="#17181A"
        stroke-width="1.5"
      />
      <path
        d="M143 108C142.458 111.756 139.1 119.613 130 121"
        stroke="#17181A"
        stroke-linecap="round"
      />
      <circle cx="115" cy="103" r="3" fill="#C7CFD5" />
      <circle cx="125" cy="103" r="3" fill="#C7CFD5" />
      <circle cx="135" cy="103" r="3" fill="#C7CFD5" />
      <rect
        x="16.375"
        y="26.375"
        width="117.25"
        height="31.25"
        rx="3.625"
        fill="white"
        stroke="#17181A"
        stroke-width="0.75"
      />
      <rect x="24" y="35" width="102" height="4" rx="2" fill="#C7CFD5" />
      <rect x="24" y="45" width="88" height="4" rx="2" fill="#C7CFD5" />
    </svg>
  </dbs-empty-state>
</ng-template>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **data** | Row data.TData[] | [] | data :[
• 0 :{...} 5 keys
• 1 :{...} 5 keys
• 2 :{...} 5 keys] |
| **columns** | Column definitions.ColumnDef<TData>[] | [] | columns :[
• 0 :{...} 3 keys
• 1 :{...} 3 keys
• 2 :{...} 3 keys
• 3 :{...} 3 keys
• 4 :{...} 3 keys] |
| **columnFiltersState** | Column filters state.
`id`: The ID of the column.
`value`: The column's filter value.ColumnFiltersState | [] |  |
| **columnOrderState** | Column order stateColumnOrderState | [] |  |
| **columnSizingState** | Column sizing stateColumnSizingState | {} |  |
| **columnVisibilityState** | Column visibility stateVisibilityState | {} |  |
| **enableColumnResizing** | Enables column resizing on columns that have `meta.columnSizing` set to `fixed`.boolean | false |  |
| **expandedState** | Row expanded stateExpandedState | {} |  |
| **manualPagination** | Enables manual pagination. The table will not automatically paginate rows and instead will expect you to manually paginate the rows before passing them to the table. This is useful if you are doing server-side pagination and aggregation. If this option is set to `true`, `rowCount` must also be provided.boolean | false |  |
| **paginationState** | Pagination state
`pageIndex`: Index of the page to be displayed.
`pageSize`: Number of items to show per page.PaginationState | { pageIndex: 0, pageSize: 10 } |  |
| **rowCount** | Total number of data items. Used for manual pagination.number |  |  |
| **rowSelectionState** | Row selection stateRowSelectionState | {} |  |
| **rowSpanState** | Row span stateRowSpanState | [] |  |
| **sortingState** | Sorting state.
`desc`: Whether the column is sorted in descending direction.
`id`: The ID of the column.SortingState | [] |  |
| **container** | Displays the table in a container, making it visually similar to a card.boolean | true |  |
| **enableRowSelection** | Determines if row selection should be enabled on each row.boolean | ((row: Row<TData<T>>) => boolean) |  |  |
| **filterFns** | Record of custom filter functions that can be used with `filterFn` in the column definition.Record<FilterFns | FilterFn<TData<T>>> | {} |  |
| **getSubRows** | Function to retrieve the sub-rows of each row.(originalRow: TData<T>, index: number) => TData<T>[] | undefined |  |  |
| **loading** | Enable/disable loading state.boolean | false |  |
| **pagination** | Enable/disable pagination.boolean | false |  |
| **paginationArrayOfIntervals** | Customise the pagination dropdown menu for items per page, via `customArrayOfIntervals`.number[] | DropdownValue[] | [] |  |
| **rowStyle** | The display style of rows in the table."default""minimal""zebra" | default | defaultminimalzebra |
| **size** | Size of the table."regular""small""mini" | regular | regularsmallmini |
| **stickyFooter** | Keeps the row footer at the bottom of the table when scrolling.boolean | false |  |
| **stickyHeader** | Keeps the row header at the top of the table when scrolling.boolean | false |  |
| **title** | Title of the table in the header.string |  |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **columnSizing** | *(deprecated) No longer has any effect. The `columnSizing` setting has been moved to the column meta to allow for better control over sizing.*
*See "Column Pinning and Sizing" in [the docs](https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-table--docs) for more info.*"auto""fixed" |  | autofixed |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **sortingStateChange** | Emitted on `sortingState` change.EventEmitter<SortingState> | - |  |
| **columnFiltersStateChange** | Emitted on `columnFiltersState` change.EventEmitter<ColumnFiltersState> | - |  |
| **paginationStateChange** | Emitted on `paginationState` change.EventEmitter<PaginationState> | - |  |
| **rowSelectionStateChange** | Emitted on `rowSelectionState` change.EventEmitter<RowSelectionState> | - |  |
| **expandedStateChange** | Emitted on `expandedState` change.EventEmitter<ExpandedState> | - |  |
| **columnSizingStateChange** | Emitted on `columnSizingState` change.EventEmitter<ColumnSizingState> | - |  |
| **columnOrderStateChange** | Emitted on `columnOrderState` change.EventEmitter<ColumnOrderState> | - |  |
| **columnVisibilityStateChange** | Emitted on `columnVisibilityState` change.EventEmitter<VisibilityState> | - |  |
| **rowSpanStateChange** | Emitted on `rowSpanState` change.EventEmitter<RowSpanState> | - |  |
| **Hide column meta itemscolumn meta** | Hide column meta items |  |  |
| **filterVariant** | The type of filter input to show for this column."text""select""multiSelect""date""dateRange" | - | - |
| **filterOptions** | If provided, replaces the array of options in the select dropdown of a `select` or `multiSelect` filter. By default, the options are unique values derived from the data.{ label: string; value: string }[] | - | - |
| **onFilter** | Allows custom filtering logic based on the input from the filter inputs. If this function is not provided, or if the value returned from `onFilter()` is `true`, the default filtering behaviour is used.(filterValue: string | DropdownValue[] | SingleDate | SelectDateRange | null, column: Column<TData, unknown>) => boolean | - | - |
| **showFilterSearch** | Shows the search input for `select` and `multiSelect` filters.boolean | - | - |
| **onFilterSearch** | Function for performing additional actions when the search input value in `select` and `multiSelect` filters changes.(filterValue: string, column: Column<TData, unknown>) => void | - | - |
| **dateFormat** | Date format for `date` and `dateRange` filters.string | - | - |
| **rendered** | Allows some logic to determine if the `<td>` cell should be rendered or not.(cell: Cell<TData, unknown>) => boolean | - | - |
| **colSpan** | Allows the `colspan` of a cell to be changed.(cell: Cell<TData, unknown>) => number | - | - |
| **enableRowSpan** | Allows cells of the same value to be merged across rows with the `rowspan` attribute.boolean | - | - |
| **align** | Sets the text alignment of cell contents to `left` or `right`. Defaults to `left`."left""right" | - | - |
| **verticalAlign** | Sets vertical alignment of cell contents to `top`, `middle`, or `bottom`."top""middle""bottom" | - | - |
| **columnSizing** | If set to `fixed`, the column width can be set to a fixed value (in px) through the `size` property in the column definition. Defaults to `auto` (the browser determines the width). Only columns with `columnSizing: "fixed"` can be resized when `enableColumnResizing` is set to true."auto""fixed" | - | - |
| **pinPosition** | Pins the column to the `left` or `right` side of the table.ColumnPinningPosition | - | - |
| **backgroundColor** | Allows individual cells to be coloured differently. Colour values must be CSS variable names that come from design tokens.(cell: Cell<TData, unknown>) => string | null | - | - |
| **borders** | Adds borders to the left and/or right of the cell.(cell: Cell<TData, unknown>) => CellBorders | - | - |
| **headerBorders** | Adds borders to the left and/or right of the header.(header: Header<TData, unknown>) => CellBorders | - | - |
| **disabled** | Allows individual cells to be styled as disabled.(cell: Cell<TData, unknown>) => boolean | - | - |
| **clickable** | Allows individual cells to be clickable.(cell: Cell<TData, unknown>) => boolean | - | - |
| **onCellClick** | Function for performing actions when clicking on a cell. Requires clickable to be resolved to `true`.(cell: Cell<TData, unknown>) => void | - | - |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | Slot for rendering content in `<tbody>`.HTMLElement | - |  |
| **headerStartSlot** | Slot for rendering content in the left area of the table header.HTMLElement | - |  |
| **headerEndSlot** | Slot for rendering content in the right area of the table header.HTMLElement | - |  |
| **headerBottomSlot** | Slot for rendering content in the bottom area of the table header.HTMLElement | - |  |
| **theadTopSlot** | Slot for rendering content before all `<tr>` in `<thead>`.HTMLElement | - |  |
| **theadSlot** | Slot for rendering content in `<thead>`.HTMLElement | - |  |
| **theadBottomSlot** | Slot for rendering content after all `<tr>` in `<thead>`.HTMLElement | - |  |
| **tfootTopSlot** | Slot for rendering content before all `<tr>` in `<tfoot>`.HTMLElement | - |  |
| **tfootSlot** | Slot for rendering content in `<tfoot>`.HTMLElement | - |  |
| **tfootBottomSlot** | Slot for rendering content after all `<tr>` in `<tfoot>`.HTMLElement | - |  |
| **footerSlot** | Slot for rendering content in the table footer.HTMLElement | - |  |
| **emptyStateSlot** | Slot for customising the empty state.HTMLElement | - |  |
| **Hide templates itemstemplates** | Hide templates items |  |  |
| **subComponentTemplate** | Template for inserting content after each row.HTMLElement | - |  |