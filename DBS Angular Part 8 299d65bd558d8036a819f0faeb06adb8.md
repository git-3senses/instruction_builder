# DBS Angular Part 8

# **Pagination**

# Usage

Import `DbsPaginationComponent` into your component or module.

```html
import { DbsPaginationComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsPaginationComponent],
})
```

## **Stories**

### **Basic**

NOTE: Pending dropdown component to complete the component

```html
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

### **Simple Pagination**

The `inputPageOption=false` will remove the page selections with with just 2 buttons

```html
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

**Show Hide Sections**

```html
<div>showCounterText:  {{showCounterText}}</div>
<div>showRowNumberDropdown:  {{showRowNumberDropdown}}</div>
<div>firstLastOption:  {{showCounterText}}</div>
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [showCounterText]="showCounterText" [showRowNumberDropdown]="showRowNumberDropdown" [firstLastOption]="firstLastOption" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

**Loader**

```html
<dbs-button (click)='loading=!loading'>Loading:{{loading}}</dbs-button>
  <dbs-pagination
    [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" [loading]="loading" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
    
  </dbs-pagination>
```

**Custom Loader**

```html
  <dbs-button (click)='loading=!loading'>Loading:{{loading}}</dbs-button>
  <dbs-pagination
      [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [loading]="loading" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
      
<div loadingSlot 
  style="padding:24px;border: 1px solid #c7cfd5;display: flex; align-items: center; gap:8px; border-radius: 4px;">
  <dbs-partial-loader></dbs-partial-loader>
  This is a custom loader
</div>
    
  </dbs-pagination>
```

Translate

```html
<dbs-pagination
    [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [translate]="translate" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
        
</dbs-pagination>
```

**Full Custom**

```html
<div>Mock page number currentPage = {{currentPage}}<div>
<dbs-pagination #customTextDemo 
  [itemsCount]="itemsCount" 
  [rowsPerPage]="rowsPerPage" 
  [(currentPage)]="currentPage"
  (indexChange)='indexContainerForCustomText=$event'
  
  >
  <div itemCounterSlot>
  {{'显示第 '+(indexContainerForCustomText.startIndex+1)+'-'+(indexContainerForCustomText.endIndex)+' 条，共'+itemsCount+' 条'}}
  </div>
<div itemCounterDropdownSlot>每页条数</div>
<div buttonContainerSlot>
第 {{currentPage}} 页，共 {{customTextDemo.numberOfPages}} 页 
</div>
</dbs-pagination>
```

**Customise Simple Button**

```html
<div>Mock page number currentPage = {{currentPage}}<div>
<dbs-pagination #customButtonsDemo [inputPageOption]="inputPageOption" [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [currentPage]="currentPage">

  <div customButtonsSlot>
  <div [style.display]="'flex'" [style.align-items]="'center'"[style.gap.px]="'8'">
    <label >Fully Custom Section</label>
    <dbs-button
        variant="secondary"
        (click)="currentPage=currentPage-1"
        [disabled]="currentPage == 1"
      >
      Go to page: {{currentPage-1}}
    </dbs-button>
    <dbs-button
      variant="secondary"
      (click)="currentPage=currentPage+1"
      [disabled]="currentPage == customButtonsDemo.numberOfPages"
    >
      Go to page: {{currentPage+1}}
    </dbs-button>
  </div>
  </div>
</dbs-pagination>
```

### **Fe Demo**

The `(indexChange)` output has been provided for use in a slice function You may use a `indexChangeHandler({startIndex,endIndex})` with a `Array.slice(startIndex,endIndex)` to get the data to display.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsPaginationComponent } from "../../../../public-api";

@Component({
  selector: "dbs-fe-demo-story",
  standalone: true,
  imports: [CommonModule, DbsPaginationComponent],
  templateUrl: "fe-demo-story.component.html",
  styleUrls: ["fe-demo-story.component.scss"],
})
export class FeDemoStoryComponent {
  currentPageFromDemo = 1;
  rowsPerPage = 5;
  usageDemo: any;
  paginationData = [
    { index: 0, data: "Index 0 data" },
    { index: 1, data: "Index 1 data" },
    { index: 2, data: "Index 2 data" },
    { index: 3, data: "Index 3 data" },
    { index: 4, data: "Index 4 data" },
    { index: 5, data: "Index 5 data" },
    { index: 6, data: "Index 6 data" },
    { index: 7, data: "Index 7 data" },
    { index: 8, data: "Index 8 data" },
    { index: 9, data: "Index 9 data" },
    { index: 10, data: "Index 10 data" },
    { index: 11, data: "Index 11 data" },
    { index: 12, data: "Index 12 data" },
    { index: 13, data: "Index 13 data" },
    { index: 14, data: "Index 14 data" },
    { index: 15, data: "Index 15 data" },
  ];
  itemsCountFromDemo = this.paginationData?.length;

  ngOnInit() {
    // This initialises the usageDemo data as you know both data and rows
    this.usageDemo = this.filterData(
      this.currentPageFromDemo,
      this.rowsPerPage,
    );
  }

  filterData(pageNo: number, rowsPerPage: number) {
    let index = pageNo === 1 ? 0 : (pageNo - 1) * rowsPerPage;
    let lastIndex = index + +rowsPerPage;
    let d = this.paginationData.slice(index, lastIndex);
    return d;
  }

  /**
   * The (indexChange) output has been provided for use in a slice function
   * You may use a indexChangeHandler({startIndex,endIndex}) with a Array.slice(startIndex,endIndex) to get the data to display. */
  indexChangeHandler({ startIndex, endIndex }: any) {
    this.usageDemo = this.paginationData.slice(startIndex, endIndex);
  }

  demo1rowsPerPageChange(e: any) {
    console.log("demo1rowsPerPageChange", e);
  }
  demo1CurrentPageChange(e: any) {
    console.log("demo1CurrentPageChange", e);
  }
}
```

```html
<ul>
  <label *ngFor="let x of usageDemo">
    <li>{{ x.index + 1 }}.{{ x.data }}</li>
  </label>
</ul>
<dbs-pagination
  #usage
  [currentPage]="currentPageFromDemo"
  (indexChange)="indexChangeHandler($event)"
  [itemsCount]="itemsCountFromDemo"
  [rowsPerPage]="rowsPerPage"
  (rowsPerPageChange)="demo1rowsPerPageChange($event)"
  (currentPageChange)="demo1CurrentPageChange($event)"
  [dropUp]="true"
>
</dbs-pagination>
```

### **Be Demo**

For data retrieval from BE, you may use the `(currentPageChange)` or the `(indexChange)` outputs to decide how you'd like to get the data.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsPaginationComponent,
  DbsButtonComponent,
} from "../../../../public-api";

@Component({
  selector: "dbs-be-demo-story",
  standalone: true,
  imports: [CommonModule, DbsPaginationComponent, DbsButtonComponent],
  templateUrl: "be-demo-story.component.html",
  styleUrls: ["be-demo-story.component.scss"],
})
export class BeDemoStoryComponent {
  beCallDataDemo: any[] = [];
  beCallRows = 3;
  beCallPage = 1;
  beCallIndex: any;
  beCallDataTotalCount: any;
  paginationData = {
    tableData: [
      { index: 0, data: "Index 0 data" },
      { index: 1, data: "Index 1 data" },
      { index: 2, data: "Index 2 data" },
      { index: 3, data: "Index 3 data" },
      { index: 4, data: "Index 4 data" },
      { index: 5, data: "Index 5 data" },
      { index: 6, data: "Index 6 data" },
      { index: 7, data: "Index 7 data" },
      { index: 8, data: "Index 8 data" },
      { index: 9, data: "Index 9 data" },
      { index: 10, data: "Index 10 data" },
      { index: 11, data: "Index 11 data" },
      { index: 12, data: "Index 12 data" },
      { index: 13, data: "Index 13 data" },
      { index: 14, data: "Index 14 data" },
      { index: 15, data: "Index 15 data" },
    ],
    totalData: 16,
  };

  runApi() {
    /** Run api to get json response */
    let apiResponse = {
      tableData: [
        { index: 0, data: "Index 0 data" },
        { index: 1, data: "Index 1 data" },
        { index: 2, data: "Index 2 data" },
      ],
      totalData: 16,
    };

    /** set the total number of data */
    this.beCallDataTotalCount = this.paginationData.totalData;

    /** set data */
    this.beCallDataDemo = apiResponse.tableData;
  }

  getBEslice({ startIndex, endIndex }: any) {
    this.beCallIndex = { startIndex, endIndex };
    console.log("Trigger BE call to send UI data of page: ", {
      startIndex,
      endIndex,
    });
    /**
     * Call api to retrieve data with the stated start & end index
     * Replaces this.beCallDataDemo with the data called
     */
    this.beCallDataDemo = this.paginationData.tableData.slice(
      startIndex,
      endIndex,
    );
  }

  getBEPage(event: any) {
    console.log("OR Trigger BE call to send UI data of page: ", event);
  }
}
```

```html
@if (beCallDataDemo?.length) {
  <ul>
    <label *ngFor="let x of beCallDataDemo">
      <li>{{ x.index + 1 }}.{{ x.data }}</li>
    </label>
  </ul>
} @else {
  <dbs-button (click)="runApi()">Trigger BE data</dbs-button>
}

<dbs-pagination
  #backendCallDemo
  [currentPage]="beCallPage"
  [(rowsPerPage)]="beCallRows"
  [itemsCount]="beCallDataTotalCount"
  (indexChange)="getBEslice($event)"
  (currentPageChange)="getBEPage($event)"
>
</dbs-pagination>
```

### **Changing Values**

Test changing of values

```html
<dbs-input [fieldLabel]="'itemsCount'" [(value)]='itemsCount'>change itemsCount</dbs-input>
<dbs-input [fieldLabel]="'rowsPerPage'" [(value)]='rowsPerPage'>change itemsCount</dbs-input>
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

### **Customised Interval Array**

Customise the interval of the dropdown

```html
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" [customArrayOfIntervals]="customArrayOfIntervals" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

**API Reference**

```html
<dbs-pagination
  [itemsCount]="itemsCount" [rowsPerPage]="rowsPerPage" [inputPageOption]="inputPageOption" (currentPageChange)="currentPageChange($event)" (goToPage)="goToPage($event)" (indexChange)="indexChange($event)" (rowsPerPageChange)="rowsPerPageChange($event)">
  
</dbs-pagination>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **itemsCount** | Number of items/recordsnumber | NaN |  |
| **rowsPerPage** | Number of rows per page This will also set the interval dropdown's increments 10 will result in a arrayOfIntervals that increment by 10 100 will result in a arrayOfIntervals that increment by 100number | 10 |  |
| **inputPageOption** | True to show input and allow user to navigate using input page number, else will display the button style pagination.boolean | true | [x] |
| **currentPage** | Current page to be displayednumber | 1 |  |
| **customArrayOfIntervals** | Customise the dropdown menu for items per page ONLY `number[]` or `DropdownValue[]`any[] | DropdownValue[] | [] |  |
| **dropUp** | True to force dropdown to open up above fieldboolean | false |  |
| **firstLastOption** | True to show first and last page selection buttons, else falseboolean | true |  |
| **loading** | Toggle loading state of paginationboolean | false |  |
| **showCounterText** | True to show default text of 'Showing 1-x of [itemCount] items' textboolean | true |  |
| **showRowNumberDropdown** | True to show default text on left of rowsPerPage dropdownboolean | true |  |
| **translate** | Translate text or replace text
• showing:"Showing",
• dash:"-",
• of:"of",
• items:"items",
• itemsPerPage:"Items per page",
• page:"Page ",
• of2:" of ",
• end:"",
• previous: 'Previous',
• next: 'Next',
• loadingMore: 'Loading more...',{ showing: string; dash: string; of: string; items: string; itemsPerPage: string; page: string; of2: string; end: string; previous: string; next: string; loadingMore: string; } | this.translateOriginal |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **pagination** | *(deprecated - IBGT)*
3.1 will not require this for displaying the page numbers to be clickablenumber | NaN |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **currentPageChange** | Event fired when `currentPage` changes. This is 2 way bindingEventEmitter |  |  |
| **goToPage** | Event fired when selecting a pageEventEmitter |  |  |
| **indexChange** | Event fired when `currentPage` or `rowsPerPage` changes. This is 2 way binding Reminder that Array.slice(start,end) does not include the end index when slicingEventEmitter |  |  |
| **rowsPerPageChange** | Event fired when changing `rowsPerPage`. This is 2 way bindingEventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | Slot that will replaced all the content in paginationHTMLElement | - |  |
| **itemCounterSlot** | Customise number of pages counter. Replaces `item-counter__text`HTMLElement | - |  |
| **itemCounterDropdownSlot** | Customise dropdown label. Replaces `item-counter-dropdown__text`HTMLElement | - |  |
| **buttonContainerSlot** | Customise current page label. Replaces `button-container__text`HTMLElement | - |  |
| **customButtonsSlot** | Customise simple pagination buttons. Replaces `custom-buttons`HTMLElement | - |  |

# **Text Area**

These are multi-line text input areas that allow users to enter larger amounts of text for forms or requests. It encapsulates the `<textarea>` HTMLElement and extends its behaviour with additional features like character counting, validation, and mobile-specific enhancements.

# Usage

The DBS TextArea provides a comprehensive multi-line text input component that supports various validation states, character counting, resizing options, and accessibility features. It integrates seamlessly with Angular forms and provides extensive customization for different use cases.

### **Basic Usage:**

```html
<!-- Basic TextArea -->
<dbs-textarea
  [formControl]="myFormControl"
  placeholder="Enter your message here"
  [rows]="4">
</dbs-textarea>

<!-- TextArea with Character Counter -->
<dbs-textarea
  [formControl]="commentControl"
  [maxlength]="500"
  [characterCounter]="'number'"
  placeholder="Enter your comment (max 500 characters)">
</dbs-textarea>

<!-- TextArea with Help Text and Validation -->
<dbs-textarea
  [formControl]="descriptionControl"
  [required]="true"
  [minlength]="10"
  [maxlength]="1000"
  helpText="Provide a detailed description"
  errorMsg="Description is required and must be at least 10 characters"
  [characterCounter]="'text'">
</dbs-textarea>

<!-- Small Size TextArea with Custom Resize -->
<dbs-textarea
  size="sm"
  [customResizeHandle]="true"
  [rows]="3"
  [cols]="40"
  placeholder="Compact textarea">
</dbs-textarea>
```

# Visual Description

### **Container Structure**

- Main Container: `.dbs-textarea` with size variants controlled by `[size]` (`dbs-textarea--size-md`, `dbs-textarea--size-sm`)
- Container Classes: Applied via `[class]` input for custom styling
- Click Behavior: Entire container focuses the textarea when clicked

### **TextArea Element Structure**

- TextArea Element: `.dbs-textarea__input` with additional classes from `[inputClass]`
- iOS Enhancement: `.dbs-textarea__input--ios-textarea` class applied when `iOSSafari` is detected or `[customResizeHandle]="true"`
- Dimensions: Controlled by `[rows]` (height) and `[cols]` (width) attributes

### **TextArea Element Attributes**

- Identification: `[id]` sets the textarea's id attribute (auto-generated with unique UUID if not provided)
- Placeholder: `[placeholder]` text, replaced with `[readonlyPlaceholder]` when `[readonly]="true"` (uses StringReplacerPipe)
- Validation Constraints:
    - `[minlength]` and `[maxlength]` for text length validation
    - `[required]="true"` adds required attribute
- Behavior Attributes:
    - `[autofocus]="true"` focuses textarea on page load
    - `[disabled]="true"` disables the textarea
    - `[readonly]="true"` makes textarea read-only
    - `[tabindex]` controls tab order
- Form Integration:
    - `[name]` sets the textarea name attribute
    - Two-way binding via `[(ngModel)]="value"`

### **Accessibility Support**

- ARIA Labels: `[ariaLabel]` and `[ariaLabelledBy]` for screen readers
- ARIA States: `[ariaDisabled]`, `[ariaRequired]` for accessibility
- Focus Management: Automatic focus handling with keyboard navigation support

### **Custom Resize Handle (iOS Safari Enhancement)**

- Resize Container: `.dbs-textarea__icon-container` appears when:
    - `iOSSafari` is detected AND `[disabled]="false"` AND `[readonly]="false"` OR
    - `[customResizeHandle]="true"`
- Resize Icon: `.dbs-textarea__resize-icon.icon.icon__drag` provides visual drag handle
- Touch Events: `(touchstart)="onMouseDown($event)"` initiates custom resize behavior
- Custom Resizing: Handles iOS Safari textarea resizing limitations with touch-based resize logic

### **Footer Area (Below TextArea)**

- Footer Container: `.dbs-textarea__footer` contains all message and counter elements
- Help Text: `.dbs-textarea__help-text` displays `[helpText]` when not `[readonly]`
- Error Message: `.dbs-textarea__error-msg` displays `[errorMsg]` when not `[readonly]`
- Minimum Length Indicator: `.dbs-textarea__minlength` shows "(min. X char)" when `[minlength]` is set and not `[readonly]` or `[disabled]`

### **Character Counter Display (when not readonly/disabled)**

- Text Format: `.dbs-textarea__character-counter` shows "X characters left" when:
    - `[maxlength]` is set AND
    - `[characterCounter]="'text'"` AND
    - `[readonly]="false"` AND `[disabled]="false"`
- Number Format: `.dbs-textarea__character-counter` shows "X/Y" format when:
    - `[maxlength]` is set AND
    - `[characterCounter]="'number'"` AND
    - `[readonly]="false"` AND `[disabled]="false"`

### **Size Variants (controlled by `[size]`)**

- Medium (`md`): Default size with standard font sizing (16px)
- Small (`sm`): Compact size with reduced font sizing (14px)
- Responsive: All child elements adapt to match textarea size

### **State Management**

- Focus State: `focused` property tracks textarea focus for conditional behavior
- Empty State: `empty` property indicates whether textarea has content
- Character Count: `characterLeftCount` calculates remaining characters for counters
- Display Message: `displayMessage` switches between help text and error messages based on validation state

### **Event Handling**

- Focus Events: `(focus)` emits when textarea gains focus via `_handleFocus()`
- Blur Events: `(blur)` emits when textarea loses focus via `_handleBlur()`
- Change Events: `(change)` emits on value changes via `_handleChange()`
- Key Events: `(keyup)` emits on key release via `_handleKeyUp()`
- Touch Events: Custom resize handling for iOS Safari via `onMouseDown()`, `onMouseUp()`, `onMouseMove()`

### **iOS Safari Specific Features**

- Detection: Automatically detects iOS Safari browser for enhanced functionality
- Custom Resize: Provides touch-based resizing when native resize handles don't work properly
- Minimum Height: Enforces minimum height of 55px during custom resizing
- Touch Tracking: Tracks touch positions and calculates new textarea dimensions

# Developer Restrictions & Notes

### **Required Dependencies**

- Component requires `maxlength` when using `[characterCounter]`
- StringReplacerPipe is used for placeholder replacement logic

### **Character Counter Requirements**

- Text Counter: Shows remaining characters in "X characters left" format
- Number Counter: Shows current/max in "X/Y" format
- Both require `[maxlength]` to be set and component not to be readonly or disabled

### **Form Integration Notes**

- Value Updates: Uses ngModel for two-way data binding
- Disabled State: Use FormControl's `disable()` method instead of `[disabled]` input when using reactive forms
- Error Display: Error messages only show when form control is invalid, dirty, and not pristine
- Validation: Supports both template-driven and reactive form validation

### **iOS Safari Limitations & Solutions**

- Resize Issue: iOS Safari has known issues with textarea resize handles
- Custom Solution: Component provides custom touch-based resizing for iOS Safari
- Detection Logic: Automatically detects iOS Safari using user agent string
- Manual Override: Use `[customResizeHandle]="true"` to force custom resize on any device

### **Accessibility Requirements**

- Labels: Provide either `[ariaLabel]` or `[ariaLabelledBy]` for screen readers
- Error Messages: Use `[errorMsg]` for validation error display
- Required Controls: Set `[required]="true"` and `[ariaRequired]="true"` for mandatory form controls
- Focus Management: Component handles focus states and keyboard navigation

### **Performance Considerations**

- Event Handling: Efficient event delegation for focus, blur, and input events
- Touch Events: iOS Safari resize uses document-level touch event listeners
- Memory Management: Properly implements ControlValueAccessor lifecycle methods
- Validation: Error message display logic runs on blur and keyup events

### **Migration Notes (Deprecated Features)**

- Character Counter: `[innerCounter]` deprecated - use `[characterCounter]` instead
    - `innerCounter: true` becomes `characterCounter: 'number'`
    - `innerCounter: false` becomes `characterCounter: undefined`
- Width Control: `[width]` deprecated - use `[cols]` instead for textarea width control

### **Browser Compatibility**

- iOS Safari: Special handling for textarea resizing issues
- Touch Devices: Custom resize handle works on all touch-enabled devices
- Desktop: Standard textarea resize behavior on desktop browsers
- Cross-browser: Consistent styling and behavior across modern browsers

### **Security Considerations**

- Input Validation: Client-side validation should be supplemented with server-side validation
- Content Sanitization: Consider sanitizing textarea content for XSS prevention
- Length Limits: Enforce both client and server-side length restrictions

### **Styling Customization**

- Container Classes: Use `[class]` input for container-level styling
- Input Classes: Use `[inputClass]` input for textarea element styling
- Size Variants: Built-in size classes for consistent sizing
- State Classes: Automatic application of validation and focus state classes

### **Common Use Cases**

- Comments: Multi-line comment inputs with character limits
- Descriptions: Product or service description fields
- Messages: Contact forms and messaging interfaces
- Feedback: User feedback and review text areas
- Notes: Administrative notes and internal comments

### **Integration Examples**

```
// Reactive Forms
commentForm = this.fb.group({
  comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
});

// Template-driven Forms
// Use with ngModel and template reference variables for validation
```

# Usage

Import `DbsTextAreaComponent` into your component or module.

```html
import { DbsTextAreaComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsTextAreaComponent],
})
```

## **Stories**

### **Basic**

```html
<dbs-textarea  [placeholder]="'Enter Message'" ></dbs-textarea>
```

**Form Control**

```html
<dbs-button (click)='formControl.reset()'>reset</dbs-button>
<dbs-textarea [formControl]="formControl"  ></dbs-textarea>
value:{{formControl.value |json }} <br>
invalid:{{formControl.invalid }}<br>
touched:{{formControl.touched }}<br>
dirty:{{formControl.dirty }}

```

Field Label

```html
<dbs-textarea  [fieldLabel]="'Field label'" [fieldLabelDisplayTooltipIcon]="true" [fieldLabelTooltipTitle]="'tooltip title'" [fieldLabelTooltipText]="'tooltip text'" ></dbs-textarea>
```

Character Counter

```html
<dbs-textarea  [characterCounter]="'number'" [maxlength]="100" ></dbs-textarea>
```

**Help Text and Character Counter**

```html
<dbs-textarea  [helpText]="'Sample help text'" [characterCounter]="'text'" [maxlength]="100" ></dbs-textarea>
```

### **Sizing**

The font size is set with the `size` Input, while the initial height of the `<textarea>` is set with `rows`.

```html
<div style="display:flex; flex-direction:column; gap:8px;">
  <dbs-textarea  [size]="'sm'" [rows]="4" [placeholder]="'small with 4 rows'" ></dbs-textarea>
  <dbs-textarea  [size]="'md'" [rows]="6" [placeholder]="'medium with 6 rows'" ></dbs-textarea>
</div>
```

### **Read-only**

`readonly` state will hide the help text and counter display.

```html
<div style="display:flex; flex-direction:column; gap:8px;">
  <div>
    <p>Read-only with value.</p>
    <dbs-textarea  [helpText]="'This help text is hidden in readonly'" [characterCounter]="'text'" [maxlength]="100" [readonly]="true" [value]="'Textarea value'" ></dbs-textarea>
  </div>
  <div>
    <p>Read-only with no value and default <code>readonlyPlaceholder</code>.</p>
    <dbs-textarea  [helpText]="'This help text is hidden in readonly'" [characterCounter]="'text'" [maxlength]="100" [readonly]="true" ></dbs-textarea>
  </div>
  <div>
    <p>Read-only with no value and custom <code>readonlyPlaceholder</code>.</p>
    <dbs-textarea  [helpText]="'This help text is hidden in readonly'" [characterCounter]="'text'" [maxlength]="100" [readonly]="true" [readonlyPlaceholder]="'Custom `readonlyPlaceholder` text'" ></dbs-textarea>
  </div>
</div>
```

### **Disabled**

The disabled state can be set in two ways:

- Using the `.disable()` method or setting the `disabled` property in `FormControl`
- Setting `[disabled]="true"` in the template

**NOTE:** Use one or the other, not both together.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsTextAreaComponent } from "../../dbs-textarea.component";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";

@Component({
  selector: "disabled-story",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsTextAreaComponent],
  templateUrl: "disabled-story.component.html",
})
export class DisabledStoryComponent {
  formControl = new UntypedFormControl({ value: "", disabled: true });
}
```

```tsx
<div style="display: flex; flex-direction: column; gap: 24px">
  <dbs-textarea
    [helpText]="'Sample help text'"
    [characterCounter]="'text'"
    [maxlength]="100"
    [placeholder]="'This textarea is disabled via formControl'"
    [formControl]="formControl"
  ></dbs-textarea>
  <dbs-textarea
    [helpText]="'Sample help text'"
    [characterCounter]="'text'"
    [maxlength]="100"
    [placeholder]="'This textarea is disabled via the disabled Input'"
    [disabled]="true"
  ></dbs-textarea>
