# Step-by-Step Prompts: Building SFX Hedging Framework with DBS Angular Library

> **Purpose:** Build an Angular application for SFX Hedging Framework using DBS Angular component library
> **Documentation Location:** `dbs-library-docs/`

---

## PHASE 1: PROJECT SETUP & FOUNDATION

### Prompt 1: Create New Angular Project

```
I want to create a new Angular 19 standalone application called "sfx-hedging-framework".

Please:
1. Generate the Angular CLI command to create the project with:
   - Standalone components (no NgModules)
   - SCSS for styling
   - SSR disabled
   - Routing enabled

2. After project creation, read the documentation at:
   - dbs-library-docs/01-FOUNDATION.md

3. Install DBS Angular Library following the foundation guide:
   - @dbs-angular/core@19
   - @dbs/design-tokens
   - @dls/icons
   - @tanstack/angular-table
   - @tanstack/match-sorter-utils
   - d3
   - moment

4. Configure angular.json with DBS theme setup (DBS Light theme)

5. Update styles.scss with:
   - DBS design tokens
   - Typography imports
   - Global resets

Please execute these steps and confirm when complete.
```

**Expected Output:** Angular project created with DBS library installed and configured.

---

### Prompt 2: Setup Project Structure

```
Now let's set up the project structure for the SFX Hedging Framework.

Please create the following folder structure in src/app/:

src/app/
├── core/
│   ├── models/           # TypeScript interfaces
│   ├── services/         # API services
│   └── guards/           # Route guards
├── shared/
│   ├── components/       # Reusable components
│   └── pipes/            # Custom pipes
├── features/
│   ├── gl-be-codes/      # GL BE Codes feature
│   ├── event-builder/    # Event Builder feature
│   └── instruction-builder/  # Instruction Builder feature
└── layout/
    ├── header/           # App header
    └── sidebar/          # Secondary navigation

Also create:
- src/app/core/models/rule.model.ts (for table data)
- src/app/core/models/gl-be-code.model.ts (for GL BE codes data)

Generate the TypeScript interfaces based on this mock data structure:

Rule Data:
- id, ruleId, businessEvent, hedgeMethod, currencyType
- hedgingInstrument, navType, status, updatedBy, lastUpdated
- murexBookings[] (array with code and glBeCodes[])

GL BE Code Data:
- id, beCode, description, eventType, businessUnit
- ledger, coaIndicator, pcCode, glAccount, glProduct
- effectiveStartDate, accountBaseIndicator, status

Create the folder structure and model files.
```

**Expected Output:** Project folder structure created with TypeScript interface models.

---

## PHASE 2: HEADER & NAVIGATION

### Prompt 3: Create Application Header

```
I want to create the application header using DBS components.

Please read: dbs-library-docs/components/button.md

Create src/app/layout/header/header.component.ts with:

Requirements:
1. Height: 56px with border-bottom
2. DBS Logo on the left (use svg-icon component with "dbs-logo" icon)
3. App title: "SFX Hedging Framework" (use heading-xs typography)
4. Right side actions:
   - Notifications icon button (bell icon)
   - User avatar with dropdown menu
5. Background: white with proper spacing (padding: 0 24px)
6. Use DBS design tokens for all colors and spacing

Please create:
- header.component.ts
- header.component.html
- header.component.scss

Use DBS button and icon-button components from the documentation.
```

**Expected Output:** Header component created with DBS Logo, title, and action buttons.

---

### Prompt 4: Create Secondary Navigation Sidebar

```
Now create the secondary navigation sidebar with collapsible functionality.

Please read: dbs-library-docs/components/nav-side-secondary.md

Create src/app/layout/sidebar/sidebar.component.ts with:

Requirements:
1. Collapsible sidebar (240px expanded, 40px collapsed)
2. Menu items (in order):
   - SFX Hedging Framework
   - Currency
   - Overlay
   - Entity
   - Picklist
   - Portfolio
   - Product
   - Murex Booking Codes
   - Instruction Builder
   - GL BE Codes
   - Event Builder
   - Adjustment

3. Features:
   - Active item highlight (light blue background: #e5f4ff)
   - Collapse/Expand toggle button at bottom
   - Smooth transitions
   - Height: calc(100vh - 56px) (below header)

4. Component should:
   - Accept @Input() activeItem: string
   - Accept @Input() isExpanded: boolean = true
   - Emit @Output() itemSelected: EventEmitter<string>
   - Emit @Output() toggleExpanded: EventEmitter<boolean>

5. Use DBS navigation components and design tokens
6. Add hover states using var(--color-background-level-1)

Please create:
- sidebar.component.ts
- sidebar.component.html
- sidebar.component.scss
```

