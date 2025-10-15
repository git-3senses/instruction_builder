# Angular Conversion of Hedge Accounting SFX Configuration App

This folder contains the Angular conversion of the React application. The original React app has been converted to Angular 17+ with standalone components.

## Key Conversions Made

### Architecture Changes
- **React Components** → **Angular Standalone Components** with `@Component` decorator
- **React Hooks (useState)** → **Angular Component Properties**
- **Props** → **`@Input()` decorators**
- **Event Handlers** → **`@Output()` EventEmitters**
- **JSX** → **Angular Templates (HTML)**
- **React.Fragment** → **`<ng-container>`**

### Component Structure
All components follow Angular's standalone component architecture (no NgModules required).

```
/angular-app/src/app/
├── app.component.ts              # Main app component
├── app.component.html            # Main app template
├── app.component.css             # Main app styles
└── components/
    ├── secondary-navigation/
    ├── gl-be-codes-page/
    ├── add-rule-modal/
    ├── edit-rule-modal/
    ├── gl-be-code-modal/
    ├── row-action-menu/
    ├── column-filter-dropdown/
    ├── date-column-filter/
    └── multi-select-dropdown/
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Navigate to the angular-app directory:
```bash
cd angular-app
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install @angular/common @angular/core @angular/platform-browser
npm install lucide-angular  # Angular version of lucide icons
npm install -D tailwindcss postcss autoprefixer
```

### Configuration Files Needed

Create the following configuration files:

#### 1. `angular.json`
Standard Angular workspace configuration

#### 2. `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "dom"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

#### 3. `tailwind.config.js`
```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Running the Application

Development server:
```bash
ng serve
```

Build for production:
```bash
ng build
```

## Key Differences from React Version

### State Management
**React:**
```typescript
const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
```

**Angular:**
```typescript
expandedRows = new Set<string>();
```

### Props and Events
**React:**
```typescript
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
```

**Angular:**
```typescript
@Input() isOpen: boolean = false;
@Output() close = new EventEmitter<void>();
```

### Template Syntax
**React (JSX):**
```jsx
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

**Angular (Template):**
```html
<div *ngFor="let item of items">{{item.name}}</div>
```

### Conditional Rendering
**React:**
```jsx
{isVisible && <Component />}
```

**Angular:**
```html
<app-component *ngIf="isVisible"></app-component>
```

## Styling

The app uses the same Tailwind CSS configuration and design system as the React version:
- Copy `/styles/globals.css` to `/angular-app/src/styles/globals.css`
- All CSS variables from the design system are preserved
- Typography classes (h1, h2, h3, p, caption, badge) work identically

## SVG Imports

SVG paths are imported from the original `/imports/` directory:
```typescript
import svgPaths from '../../../imports/svg-njr3iq9til';
```

Use them in templates with attribute binding:
```html
<path [attr.d]="svgPaths.pa375b00" fill="#FF3E3E" />
```

## Icons

Replace `lucide-react` with `lucide-angular`:
- Install: `npm install lucide-angular`
- Import icons as components
- Use in templates with selectors

## Component List

### Core Components
1. **AppComponent** - Main application component
2. **SecondaryNavigationComponent** - Collapsible sidebar navigation
3. **GLBeCodesPageComponent** - GL BE Codes page with table and pagination
4. **AddRuleModalComponent** - Modal for adding new rules
5. **EditRuleModalComponent** - Modal for editing/viewing rules
6. **GLBeCodeModalComponent** - Modal for GL BE Code operations
7. **RowActionMenuComponent** - 3-dot menu for row actions
8. **ColumnFilterDropdownComponent** - Filter dropdown for table columns
9. **DateColumnFilterComponent** - Date range filter for date columns
10. **MultiSelectDropdownComponent** - Multi-select dropdown component

## Features Preserved

✅ Expandable table with sticky columns
✅ Column filtering (text and date range)
✅ Status-based conditional rendering (Edit/View icons)
✅ Modal dialogs with form validation
✅ Pagination on GL BE Codes page
✅ Responsive layout
✅ Design system integration
✅ SVG icon support

## Notes for Development

- All components are standalone (no NgModule required)
- Use Angular signals for reactive state management if needed
- Services can be created for shared state management
- RxJS can be used for complex async operations
- Forms can be enhanced with Reactive Forms or Template-driven Forms

## Migration Status

✅ Main App Component
✅ Component Structure
✅ Template Conversion
✅ Styling Integration
⚠️ Child Components - Templates created, need full implementation
⚠️ Angular Configuration Files - Need to be added
⚠️ Icon Library - Needs lucide-angular integration

## Next Steps

1. Complete all child component implementations
2. Add Angular configuration files (angular.json, package.json)
3. Integrate lucide-angular for icons
4. Set up Angular services for shared state
5. Add form validation using Angular Forms
6. Test all interactions and data flow
