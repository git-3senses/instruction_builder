# Card Components

> Container component with header, footer, and expandable functionality

---

## Card Component

Main container component for grouping related content.

### Import

```typescript
import {
  DbsCardComponent,
  DbsCardHeaderComponent,
  DbsCardFooterComponent
} from '@dbs-angular/core';

@Component({
  standalone: true,
  imports: [DbsCardComponent, DbsCardHeaderComponent, DbsCardFooterComponent],
})
```

### Basic Usage

```html
<!-- With Header -->
<dbs-card>
  <dbs-card-header
    headerSlot
    [title]="'Card Title'"
    [subtitle]="'Card subtitle'">
  </dbs-card-header>
  <div>Card content goes here</div>
</dbs-card>

<!-- No Header -->
<dbs-card>
  <div>Card content</div>
</dbs-card>
```

### Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **title** | `string` | `""` | Card title |
| **subtitle** | `string` | `""` | Card subtitle |
| **expandable** | `boolean` | `false` | Enable expand/collapse |
| **opened** | `boolean` | `true` | Opened state |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| **onHeaderClick** | `EventEmitter` | Header clicked |
| **openedChange** | `EventEmitter<boolean>` | Opened state changed |

### Slots

| Slot | Description |
|------|-------------|
| **(default)** | Main content |
| **headerSlot** | Card header |
| **headerTitleSlot** | Custom title/badge |
| **headerEndSlot** | Header buttons |
| **footerSlot** | Card footer |
| **tableSlot** | 0-padding content |

---

## Examples

### Expandable Card

```html
<dbs-card
  [expandable]="true"
  [(opened)]="isOpen">
  <dbs-card-header
    headerSlot
    [title]="'Expandable Card'"
    [subtitle]="'Click to expand/collapse'"
    [expandable]="true"
    [(opened)]="isOpen">
  </dbs-card-header>
  Card content
</dbs-card>
```

### With Badge & Button

```html
<dbs-card>
  <dbs-card-header
    headerSlot
    [title]="'Card Title'"
    [subtitle]="'Subtitle'">
    <dbs-badge titleSlot [priority]="'high'">12</dbs-badge>
    <dbs-button endSlot [size]="'sm'" [variant]="'plain'">
      Edit
      <svg-icon endSlot [iconName]="'pencil'"></svg-icon>
    </dbs-button>
  </dbs-card-header>
  Content
</dbs-card>
```

### With Footer

```html
<dbs-card>
  <dbs-card-header
    headerSlot
    [title]="'Card with Footer'">
  </dbs-card-header>

  Card content

  <dbs-card-footer
    footerSlot
    [clickable]="true"
    (click)="showAll()">
    Show all
  </dbs-card-footer>
</dbs-card>
```

### Footer with Buttons

```html
<dbs-card>
  <dbs-card-header headerSlot [title]="'Actions'"></dbs-card-header>
  Content
  <dbs-card-footer footerSlot>
    <dbs-button startSlot [variant]="'plain'" [size]="'xs'">
      Cancel
    </dbs-button>
    <dbs-button endSlot [variant]="'plain'" [size]="'xs'">
      Save
    </dbs-button>
  </dbs-card-footer>
</dbs-card>
```

### Loading Footer

```html
<dbs-card-footer
  footerSlot
  [clickable]="true"
  [loading]="true">
  Loading...
</dbs-card-footer>
```

### Table Content (No Padding)

```html
<dbs-card>
  <dbs-card-header headerSlot [title]="'Data Table'"></dbs-card-header>
  <dbs-table tableSlot [data]="tableData"></dbs-table>
</dbs-card>
```

---

## Card Header Component

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **title** | `string` | `""` | Title |
| **subtitle** | `string` | `""` | Subtitle |
| **expandable** | `boolean` | `false` | Clickable header |
| **opened** | `boolean` | `true` | Opened state |

### Slots

- **titleSlot:** Badge or custom title
- **endSlot:** Header buttons

### Example

```html
<dbs-card-header
  [title]="'Title'"
  [subtitle]="'Subtitle'"
  [expandable]="true"
  [(opened)]="isOpen">
  <dbs-badge titleSlot>New</dbs-badge>
  <dbs-button endSlot [variant]="'plain'">Edit</dbs-button>
</dbs-card-header>
```

---

## Card Footer Component

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **clickable** | `boolean` | `false` | Entire footer clickable |
| **loading** | `boolean` | `false` | Show loading state |

### Slots

- **(default):** Clickable footer content
- **startSlot:** Left button
- **endSlot:** Right button