**Expected Output:** Secondary navigation sidebar with collapsible functionality and menu items.

---

### Prompt 5: Create Main Layout Component

```
Create the main application layout that combines header and sidebar.

Create src/app/layout/main-layout/main-layout.component.ts with:

Requirements:
1. Structure:
   - Header at top (fixed, 56px height)
   - Sidebar on left (collapsible)
   - Main content area (router-outlet)

2. Layout CSS:
   - Use CSS Grid or Flexbox
   - Main content should be scrollable
   - Sidebar should be fixed height
   - Responsive considerations

3. Component logic:
   - Track sidebar collapse state
   - Track active navigation item
   - Handle navigation routing
   - Pass state to child components

4. Router outlet in main content area with:
   - Padding: 24px
   - Background: var(--color-background-level-0)

Please create:
- main-layout.component.ts
- main-layout.component.html
- main-layout.component.scss

Also update app.routes.ts to use this layout component as the base route.
```

**Expected Output:** Main layout component combining header, sidebar, and content area.

---

## PHASE 3: GL BE CODES PAGE

### Prompt 6: Setup GL BE Codes Feature Module

```
Let's start building the GL BE Codes page feature.

Please read:
- dbs-library-docs/components/table.md
- dbs-library-docs/components/button.md
- dbs-library-docs/components/pagination.md

Create the GL BE Codes feature with this structure:

src/app/features/gl-be-codes/
├── gl-be-codes.component.ts           # Main page component
├── components/
│   ├── gl-be-codes-table/             # Table component
│   ├── gl-be-codes-modal/             # View/Edit modal
│   └── gl-be-codes-upload-drawer/     # Upload drawer
└── services/
    └── gl-be-codes.service.ts         # Data service

First, create the service:
- gl-be-codes.service.ts with:
  - Mock data based on GL BE Code model
  - Methods: getAll(), getById(), create(), update(), delete()
  - Observable-based API (use BehaviorSubject for state)

Create at least 10-15 mock GL BE Code records with varied data.
```

**Expected Output:** GL BE Codes feature structure with service and mock data.

---

### Prompt 7: Create GL BE Codes Page Header

```
Create the GL BE Codes page header section.

Please read: dbs-library-docs/components/search.md

Create src/app/features/gl-be-codes/gl-be-codes.component.ts:

Requirements:
1. Page Header Section:
   - Breadcrumb: Home > GL BE Codes
   - Page title: "GL BE Codes" (heading-lg)
   - Description: "Manage General Ledger Business Event Codes"

2. Action Bar (sticky below header):
   - Left: Search bar (dbs-search component)
     - Placeholder: "Search by BE Code or Description..."
     - Full-text search across beCode and description fields

   - Right: Two buttons:
     - "Upload" button (secondary, with upload icon)
     - "Add New" button (primary, with plus icon)

3. Styling:
   - Action bar background: white
   - Padding: 16px 24px
   - Border-bottom: 1px solid var(--color-border)
   - Sticky position: top
   - Z-index: 10

4. Component should:
   - Inject GLBeCodesService
   - Handle search with debounce (300ms)
   - Emit events for button clicks

Please create the page component with header section.
```

**Expected Output:** GL BE Codes page with header, search, and action buttons.

---

### Prompt 8: Create GL BE Codes Table Component