</div>
```

### **Error Validation**

Error validation is set uisng `FormControl`.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsTextAreaComponent } from "../../dbs-textarea.component";
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "error-validation-story",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsTextAreaComponent],
  templateUrl: "error-validation-story.component.html",
})
export class ErrorValidationStoryComponent {
  formControl = new UntypedFormControl("", [
    Validators.email,
    Validators.required,
  ]);
}
```

```html
<dbs-textarea
  [placeholder]="'Enter email'"
  [helpText]="'Sample help text'"
  [errorMsg]="'Not a valid email'"
  [characterCounter]="'text'"
  [maxlength]="100"
  [formControl]="formControl"
></dbs-textarea>
```

**Resize Handle For IOS Safari (Mobile)**

```html
<dbs-textarea  [placeholder]="'Enter Message'" [helpText]="'Sample help text'" [characterCounter]="'text'" [maxlength]="100" [customResizeHandle]="true" ></dbs-textarea>
```

**API Reference**

```html
<dbs-textarea [placeholder]="placeholder"  ></dbs-textarea>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **placeholder** | Placeholder of input fieldstring | "" |  |
| **align** | Align attribute of the dbs-textarea component"start""end" | start | startend |
| **aria-disabled** | Aria-related state that indicates that the element is perceivable but disabledboolean | false |  |
| **aria-label** | Aria-related attribute that labels an interactive elementstring |  |  |
| **aria-labelledby** | Aria-related attribute that identifies the element (or elements) that labels the element it is applied to.string |  |  |
| **aria-required** | Aria-related attribute that indicates user input is required on the elementboolean | false |  |
| **autofocus** | Input focus upon page loadboolean | false |  |
| **characterCounter** | requires - `maxlength`
Counter which counts the remaining characters left (to be used concurrently with `maxlength`).
`number`: Display in numerical format (eg. "0/100").
`text` Display in text format (eg. "100 characters left")."text""number"undefined |  |  |
| **class** | Classes to the top-level divstring |  |  |
| **cols** | Visible width of the textarea, in average character widthsnumber | 20 |  |
| **customResizeHandle** | Create a custom vertical resize handle (For IOS Safari)boolean | false |  |
| **disabled** | Disables the textarea field. Should not be used together with FormControl.boolean | false |  |
| **errorMsg** | Optional. Message to display when the form control has an errorstring | "" |  |
| **helpText** | Optional. Shows a constant helper text below the input unless there is an errorstring | "" |  |
| **id** | Unique identifier for identifying the textarea in the HTML documentstring | `md-textbox-${this.uniqueId}` |  |
| **inputClass** | Classes to the textarea elementstring | "" |  |
| **maxlength** | Maximum length of user input , will prevent input of additional textnumber | NaN |  |
| **minlength** | Minimum length of user input requirednumber | NaN |  |
| **name** | Name attribute of the textareastring |  |  |
| **readonly** | Whether textarea should be read onlyboolean | false |  |
| **readonlyPlaceholder** | Placeholder when `readonly` is truestring | - |  |
| **required** | Whether textarea value should be requiredboolean | false |  |
| **rows** | Number of visible text lines for the textareanumber | 2 |  |
| **size** | Font size of the text area,16px for md and 14px for sm"sm""md" | "md" | smmd |
| **tabindex** | Whether textarea should be focusable via `Tab` keynumber | NaN |  |
| **value** | Set value of the textareastring |  |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **innerCounter** | *(deprecated - ODS) Use `characterCounter` instead.*boolean | false |  |
| **width** | *(deprecated - ODS) Use `cols` instead.*string |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **blur** | Emitted when focus is removed from the textarea.Observable<FocusEvent> |  |  |
| **focus** | Emitted when focus is added to the textarea.Observable<FocusEvent> |  |  |
| **keyup** | Emitted upon a key is being released.Observable<any> |  |  |