### Examples

```html
<!-- Clickable -->
<dbs-card-footer
  [clickable]="true"
  (click)="handleClick()">
  Show all items
</dbs-card-footer>

<!-- Buttons -->
<dbs-card-footer>
  <dbs-button startSlot>Cancel</dbs-button>
  <dbs-button endSlot>Save</dbs-button>
</dbs-card-footer>
```

---

## Complete Example

```typescript
export class DashboardComponent {
  isExpanded = true;
  isLoading = false;

  showAllTransactions() {
    console.log('Show all');
  }
}
```

```html
<dbs-card
  [expandable]="true"
  [(opened)]="isExpanded">
  <!-- Header -->
  <dbs-card-header
    headerSlot
    [title]="'Recent Transactions'"
    [subtitle]="'Last 7 days'"
    [expandable]="true"
    [(opened)]="isExpanded">
    <dbs-badge titleSlot [priority]="'high'">5</dbs-badge>
    <dbs-button
      endSlot
      [size]="'sm'"
      [variant]="'plain'">
      Filter
      <svg-icon endSlot [iconName]="'filter'"></svg-icon>
    </dbs-button>
  </dbs-card-header>

  <!-- Content -->
  <div *ngIf="isExpanded">
    <ul>
      <li>Transaction 1</li>
      <li>Transaction 2</li>
      <li>Transaction 3</li>
    </ul>
  </div>

  <!-- Footer -->
  <dbs-card-footer
    footerSlot
    [clickable]="true"
    [loading]="isLoading"
    (click)="showAllTransactions()">
    View all transactions
  </dbs-card-footer>
</dbs-card>
```

---

## CSS & Styling

### Design Tokens Used

```css
/* Colors */
--color-border                    /* Card border */
--color-background-level-0        /* Card background */
--color-background-level-1        /* Hover background */
--color-text-primary              /* Primary text */
--color-text-secondary            /* Secondary text */
--color-text-success              /* Success badge */
--color-text-error                /* Error badge */

/* Spacing */
--spacing-md                      /* 16px - Card padding */
--spacing-lg                      /* 24px - Card gap */
--spacing-xl                      /* 32px - Section spacing */

/* Typography */
--font-size-heading-sm            /* 18px - Card title */
--font-size-body-md               /* 16px - Body text */
--font-size-body-sm               /* 14px - Small text */
```

### Component Styling