```
Now create the main table component for GL BE Codes.

Please read:
- dbs-library-docs/components/table.md
- dbs-library-docs/components/dropdown.md

Create src/app/features/gl-be-codes/components/gl-be-codes-table/gl-be-codes-table.component.ts:

Requirements:
1. Table with horizontally scrollable columns
2. Fixed action column on the right (not scrollable)
3. Columns (in order):
   - BE Code (sortable, filterable)
   - Description (sortable, filterable)
   - Event Type (filterable dropdown: DR/CR/ALL)
   - Business Unit (filterable dropdown)
   - Ledger (filterable dropdown)
   - COA Indicator (Y/N filter)
   - PC Code
   - GL Account
   - GL Product
   - Effective Start Date (date filter with range)
   - Account Base Indicator
   - Status (Active/Inactive badge with filter)
   - Actions (fixed right column - 3 dot menu)

4. Table Features:
   - Sorting on columns (BE Code, Description, Date)
   - Column filters (dropdowns for categorical, date range for dates)
   - Row selection (checkbox)
   - Horizontal scroll for columns (Actions column stays fixed)
   - Row hover effect
   - Dense spacing

5. Actions Menu (3-dot dropdown):
   - View Details
   - Edit
   - Duplicate
   - Delete

6. Use TanStack Table for data management
7. Use DBS table component with custom styling
8. Status badge colors:
   - Active: success (green)
   - Inactive: default (gray)

Please create the table component with all features.
```

**Expected Output:** Fully functional table with sorting, filtering, and actions.

---

### Prompt 9: Add Table Pagination

```
Add pagination to the GL BE Codes table.

Please read: dbs-library-docs/components/pagination.md

Update the GL BE Codes page to include:

Requirements:
1. Pagination component at bottom of table
2. Features:
   - Current page display
   - Total items count
   - Items per page selector (10, 20, 50, 100)
   - Previous/Next buttons
   - Page number buttons (show max 5 pages)
   - Jump to page input

3. Pagination bar styling:
   - Background: white
   - Padding: 16px 24px
   - Border-top: 1px solid var(--color-border)
   - Sticky bottom (optional)

4. Display text:
   "Showing {start}-{end} of {total} entries"

5. Integration:
   - Connect to table data source
   - Update URL query params with page number
   - Preserve filters and sorting across pages

Please update the table component and page to include pagination.
```

**Expected Output:** Table with fully functional pagination.

---

### Prompt 10: Create GL BE Code View/Edit Modal

```
Create modal for viewing and editing GL BE Code details.

Please read: dbs-library-docs/components/modal.md and input.md

Create src/app/features/gl-be-codes/components/gl-be-codes-modal/gl-be-codes-modal.component.ts:

Requirements:
1. Modal with two modes: View and Edit
2. Modal Header:
   - View mode: "GL BE Code Details"
   - Edit mode: "Edit GL BE Code"
   - Close button (X)

3. Modal Body (2-column form layout):
   Left Column:
   - BE Code (dbs-input, disabled in view mode)
   - Event Type (dbs-select: DR/CR)
   - Ledger (dbs-input)
   - PC Code (dbs-input)
   - GL Product (dbs-input)
   - Account Base Indicator (dbs-select)

   Right Column:
   - Description (dbs-textarea, 3 rows)
   - Business Unit (dbs-select: DBU/IBG/etc)
   - COA Indicator (dbs-switch: Y/N)
   - GL Account (dbs-input with validation)
   - Effective Start Date (dbs-calendar-input)
   - Status (dbs-switch: Active/Inactive)

4. Modal Footer:
   View Mode:
   - Edit button (primary)
   - Close button (secondary)

   Edit Mode:
   - Save Changes button (primary)
   - Cancel button (secondary)

5. Features:
   - Form validation (required fields marked with *)
   - Reactive forms with FormGroup
   - Success/error snackbar notifications
   - Disable save button if form invalid

Please create the modal component with both modes.
```

**Expected Output:** Modal for viewing/editing GL BE Codes with form validation.

---

### Prompt 11: Create Upload Drawer

```
Create a drawer component for bulk upload functionality.

Please read:
- dbs-library-docs/components/drawer.md
- dbs-library-docs/components/file-upload.md

Create src/app/features/gl-be-codes/components/gl-be-codes-upload-drawer/upload-drawer.component.ts:

Requirements:
1. Drawer opens from right side (400px width)
2. Drawer Header:
   - Title: "Upload GL BE Codes"
   - Subtitle: "Upload CSV or Excel file"
   - Close button

3. Drawer Body:
   - File upload area (dbs-file-upload):
     - Drag and drop zone
     - File type restrictions: .csv, .xlsx
     - Max file size: 10MB
     - Upload progress indicator

   - Instructions section:
     - "Download Template" link
     - File format guidelines
     - Required columns list

   - Upload status:
     - Success count
     - Error count
     - Error details list (if any)

4. Drawer Footer:
   - Cancel button (secondary)
   - Upload button (primary, disabled until file selected)

5. Features:
   - File validation
   - Progress overlay during upload
   - Success/error snackbar
   - Parse CSV/Excel preview (first 5 rows)

Please create the upload drawer component.
```

**Expected Output:** Upload drawer with file upload and validation.

---

## PHASE 4: EVENT BUILDER PAGE

### Prompt 12: Create Event Builder Page

```
Create the Event Builder page (similar to GL BE Codes but with different data).

Please read the documentation for components you've already used.

Create src/app/features/event-builder/event-builder.component.ts:

Requirements:
1. Page structure similar to GL BE Codes:
   - Breadcrumb
   - Page title: "Event Builder"
   - Search bar
   - "Upload" and "Add New" buttons

2. Table with columns:
   - Event ID (sortable)
   - Event Type (filterable)
   - Business Event (filterable)
   - Trigger Condition
   - Status (Active/Inactive)
   - Created Date (date filter)
   - Created By
   - Actions

3. Use same patterns as GL BE Codes:
   - Sortable/filterable table
   - Pagination
   - View/Edit modal
   - Upload drawer
   - Actions menu (View, Edit, Duplicate, Delete)

4. Event Builder specific features:
   - Event Type badges with colors:
     - Manual: blue
     - Automated: green
     - Scheduled: orange

Please create the Event Builder feature with all components.
```

**Expected Output:** Complete Event Builder page with table and modals.

---

## PHASE 5: INSTRUCTION BUILDER PAGE

### Prompt 13: Create Instruction Builder Page with Rules Table

```
Create the Instruction Builder page - the most complex feature.

Please review all table and form documentation.

Create src/app/features/instruction-builder/instruction-builder.component.ts:

This page has a different structure:

Requirements:
1. Page Header:
   - Title: "Instruction Builder"
   - Description: "Configure hedging rules and Murex booking codes"
   - Add Rule button (primary)

2. Main Table - Hedging Rules:
   Columns:
   - Rule ID (sortable)
   - Business Event (filterable: Inception, Maturity, etc)
   - Hedge Method (filterable: COH, NAH, etc)
   - Currency Type (filterable: Restricted/Non-Restricted)
   - Hedging Instrument (filterable: FX Spot, FX Forward, etc)
   - NAV Type (filterable: COI, RE, etc)
   - Status (Active/Inactive with toggle)
   - Updated By
   - Last Updated (date filter)
   - Actions (View, Edit, Delete)

3. Expandable Row Feature:
   When row is clicked, expand to show nested table:
   "Murex Booking Codes" child table with:
   - Booking Code
   - GL BE Codes (expandable chips list)
   - Actions (Edit, Delete)

4. Special Features:
   - Hierarchical data display (parent-child rows)
   - Expand/collapse animation
   - Nested table has different background
   - Inline editing for nested table

Please create the Instruction Builder page with expandable rows.
```

**Expected Output:** Instruction Builder page with hierarchical expandable table.

---

### Prompt 14: Create Add/Edit Rule Modal

```
Create the complex modal for adding/editing hedging rules.

Please read: dbs-library-docs/components/modal.md, select.md, checkbox.md

Create src/app/features/instruction-builder/components/rule-modal/rule-modal.component.ts:

Requirements:
1. Large Modal (800px width)
2. Multi-step form or tabs:
   - Step 1: Rule Details
   - Step 2: Murex Booking Codes
   - Step 3: Review

3. Step 1 - Rule Details (2-column layout):
   Left:
   - Rule ID (auto-generated, disabled)
   - Business Event (dbs-select: Inception, Maturity, etc)
   - Hedge Method (dbs-select: COH, NAH, etc)
   - Currency Type (dbs-radio: Restricted/Non-Restricted)

   Right:
   - Hedging Instrument (dbs-select: FX Spot, FX Forward, etc)
   - NAV Type (dbs-select: COI, RE, etc)
   - Status (dbs-switch: Active/Inactive)
   - Description (dbs-textarea)

4. Step 2 - Murex Booking Codes:
   - Add Booking Code button
   - Dynamic form array:
     - Booking Code (dbs-input)
     - GL BE Codes (dbs-chip-list with search)
     - Remove button for each row
   - Minimum 1 booking code required

5. Step 3 - Review:
   - Summary of all entered data
   - Edit buttons for each section

6. Modal Footer:
   - Previous/Next buttons (navigation)
   - Cancel button
   - Save button (final step only)

Please create this multi-step rule modal component.
```