```css
/* Card container */
dbs-card {
  display: block;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
}

/* Card grid layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Card list layout */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

### Layout Patterns

```css
/* Two-column card layout */
.card-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Three-column card layout */
.card-three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Responsive card grid */
.responsive-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
```

---

## Complete Example with Styling

### TypeScript (dashboard-cards.component.ts)

```typescript
import { Component } from '@angular/core';
import {
  DbsCardComponent,
  DbsCardHeaderComponent,
  DbsCardFooterComponent,
  DbsBadgeComponent
} from '@dbs-angular/core';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [
    DbsCardComponent,
    DbsCardHeaderComponent,
    DbsCardFooterComponent,
    DbsBadgeComponent
  ],
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent {
  isLoadingTransactions = false;
  isLoadingActivity = false;

  accountBalance = 25430.50;
  recentTransactions = [
    { date: '2025-01-15', description: 'Grocery Store', amount: -125.50 },
    { date: '2025-01-14', description: 'Salary Deposit', amount: 5000.00 },
    { date: '2025-01-13', description: 'Online Shopping', amount: -89.99 }
  ];

  showAllTransactions() {
    this.isLoadingTransactions = true;
    setTimeout(() => {
      this.isLoadingTransactions = false;
      console.log('Showing all transactions');
    }, 1000);
  }

  showAllActivity() {
    this.isLoadingActivity = true;
    setTimeout(() => {
      this.isLoadingActivity = false;
      console.log('Showing all activity');
    }, 1000);
  }

  viewAccountDetails() {
    console.log('Viewing account details');
  }
}
```

### HTML (dashboard-cards.component.html)

```html
<div class="dashboard-container">
  <h1>Dashboard</h1>

  <!-- Card Grid Layout -->
  <div class="card-grid">
    <!-- Account Balance Card -->
    <dbs-card>
      <dbs-card-header headerSlot [title]="'Account Balance'">
        <dbs-badge titleSlot [variant]="'success'">Active</dbs-badge>
      </dbs-card-header>

      <div class="card-content">
        <div class="balance-amount">SGD {{accountBalance | number:'1.2-2'}}</div>
        <p class="balance-subtitle">Available Balance</p>
      </div>

      <dbs-card-footer
        footerSlot
        [clickable]="true"
        (click)="viewAccountDetails()">
        View Details
      </dbs-card-footer>
    </dbs-card>

    <!-- Recent Transactions Card (Expandable) -->
    <dbs-card [expandable]="true" [opened]="true">
      <dbs-card-header headerSlot [title]="'Recent Transactions'">
        <dbs-badge titleSlot [variant]="'info'">{{recentTransactions.length}}</dbs-badge>
      </dbs-card-header>

      <div class="card-content">
        <ul class="transaction-list">
          <li *ngFor="let transaction of recentTransactions" class="transaction-item">
            <div class="transaction-info">
              <span class="transaction-desc">{{transaction.description}}</span>
              <span class="transaction-date">{{transaction.date}}</span>
            </div>
            <span
              class="transaction-amount"
              [class.positive]="transaction.amount > 0"
              [class.negative]="transaction.amount < 0">
              {{transaction.amount > 0 ? '+' : ''}}{{transaction.amount | number:'1.2-2'}}
            </span>
          </li>
        </ul>
      </div>

      <dbs-card-footer
        footerSlot
        [clickable]="true"
        [loading]="isLoadingTransactions"
        (click)="showAllTransactions()">
        View all transactions
      </dbs-card-footer>
    </dbs-card>

    <!-- Quick Actions Card -->
    <dbs-card>
      <dbs-card-header headerSlot [title]="'Quick Actions'"></dbs-card-header>

      <div class="card-content">
        <div class="action-buttons">
          <button class="action-btn">
            <svg-icon iconName="send"></svg-icon>
            <span>Transfer</span>
          </button>
          <button class="action-btn">
            <svg-icon iconName="bill"></svg-icon>
            <span>Pay Bills</span>
          </button>
          <button class="action-btn">
            <svg-icon iconName="card"></svg-icon>
            <span>Cards</span>
          </button>
        </div>
      </div>
    </dbs-card>
  </div>

  <!-- Full-width Card -->
  <dbs-card style="margin-top: 24px;">
    <dbs-card-header headerSlot [title]="'Activity Summary'"></dbs-card-header>

    <div class="card-content">
      <p>Your account activity for the past 30 days.</p>
    </div>

    <dbs-card-footer
      footerSlot
      [clickable]="true"
      [loading]="isLoadingActivity"
      (click)="showAllActivity()">
      View Full Report
    </dbs-card-footer>
  </dbs-card>
</div>
```

### CSS (dashboard-cards.component.css)

```css
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

.dashboard-container h1 {
  margin: 0 0 24px 0;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* Card Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

/* Card Content Styling */
.card-content {
  padding: 16px;
}

/* Account Balance Styling */
.balance-amount {
  font-size: 32px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.balance-subtitle {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Transaction List */
.transaction-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--color-background-level-1);
  border-radius: 4px;
}

.transaction-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.transaction-desc {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.transaction-date {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.transaction-amount {
  font-size: 16px;
  font-weight: 600;
}

.transaction-amount.positive {
  color: var(--color-text-success);
}

.transaction-amount.negative {
  color: var(--color-text-error);
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 12px;
}

.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: var(--color-background-level-1);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: var(--color-background-level-0);
}

.action-btn svg-icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-primary);
}

.action-btn span {
  font-size: 13px;
  color: var(--color-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 24px 16px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }
}
```

---

## Styling Best Practices

### Card Spacing

```css
/* Grid layout with 24px gaps */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Vertical list with 16px gaps */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

### Card Width Control

```css
/* Full width */
dbs-card {
  width: 100%;
}

/* Max width constraint */
dbs-card {
  max-width: 600px;
}

/* Fixed width */
dbs-card {
  width: 400px;
}
```

### Two-Column Layout

```css
.card-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 768px) {
  .card-two-column {
    grid-template-columns: 1fr;
  }
}
```

### Card Content Padding

```css
/* Standard content padding */
.card-content {
  padding: 16px;
}

/* Larger content padding */
.card-content-large {
  padding: 24px;
}

/* No padding (for tables) */
.card-content-flush {
  padding: 0;
}
```

---

## Behavior Notes

- **Expandable cards** toggle content visibility when header clicked
- **Header badges** display in titleSlot
- **Footer clickable** mode makes entire footer a button
- **Loading state** shows spinner in clickable footer
- **tableSlot** removes padding for full-width tables

---

**Component File:** `card.md`
**Priority:** 🔴 CRITICAL
**Last Updated:** 2025-10-27