**Expected Output:** Complex multi-step modal for rule configuration.

---

## PHASE 6: POLISH & FEATURES

### Prompt 15: Add Notifications & Snackbars

```
Add notification system throughout the application.

Please read:
- dbs-library-docs/components/snackbar.md
- dbs-library-docs/components/snackbar-container.md

Create src/app/core/services/notification.service.ts:

Requirements:
1. Centralized notification service with:
   - showSuccess(message: string, duration?: number)
   - showError(message: string, duration?: number)
   - showWarning(message: string, duration?: number)
   - showInfo(message: string, duration?: number)

2. Use dbs-snackbar-container in app.component

3. Add notifications for:
   - CRUD operations success/failure
   - Form validation errors
   - Upload success/failure
   - Network errors
   - Session timeout warnings

4. Snackbar features:
   - Auto-dismiss after duration
   - Action buttons (Undo for delete operations)
   - Stack multiple notifications
   - Position: bottom-center

Please create notification service and integrate throughout app.
```

**Expected Output:** Global notification system with snackbars.

---

### Prompt 16: Add Loading States & Loaders

```
Add loading indicators throughout the application.

Please read: dbs-library-docs/components/loader.md and progress-bar.md

Requirements:
1. Create src/app/shared/components/loading-overlay/loading-overlay.component.ts:
   - Full-screen overlay with dbs-loader
   - Semi-transparent background
   - "Loading..." text
   - Optional progress bar for uploads

2. Add loading states for:
   - Initial page data load
   - Table data fetch
   - Form submissions
   - File uploads (with progress)
   - Delete confirmations

3. Loading UX patterns:
   - Skeleton loaders for tables (optional)
   - Disabled state for buttons during loading
   - Progress bar for file uploads
   - Spinner for quick operations

4. Global loading service:
   - src/app/core/services/loading.service.ts
   - show() and hide() methods
   - Track multiple concurrent operations

Please create loading components and integrate throughout app.
```

**Expected Output:** Loading states and indicators across application.

---

### Prompt 17: Add Confirmation Dialogs

```
Add confirmation dialogs for destructive actions.

Please read: dbs-library-docs/components/focus-overlay.md

Create src/app/shared/components/confirmation-dialog/confirmation-dialog.component.ts:

Requirements:
1. Reusable confirmation dialog using dbs-focus-overlay
2. Props:
   - title: string
   - message: string
   - confirmText: string (default: "Confirm")
   - cancelText: string (default: "Cancel")
   - variant: 'danger' | 'warning' | 'info'

3. Use cases:
   - Delete operations (danger variant)
   - Discard unsaved changes (warning)
   - Bulk actions confirmation (info)

4. Features:
   - Non-dismissible (must choose action)
   - Icon based on variant
   - Async confirm action (show loading)

5. Integration points:
   - Delete rule confirmation
   - Delete GL BE code confirmation
   - Discard modal changes
   - Bulk delete confirmation

Please create confirmation dialog and integrate for delete operations.
```

**Expected Output:** Confirmation dialogs for destructive actions.

---

### Prompt 18: Add Filter Chips & Active Filters Display

```
Add visual indicators for active filters on tables.

Please read: dbs-library-docs/components/chip.md and chip-list.md

Requirements:
1. Create filter chips component:
   - Show active filters as chips above table
   - Dismissible chips (X button)
   - Clear all filters button

2. Chip display format:
   - "Column: Value" (e.g., "Status: Active")
   - "Date: Start - End" for date ranges
   - Different colors per filter type

3. Features:
   - Click chip to edit filter
   - Remove individual filter
   - Clear all filters button
   - Animate chip add/remove

4. Integration:
   - GL BE Codes table
   - Event Builder table
   - Instruction Builder table

5. State management:
   - Track active filters in service
   - Update URL query params
   - Persist filters in session storage

Please add filter chips to all table pages.
```

**Expected Output:** Visual filter chips with clear functionality.

---

### Prompt 19: Add Responsive Design & Mobile Optimization

```
Add responsive design for mobile and tablet views.

Requirements:
1. Responsive breakpoints:
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

2. Mobile adaptations:
   - Collapsible sidebar by default
   - Hamburger menu for navigation
   - Stacked form layouts (single column)
   - Horizontal scrollable tables with sticky columns
   - Larger touch targets (min 44px)
   - Bottom sheet for filters (instead of dropdowns)

3. Tablet adaptations:
   - Sidebar auto-collapse
   - 2-column form layouts
   - Optimized table column widths

4. Components to update:
   - Header (responsive logo and actions)
   - Sidebar (mobile drawer)
   - Tables (horizontal scroll with sticky columns)
   - Modals (full screen on mobile)
   - Forms (stacked layouts)

5. Use DBS responsive utilities and design tokens

Please add responsive styles throughout the application.
```

**Expected Output:** Fully responsive application for all screen sizes.

---

### Prompt 20: Add Data Export Functionality

```
Add export functionality to all tables.

Requirements:
1. Export options:
   - CSV export
   - Excel export (with formatting)
   - PDF export (optional)

2. Export button in each table header:
   - Dropdown menu with format options
   - "Export All" vs "Export Filtered"
   - Progress indicator during export

3. Features:
   - Export visible columns only
   - Include active filters in export
   - Add timestamp to filename
   - Format dates and numbers properly
   - Include headers and totals

4. Libraries:
   - Use exceljs for Excel export
   - Use Papa Parse for CSV
   - Use jsPDF + autoTable for PDF (optional)

5. Integration:
   - GL BE Codes export
   - Event Builder export
   - Instruction Builder export (including nested data)

Please add export functionality to all table pages.
```

**Expected Output:** Export functionality for CSV and Excel formats.

---

## PHASE 7: FINAL POLISH

### Prompt 21: Add Error Handling & Empty States

```
Add comprehensive error handling and empty states.

Please read: dbs-library-docs/components/information-banner.md and alert.md

Requirements:
1. Error States:
   - Network error page (with retry button)
   - 404 Not Found page
   - 403 Forbidden page
   - 500 Server Error page
   - Form validation errors (inline)

2. Empty States:
   - No data in table (with illustration and CTA)
   - No search results (with clear filters button)
   - No uploaded files
   - Empty filter results

3. Error Boundary Component:
   - Catch errors globally
   - Display user-friendly messages
   - Log errors to console/service
   - Retry functionality

4. Inline Validation:
   - Real-time form validation
   - Clear error messages
   - Field-level error display
   - Form-level error summary

Please add error handling and empty states throughout app.
```

**Expected Output:** Comprehensive error handling and empty states.

---

### Prompt 22: Add Keyboard Shortcuts & Accessibility

```
Add keyboard shortcuts and improve accessibility.

Requirements:
1. Keyboard Shortcuts:
   - Ctrl+K: Focus search
   - Ctrl+N: Add new item (context-aware)
   - Ctrl+S: Save form
   - Esc: Close modal/drawer
   - Arrow keys: Navigate table rows
   - Tab: Navigate through form fields

2. Accessibility Improvements:
   - ARIA labels for all interactive elements
   - Proper heading hierarchy
   - Focus management in modals
   - Keyboard navigation in dropdowns
   - Screen reader announcements
   - High contrast mode support

3. Focus Indicators:
   - Visible focus rings
   - Skip to main content link
   - Focus trap in modals
   - Focus return after modal close

4. Create keyboard shortcuts overlay:
   - Press "?" to show shortcuts
   - Modal with all available shortcuts
   - Grouped by context

Please add keyboard shortcuts and improve accessibility.
```

**Expected Output:** Enhanced keyboard navigation and accessibility.

---

### Prompt 23: Add User Preferences & Settings

```
Add user preferences and settings page.

Requirements:
1. Settings Page (new menu item):
   - User profile section
   - Display preferences
   - Notification preferences
   - Table preferences

2. Preferences to save:
   - Theme (Light/Dark/Auto)
   - Items per page default
   - Default view (collapsed/expanded sidebar)
   - Date format
   - Time zone
   - Language (if multi-language)

3. Storage:
   - Save preferences in localStorage
   - Sync with backend (optional)
   - Apply preferences globally

4. Settings UI:
   - Use dbs-switch for toggles
   - Use dbs-select for dropdowns
   - Use dbs-radio for single choice
   - Save button with confirmation

Please create settings page with user preferences.
```

**Expected Output:** User preferences page with persistent settings.

---

### Prompt 24: Add Documentation & Help

```
Add in-app documentation and help system.

Requirements:
1. Help Icon in Header:
   - Dropdown menu with:
     - User Guide
     - Keyboard Shortcuts
     - About
     - Contact Support

2. Contextual Help:
   - Tooltip icons (?) next to complex fields
   - Help text in modals
   - Inline hints for forms

3. User Guide Page:
   - Getting Started section
   - Feature walkthroughs
   - FAQs
   - Video tutorials (embedded)

4. About Modal:
   - App version
   - Build date
   - Release notes link
   - Credits

5. Support Contact:
   - Contact form
   - Email link
   - Support ticket creation

Please add help documentation and support features.
```

**Expected Output:** In-app help system and documentation.

---

### Prompt 25: Performance Optimization & Production Build

```
Optimize the application for production deployment.

Requirements:
1. Performance Optimizations:
   - Lazy load feature modules
   - Virtual scrolling for large tables
   - OnPush change detection strategy
   - TrackBy functions for ngFor
   - Debounce search inputs
   - Memoize expensive computations

2. Bundle Optimization:
   - Code splitting
   - Tree shaking
   - Minification
   - Compression (gzip/brotli)
   - Asset optimization

3. Build Configuration:
   - Production angular.json configuration
   - Environment variables setup
   - Source maps for debugging
   - Build analysis (webpack-bundle-analyzer)

4. Testing:
   - Unit tests for services
   - Component tests
   - E2E tests for critical flows
   - Accessibility tests

5. Create build script and documentation:
   - README with setup instructions
   - Build and deployment guide
   - Environment configuration guide

Please optimize the app and create production build.
```

**Expected Output:** Production-ready optimized application.

---

## SUMMARY: COMPLETE APPLICATION CHECKLIST

### ✅ Phase 1: Foundation
- [ ] Angular project created with DBS library
- [ ] Project structure established
- [ ] TypeScript models defined

### ✅ Phase 2: Layout
- [ ] Header component with logo and actions
- [ ] Secondary navigation sidebar (collapsible)
- [ ] Main layout component

### ✅ Phase 3: GL BE Codes Page
- [ ] Page with search and action buttons
- [ ] Sortable/filterable table
- [ ] Pagination
- [ ] View/Edit modal
- [ ] Upload drawer

### ✅ Phase 4: Event Builder
- [ ] Event Builder page
- [ ] Table with filters
- [ ] Modals and actions

### ✅ Phase 5: Instruction Builder
- [ ] Hierarchical table with expandable rows
- [ ] Multi-step rule modal
- [ ] Murex booking codes nested table

### ✅ Phase 6: Features
- [ ] Notification system
- [ ] Loading states
- [ ] Confirmation dialogs
- [ ] Filter chips
- [ ] Responsive design
- [ ] Export functionality

### ✅ Phase 7: Polish
- [ ] Error handling
- [ ] Empty states
- [ ] Keyboard shortcuts
- [ ] User preferences
- [ ] Help documentation
- [ ] Performance optimization

---

## USAGE INSTRUCTIONS

**How to use these prompts with Claude Code:**

1. **Start with Prompt 1** and work sequentially through each phase
2. **Load relevant documentation** before each prompt:
   ```
   "Please read: dbs-library-docs/components/[component-name].md"
   ```
3. **After each completed prompt**, verify the output and test the functionality
4. **Customize prompts** based on your specific requirements
5. **Reference previous components** when building similar features

**Example Session:**
```
You: [Copy Prompt 1]
Claude: [Creates Angular project and installs DBS library]
You: Confirmed. Please proceed with Prompt 2.
Claude: [Creates project structure]
... continue through all prompts
```

---

**Document Version:** 1.0
**Last Updated:** 2025-10-28
**Total Prompts:** 25
**Estimated Completion Time:** 15-20 development sessions
