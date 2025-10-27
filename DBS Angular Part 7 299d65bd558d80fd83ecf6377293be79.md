# DBS Angular Part 7

# **Dropdown**

This is the `<dbs-dropdown-menu>` or `<dbs-dropdown>` in DLS terms the 'Dropdown' it is used in multiple components as a dropdown it is only used for **single selections**

Not to be confused with the `dbs-select` component

This component is solely for outputing of events and not form selections

# Usage

Import `DbsDropdownMenuComponent` into your component or module.

```tsx
import { DbsDropdownMenuComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsDropdownMenuComponent],
})
```

## **Stories**

### **Basic**

The dropdowns require the `parentId` to which you want the component to attach to

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **Icon Button**

The more common use case of dropdowns

- note `[popperPosition]='"bottom-start"'` is used here

```tsx
<dbs-icon-button (click)='showDropdown="true"' [id]='parentId'>
  <svg-icon iconName='more-vertical'>
  </svg-icon>
</dbs-icon-button>
<dbs-dropdown #dropdown
  [popperPosition]='"bottom-start"'
  [(showDropdown)]='showDropdown'
  [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
  (onSelect)='selected=$event'
></dbs-dropdown>
onSelect : {{selected??'nothing selected'|json}}
```

**No Category**

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **Keep Select State**

The dropdowns can `keepSelectState`, however, a reminder that this is not a `FormControl` based component like `dbs-select`

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [keepSelectState]="keepSelectState" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **No Mobile Overlay**

The `mobileOverlay` turns the overlay on or off

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [mobileOverlay]="mobileOverlay" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **Mobile Breakpoint**

The `mobileBreakpoint` adjusts when to trigger the mobile dropdown

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [mobileBreakpoint]="mobileBreakpoint" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **Fit Content**

By default `bottomSheetHeight` is `undefined` to make the bottom-sheet fit the number of options

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [mobileBreakpoint]="mobileBreakpoint" [bottomSheetHeight]="bottomSheetHeight" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

### **Multi Parent**

A single dropdown may be attached to multiple `parentId`

```tsx
<div [style.height.px]=''>
@for( buttonId of [1,2,3,4,5,6];track buttonId){
  <dbs-button (click)='showDropdown=true;parentId=buttonId;title=buttonId' [id]='buttonId'>id:{{buttonId}}</dbs-button>
}
  <dbs-dropdown 
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    [mobileTitle]='"parentId:"+title'
    [(showDropdown)]='showDropdown'
    (onSelect)='selected=$event'
    ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

**Show Filter**

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [showFilter]="showFilter" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

**Match Parent Width**

```tsx
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" [showFilter]="showFilter" [matchParentWidth]="matchParentWidth" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

Custom Template

Custom templates use `@ContentChild` to retrieve the templates. This requires the `ng-template` to be placed within the `<dbs-dropdown> Place Template Here </dbs-dropdown>` tags.

- `#topSectionTemplate` - overwrites the options
- `#optionTemplate` - overwrites the options
    
    **Styles**
    
- you may use the class `default-style`, with addon `disabled`,`selected` and `norecord` to use default styles
- ie `<div class="default-style selected">`
- styles included for `hovered`, `selected`, `disabled`

```tsx
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  booleanAttribute,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  DbsIconButtonComponent,
  DbsDropdownMenuComponent,
  DropdownValue,
  DbsLoaderComponent,
  DbsSelectComponent,
  DbsAvatarComponent,
} from "../../../../public-api";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "custom-template-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsButtonComponent,
    DbsIconButtonComponent,
    DbsDropdownMenuComponent,
    DbsLoaderComponent,
    DbsSelectComponent,
    DbsAvatarComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: "custom-template-story.component.html",
  styleUrl: "custom-template-story.component.scss",
})
export class CustomTemplateStoryComponent {
  showDropdown = false;
  selected: any;
  values: DropdownValue[] = [
    { category: "Internal", value: "Mark", label: "Mark@dbs.com" },
    { category: "Internal", value: "Jasper", label: "Jasper@dbs.com" },
    { category: "Internal", value: "Haikal", label: "Haikal@dbs.com" },
    {
      category: "External",
      value: "Consultant",
      label: "Consultant@consultant.com",
    },
  ];
  multiModel: [];
}
```

```html
<dbs-button
  (click)="showDropdown=true"
  [id]='"parentId"'
  >{{selected?selected.value:'open dropdown'}}</dbs-button
>
<dbs-dropdown
  #dropdown
  [(showDropdown)]="showDropdown"
  [values]="values"
  [parentId]="'parentId'"
  (onSelect)="selected=$event"
  [showFilter]="true"
  [keepSelectState]="true"
>
  <ng-template #topSectionTemplate>
    <div
      (click)="selected={value:'top-section-click',label:'top-section-click'}"
    >
      topSectionTemplate sits between search and the options
    </div>
  </ng-template>
  <ng-template #optionTemplate let-option let-id="index">
    <div class="default-style">
      <dbs-avatar [variant]="'logo'">
        @if (option.category === 'Internal') {
          <img src="./favicon.svg" alt="favicon" />
        } @else {
          <dbs-avatar [name]="option.value"></dbs-avatar>
        }
      </dbs-avatar>
      <div class="custom-container-text">
        <span class="name">
          {{option.value}}
        </span>
        <span class="email">
          {{option.label}}
        </span>
      </div>
    </div>
  </ng-template>
</dbs-dropdown>
onSelect : {{selected??'nothing selected'|json}}
```

```css
.custom-container {
  display: flex;
  padding: 8px;
  border-radius: var(--input-select-option-border-radius);
  &:hover {
    background-color: pink;
  }
  &-text {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    .email {
      font-size: var(--text-small-font-size);
      color: var(--color-text-subtle);
    }
  }
}
```

**API Reference**

```css
menuOpen:{{ dropdown.menuOpen() }}
opened_bottomsheet:{{ dropdown.opened_bottomsheet }}
mobileView:{{ dropdown.mobileView }}

<div [style.height.px]=''>
  <dbs-button (click)='showDropdown="true"' [id]='parentId'>open dropdown</dbs-button>
  <dbs-dropdown #dropdown
    [(showDropdown)]='showDropdown'
    [values]="values" [parentId]="parentId" (onSelect)="onSelect($event)" (menuClick)="menuClick($event)" (onSearchBarValueChange)="onSearchBarValueChange($event)" (overlayClicked)="overlayClicked($event)" (showDropdownChange)="showDropdownChange($event)"
    (onSelect)='selected=$event'
  ></dbs-dropdown>
  onSelect : {{selected??'nothing selected'|json}}
</div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **values** | values to be displayed in the dropdown Array of objects with

ValuesInterface[] | [] | values :[
• 0 :{...} 3 keys
• 1 :{...} 3 keys
• 2 :{...} 4 keys
• 3 :{...} 3 keys
• 4 :{...} 3 keys
• 5 :{...} 3 keys
• 6 :{...} 4 keys
• 7 :{...} 3 keys
• 8 :{...} 3 keys
• 9 :{...} 3 keys
• 10 :{...} 4 keys
• 11 :{...} 3 keys] |
| **parentId** | id of the parent element to which the dropdown-menu will attach itself tostring |  |  |
| **blockMobileView** | Prevents bottom-sheet being displayed insteadboolean | false |  |
| **borderRadius** | Set border-radius of the dropdown-menustring | "" |  |
| **bottomSheetCloseThreshold** | bottom-sheet's [closeThreshold]number | 50 |  |
| **bottomSheetCloseWTransition** | bottom-sheet's [closeWTransition]boolean | true |  |
| **bottomSheetFooterButtonLayout** | Bottom Sheet layout of `<dbs-button>` elements.
• `stretched` (default): Buttons stretch evenly to fill the row.
• `stacked`: Buttons stack one on top of the other."stretched""stacked" | stretched | stretchedstacked |
| **bottomSheetHeight** | Sets css `height` of the bottom-sheet, sets via ngStyle tied to the `height` css thus you may pass in `'fit-content'` etc.
• this is limited by `[bottomSheetMaxheight]`string |  |  |
| **bottomSheetMaxheight** | Sets css `max-height` of the bottom-sheet where it expands up to, sets via ngStyle tied to the `max-height` css thus you may pass in `'100%'/'100dvh'` etc.
• limits `[bottomSheetHeight]`string | 95vh |  |
| **bottomSheetUpdateHeight** | *(deprecated - IBGT) Do not use*Subject<boolean> |  |  |
| **dropdownFixHeight** | Used to override height calculations and limit height of the dropdown menu in px 48number | 48 |  |
| **emitOnlyValue** | Set to true to make (onSelect) emit only the string `.value` property of the optionboolean | false |  |
| **filterFields** | Indicate fields that to be used for filter. If no value is provided, all fields will be used for filtering.string[] |  |  |
| **hasOverlay** | Sets the dropdown-menu overlayboolean | false |  |
| **hiddenSearch** | forces search to not be displayed via cssboolean | false |  |
| **keepSelectState** | When true will keep the last clicked in selected stateboolean | false |  |
| **matchParentWidth** | `true` to set width of the dropdown-menu to be limited to its parent attached element if you set a number it will limit the max-width in px. min-width is still the parent's width which takes precidence

``max-width:matchParentWidth px;``
booleannumber | false |  |
| **maxHeight** | *(deprecated - IBGT)* use popperGap insteadstring |  |  |
| **maxMenuHeightPx** | Alternative to [maxOptionsHeight] you may set the menu's height by pxnumber | NaN |  |
| **maxOptionsHeight** | Sets the number of options to show not including search and categories.
Works by cutting of at the item, then by the % of the decimal

`3.5 // gets 4th item and calc 0.5 of its height to cutoff display`
number | 3.5 |  |
| **menuParentGap** | *(deprecated - IBGT)*number | 8 |  |
| **mobileBreakpoint** | px width to set bottomsheet trigger pointnumber | 767 |  |
| **mobileHeader** | *(deprecated - IBGT) Use `mobileTitle` instead.*
Title in the header of the bottom-sheet.string | "" |  |
| **mobileOverlay** | Sets the bottom-sheet's overlayboolean | true |  |
| **mobilePlaceholder** | *(deprecated - IBGT) Do not use*string | "" |  |
| **mobileSubHeader** | *(deprecated - IBGT) Use `mobileSubtitle` instead.*
subtitle in the header of the bottom-sheet.string | "" |  |
| **mobileSubtitle** | subtitle for the bottom-sheet header sectionstring | "" |  |
| **mobileTitle** | title for the bottom-sheet header sectionstring | "" |  |
| **popperAlignment** | From `DbsPopperDirective` Alignment of Popper, snap popper edge to trigger's center/sidePopperAlignmentType | side | centerside |
| **popperGap** | From `DbsPopperDirective` Gap between trigger and popper in px, defaulted to 8pxnumber | 8 |  |
| **popperLimitPositions** | From `DbsPopperDirective` set this `string[ ]` to the limited positions you like **in order** this will limit it to flip between these positons ONLY

`limitPositions = ['bottom-start','top-start','bottom','top']`
PopperPositionType[] | ['bottom-start','top-start','bottom','top'] |  |
| **popperOffsetX** | From `DbsPopperDirective` offsets the x position of the popover in px.number | 0 |  |
| **popperOffsetY** | From `DbsPopperDirective` offsets the y position of the popover in px.number | 0 |  |
| **popperPosition** | From `DbsPopperDirective` Position of the calendar pop up with respect to the calendar icon on the input.PopperPositionType | bottom |  |
| **removePadding** | *(deprecated - IBGT)* padding only provided for #defaultOptionsboolean | false |  |
| **searchBar** | *(deprecated - IBGT)Use `showFilter` instead.*boolean | false |  |
| **searchBarPlaceholder** | Placeholder of the dropdowns search inputstring | Search |  |
| **searchValue** | the dbs-search [value] used to retrieve or setstring | "" |  |
| **showDropdown** | Tracks opened state of the dropdownboolean | false |  |
| **showFilter** | Turns the default search in dropdown-menu on or offboolean | false |  |
| **translate** | Used to overwrite the display text for the dropdown
• `no_data_found` -'No results' when no data{ no_data_found: string; } | { no_data_found: 'No results', //'No results' when no data } |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onSelect** | Emits when an option is selectedEventEmitter |  |  |
| **menuClick** | Emits when an option is clickedEventEmitter |  |  |
| **onSearchBarValueChange** | Emits when search value changes, returns:

`return {
 'filterValue': "" //the searched value in the input
 'filterData': [] //the filtered result from values
}`
EventEmitter<literal type> | new EventEmitter<any>() |  |
| **overlayClicked** | Emits when mobile overlay background is clicked
allows you to detect the overlay has been clicked to do other events such as confirm dismiss dialogs.EventEmitter |  |  |
| **showDropdownChange** | Emits when the [showDropdown] changesEventEmitter |  |  |
| **Hide properties itemsproperties** | Hide properties items |  |  |
| **categoryMap** | Map of [values] from result if hasCategoryMap<string | any[]> |  |  |
| **componentHeight** | consider @deprecatedstring | 95vh |  |
| **hasCategory** | Stores the pressence of 'category' key in [values]boolean | false |  |
| **result** | search result from values can be map of categoryName:[] or [value]any |  |  |
| **searchKeyWords** | The keys to search retrieved from the filter filterFields or keys of the 1st [values] objectstring[] | [] |  |
| **stillLoading** | boolean | false |  |
| **subscriptions** | Subscription[] | [] |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **_openDropdownMenuDialog** | () => void |  |  |
| **checkIfHasCategory** | () => void |  |  |
| **emitMenuClick** | to emit when menu is clicked(event: Event) => void |  |  |
| **getSearchKeyWords** | Performed once to retrieve keys to search from [filterFields] or 1st [values] object() => void |  |  |
| **menuHeightCalculator** | Calculates and cuts the option container based on the
• maxMenuHeightPx/dropdownFixHeight/maxOptionsHeight() => void |  |  |
| **parseCategories** | Creates category map , from either passed in filteredData array or result array(filteredData?: literal type[]) => void |  |  |
| **setAllClosed** | Sets all variables to the closed state of the dropdown-menu

this.opened_bottomsheet = false; this.showDropdown = false; this.menuOpen = false; this.showDropdownChange.emit(this.showDropdown); this.unsubscribeAll();() => void |  |  |
| **subscribeToClick** | () => void |  |  |
| **unsubscribeAll** | () => void |  |  |
| **Hide view child itemsview child** | Hide view child items |  |  |
| **adjustmentTarget** | This is the div that holds the dropdown-menu also tied to #dropdownMenuDiv in templateElementRef |  |  |
| **bottomSheet** | DbsBottomSheetComponent |  |  |
| **dropdownItems** | ElementRef |  |  |
| **dropdownMenu** | ElementRef |  |  |
| **dropdownMenuDialog** | ElementRef |  |  |
| **optionElement** | ElementRef |  |  |
| **searchBarContainer** | ElementRef |  |  |
| **searchComponent** | DbsSearchComponent |  |  |
| **selectOptionMobile** | ElementRef |  |  |
| **Hide view children itemsview children** | Hide view children items |  |  |
| **listOption** | QueryList<any> |  |  |
| **Hide content child itemscontent child** | Hide content child items |  |  |
| **footerTemplateRef** | footerTemplate, template reference, allows customisation for the drop down footerTemplateRef<any> |  |  |
| **optionTemplateRef** | optionTemplate, template reference, allows customisation for the drop down itemsTemplateRef<any> |  |  |
| **selectButtonsTopSectionTemplateRef** | selectButtonsTopSectionTemplate specific to multiple select to allows the select all and reset buttons to be inserted between the search bar and drop down items
• does not scroll with the optionsTemplateRef<any> |  |  |
| **selectTemplateRef** | specific to dbs-select multi select to overwrite ng-contentTemplateRef<any> |  |  |
| **topOptionTemplateRef** | topOptionTemplate to allows custom element to be inserted above all the other drop down items
• scrolls with options `html`TemplateRef<any> |  |  |
| **topSectionTemplateRef** | topSectionTemplate to allows custom element to be inserted between the search bar and drop down items
• does not scroll with the optionsTemplateRef<any> |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The focus overlay's main content.HTMLElement | - |  |

# **Search**

# Usage

Import `DbsSearchComponent` into your component or module.

```css
import { DbsSearchComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSearchComponent],
})
```

## **Stories**

**Basic**

```css
<dbs-search  [value]="'Basic search'" ></dbs-search>
```

**Sizes**

```css
<div style="display:flex; flex-direction:column; gap:24px;">
  <dbs-search  [value]="'small size'" [size]="'sm'" ></dbs-search>
  <dbs-search  [value]="'medium size'" [size]="'md'" ></dbs-search>
</div>
```

**Disabled**

```css
<div style="display:flex; flex-direction:column; gap:24px;">
  <dbs-search  [disabled]="true" [value]="'Disabled search with value'" ></dbs-search>
  <dbs-search  [disabled]="true" [placeholder]="'Disabled search with placeholder'" ></dbs-search>
</div>
```

**No Clear Button**

```css
<dbs-search  [value]="'Search with no clear button'" [showClear]="false" ></dbs-search>
```

**Search Filtering**

```css
<dbs-search  [value]="'Item'" [searchkeyWords]="['label','searchValue']" [origData]="[{'id':0,'value':'搜索中文名測試','label':'搜索中文名測試','searchValue':'0'},{'id':1,'value':'ogl36zg','label':'item 1','searchValue':'ogl36zg'},{'id':2,'value':'zoutosv','label':'item 2','searchValue':'zoutosv'},{'id':3,'value':'2z0227e','label':'item 3','searchValue':'2z0227e'},{'id':4,'value':'d0h84ni','label':'item 4','searchValue':'d0h84ni'},{'id':5,'value':'sxzfsv0','label':'item 5','searchValue':'sxzfsv0'},{'id':6,'value':'e8aj7ed','label':'item 6','searchValue':'e8aj7ed'},{'id':7,'value':'u3xms0p','label':'item 7','searchValue':'u3xms0p'},{'id':8,'value':'um3i90h','label':'item 8','searchValue':'um3i90h'},{'id':9,'value':'te52360','label':'item 9','searchValue':'te52360'},{'id':10,'value':'538ponl','label':'item 10','searchValue':'538ponl'},{'id':11,'value':'hp9o7xx','label':'item 11','searchValue':'hp9o7xx'},{'id':12,'value':'nbj8kgb','label':'item 12','searchValue':'nbj8kgb'},{'id':13,'value':'556qhnu','label':'item 13','searchValue':'556qhnu'},{'id':14,'value':'6ltlrol','label':'item 14','searchValue':'6ltlrol'},{'id':15,'value':'4xn6wee','label':'item 15','searchValue':'4xn6wee'},{'id':16,'value':'32k6106','label':'item 16','searchValue':'32k6106'},{'id':17,'value':'kft5oo1','label':'item 17','searchValue':'kft5oo1'},{'id':18,'value':'kxxv2hq','label':'item 18','searchValue':'kxxv2hq'},{'id':19,'value':'cs5sayl','label':'item 19','searchValue':'cs5sayl'},{'id':20,'value':'bj1isy2','label':'item 20','searchValue':'bj1isy2'},{'id':21,'value':'kvyshtz','label':'item 21','searchValue':'kvyshtz'},{'id':22,'value':'01ro50i','label':'item 22','searchValue':'01ro50i'},{'id':23,'value':'oxegdx3','label':'item 23','searchValue':'oxegdx3'},{'id':24,'value':'nvz9vjp','label':'item 24','searchValue':'nvz9vjp'},{'id':25,'value':'4qvqfdl','label':'item 25','searchValue':'4qvqfdl'},{'id':26,'value':'cf1h7r4','label':'item 26','searchValue':'cf1h7r4'},{'id':27,'value':'o5up93s','label':'item 27','searchValue':'o5up93s'},{'id':28,'value':'l7qe1s1','label':'item 28','searchValue':'l7qe1s1'},{'id':29,'value':'ju89y48','label':'item 29','searchValue':'ju89y48'},{'id':30,'value':'xwgxkv8','label':'item 30','searchValue':'xwgxkv8'},{'id':31,'value':'fd8fowl','label':'item 31','searchValue':'fd8fowl'},{'id':32,'value':'5zqhoub','label':'item 32','searchValue':'5zqhoub'},{'id':33,'value':'z9pzqif','label':'item 33','searchValue':'z9pzqif'},{'id':34,'value':'q87pv9i','label':'item 34','searchValue':'q87pv9i'},{'id':35,'value':'wls9aa9','label':'item 35','searchValue':'wls9aa9'},{'id':36,'value':'b3zfvsd','label':'item 36','searchValue':'b3zfvsd'},{'id':37,'value':'bvepr3t','label':'item 37','searchValue':'bvepr3t'},{'id':38,'value':'pf86cmi','label':'item 38','searchValue':'pf86cmi'},{'id':39,'value':'llpzigm','label':'item 39','searchValue':'llpzigm'},{'id':40,'value':'2cue9mo','label':'item 40','searchValue':'2cue9mo'},{'id':41,'value':'7few8fr','label':'item 41','searchValue':'7few8fr'},{'id':42,'value':'vdmfljm','label':'item 42','searchValue':'vdmfljm'},{'id':43,'value':'g8kneni','label':'item 43','searchValue':'g8kneni'},{'id':44,'value':'tv7jcvz','label':'item 44','searchValue':'tv7jcvz'},{'id':45,'value':'vhu294e','label':'item 45','searchValue':'vhu294e'},{'id':46,'value':'qjh5znz','label':'item 46','searchValue':'qjh5znz'},{'id':47,'value':'ldjdg9w','label':'item 47','searchValue':'ldjdg9w'},{'id':48,'value':'76dp3md','label':'item 48','searchValue':'76dp3md'},{'id':49,'value':'3a0yvc2','label':'item 49','searchValue':'3a0yvc2'},{'id':50,'value':'9xy5i1c','label':'item 50','searchValue':'9xy5i1c'},{'id':51,'value':'25gahl4','label':'item 51','searchValue':'25gahl4'},{'id':52,'value':'0v3qbse','label':'item 52','searchValue':'0v3qbse'},{'id':53,'value':'vbhknej','label':'item 53','searchValue':'vbhknej'},{'id':54,'value':'dii9hhi','label':'item 54','searchValue':'dii9hhi'},{'id':55,'value':'n1hzixx','label':'item 55','searchValue':'n1hzixx'},{'id':56,'value':'ypktdvj','label':'item 56','searchValue':'ypktdvj'},{'id':57,'value':'0htmips','label':'item 57','searchValue':'0htmips'},{'id':58,'value':'8zcmeq4','label':'item 58','searchValue':'8zcmeq4'},{'id':59,'value':'oj050xr','label':'item 59','searchValue':'oj050xr'},{'id':60,'value':'6w6nay3','label':'item 60','searchValue':'6w6nay3'},{'id':61,'value':'t79qc1v','label':'item 61','searchValue':'t79qc1v'},{'id':62,'value':'im69pi9','label':'item 62','searchValue':'im69pi9'},{'id':63,'value':'yc13ho2','label':'item 63','searchValue':'yc13ho2'},{'id':64,'value':'1ksaav2','label':'item 64','searchValue':'1ksaav2'},{'id':65,'value':'r8349p0','label':'item 65','searchValue':'r8349p0'},{'id':66,'value':'yul2plo','label':'item 66','searchValue':'yul2plo'},{'id':67,'value':'lrvhjoi','label':'item 67','searchValue':'lrvhjoi'},{'id':68,'value':'srhrqio','label':'item 68','searchValue':'srhrqio'},{'id':69,'value':'ni5t1og','label':'item 69','searchValue':'ni5t1og'},{'id':70,'value':'kn4xz0f','label':'item 70','searchValue':'kn4xz0f'},{'id':71,'value':'m8va7zo','label':'item 71','searchValue':'m8va7zo'},{'id':72,'value':'r2jevdd','label':'item 72','searchValue':'r2jevdd'},{'id':73,'value':'atgd3a3','label':'item 73','searchValue':'atgd3a3'},{'id':74,'value':'2naotlm','label':'item 74','searchValue':'2naotlm'},{'id':75,'value':'kfg96xg','label':'item 75','searchValue':'kfg96xg'},{'id':76,'value':'ts3tzom','label':'item 76','searchValue':'ts3tzom'},{'id':77,'value':'rd716rs','label':'item 77','searchValue':'rd716rs'},{'id':78,'value':'8lcj0mh','label':'item 78','searchValue':'8lcj0mh'},{'id':79,'value':'3r19d35','label':'item 79','searchValue':'3r19d35'},{'id':80,'value':'3es3pzm','label':'item 80','searchValue':'3es3pzm'},{'id':81,'value':'b4abkkh','label':'item 81','searchValue':'b4abkkh'},{'id':82,'value':'norqbfz','label':'item 82','searchValue':'norqbfz'},{'id':83,'value':'zmjccas','label':'item 83','searchValue':'zmjccas'},{'id':84,'value':'mvp6tgz','label':'item 84','searchValue':'mvp6tgz'},{'id':85,'value':'03xufm5','label':'item 85','searchValue':'03xufm5'},{'id':86,'value':'gm7idu8','label':'item 86','searchValue':'gm7idu8'},{'id':87,'value':'6tnabnw','label':'item 87','searchValue':'6tnabnw'},{'id':88,'value':'m0es250','label':'item 88','searchValue':'m0es250'},{'id':89,'value':'vnohrhd','label':'item 89','searchValue':'vnohrhd'},{'id':90,'value':'0hrsvka','label':'item 90','searchValue':'0hrsvka'},{'id':91,'value':'ey95hkx','label':'item 91','searchValue':'ey95hkx'},{'id':92,'value':'oxla7c3','label':'item 92','searchValue':'oxla7c3'},{'id':93,'value':'mkszsp9','label':'item 93','searchValue':'mkszsp9'},{'id':94,'value':'h95cu1v','label':'item 94','searchValue':'h95cu1v'},{'id':95,'value':'0p7bewz','label':'item 95','searchValue':'0p7bewz'},{'id':96,'value':'xcfu8d3','label':'item 96','searchValue':'xcfu8d3'},{'id':97,'value':'ve0zu3w','label':'item 97','searchValue':'ve0zu3w'},{'id':98,'value':'qdm7zn8','label':'item 98','searchValue':'qdm7zn8'},{'id':99,'value':'0gn9evo','label':'item 99','searchValue':'0gn9evo'}]" (filterDataChange)="filteredData=$event;args?.filterDataChange($event)"></dbs-search>
<h4>Search Results:{{ filteredData.length }}</h4>
<dbs-table [data]="filteredData" [columns]="columns" [stickyHeader]="true" style="width: 100%; height: 300px;"></dbs-table>
```

API Reference

```css
<dbs-search  [placeholder]="'Search'" ></dbs-search>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **placeholder** | Placeholder stringstring | "" |  |
| **disabled** | The disabled state of the inputboolean | false |  |
| **origData** | The original data array to be searched throughany[] |  |  |
| **searchId** | id attached to the input element for labelsstring |  |  |
| **searchkeyWords** | Array of key values to be filteredstring[] | [] |  |
| **showClear** | Show or hide the clear value buttonboolean | true |  |
| **size** | Size of the search bar.
*Note: `small`, `medium`, `large`, and `normal` values are deprecated.*"sm""md""small""medium""large""normal" | md | Choose option...smmdsmallmediumlargenormal |
| **value** | value in the input fieldstring | "" |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **backgroundColor** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **clearBtn** | *(deprecated - IBGT) Use `showClear` instead.*boolean | false |  |
| **placeHolder** | *(deprecated - IBGT, ODS) Use `placeholder` instead.*string |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **clear** | Emits when value is clearedEventEmitter |  |  |
| **filterDataChange** | Emits the filteredData arrayEventEmitter |  |  |

# **Tabs**

The `<dbs-tabs>` is our parent component to contain the child `<dbs-tab>` components

# Usage

Import both `TabsComponent` and `TabComponent` .

```css
import { TabsComponent , TabComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [
    TabsComponent,
    TabComponent],
}) 
```

## **Stories**

**Basic**`[variant]="'default'"`

```css
<dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
  
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab1'" [count]="11">
    <div [style.padding-top.px]="16">
      Tab 1 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">
      Tab 2 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 3 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'" >
    <div [style.padding-top.px]="16">
      Tab 4 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 5 content here
    </div>
  </dbs-tab>
</dbs-tabs>
```

### **Filter**

```
[variant]="'filter'"
```

```html
<dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
  
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab1'" [count]="11">
    <div [style.padding-top.px]="16">
      Tab 1 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">
      Tab 2 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 3 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'" >
    <div [style.padding-top.px]="16">
      Tab 4 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 5 content here
    </div>
  </dbs-tab>
</dbs-tabs>
```

### **Switch**

```
[variant]="'switch'"
```

```html
<dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
  
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab1'" [count]="11">
    <div [style.padding-top.px]="16">
      Tab 1 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">
      Tab 2 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 3 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'" >
    <div [style.padding-top.px]="16">
      Tab 4 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 5 content here
    </div>
  </dbs-tab>
</dbs-tabs>
```

### **Sub Tab**

```
[variant]="'sub-tab'"
```

```html
<dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
  
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab1'" [count]="11">
    <div [style.padding-top.px]="16">
      Tab 1 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">
      Tab 2 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 3 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'" >
    <div [style.padding-top.px]="16">
      Tab 4 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 5 content here
    </div>
  </dbs-tab>
</dbs-tabs>
```

### **Twoline**

`[twoline]="true"`. Works only when tabs menus overflow and are scrollable.

```html
<div [style.width.px]="400">
  <dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
    
    <dbs-tab  [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11" >
      <div [style.padding-top.px]="16">
        Tab 1 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'"  >
      <div [style.padding-top.px]="16">
        Tab 2 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 3 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 4 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 5 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 6'" [tabTitle]="'Tab 6'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 6 content here
      </div>
  </dbs-tab>  
  </dbs-tabs>  
</div>
```

### **Scroll**

Tabs are scrollable when viewport becomes smaller and tab menu overflows

```html
<div [style.width.px]="400">
  <dbs-tabs  [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
    
    <dbs-tab  [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11" >
      <div [style.padding-top.px]="16">
        Tab 1 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
      <div [style.padding-top.px]="16">
        Tab 2 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 3 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 4 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 5 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 6'" [tabTitle]="'Tab 6'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 6 content here
      </div>
    </dbs-tab>  
  </dbs-tabs>  
</div>
```

**Custom Tab**

```tsx
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  viewChild,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  TabsComponent,
  TabComponent,
  DbsSvgIconComponent,
  DbsBadgeComponent,
  DbsTagComponent,
} from "../../../../public-api";

@Component({
  selector: "dbs-custom-tabs-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsButtonComponent,
    TabsComponent,
    TabComponent,
    DbsSvgIconComponent,
    DbsBadgeComponent,
    DbsTagComponent,
  ],
  templateUrl: "custom-tabs.components.html",
  styleUrl: `custom-tabs.components.scss`,
  // encapsulation: ViewEncapsulation.None,
})
export class CustomTabsComponent {
  isDisplayed = false;

  tabSelected(event: any) {
    console.log(event);
  }

  customTabs = [
    {
      tabTitle: "Custom Tab 1",
      tabId: "Custom Tab 1",
      count: 11,
      iconName: "heart",
      newAddition: "cup",
    },
    {
      tabTitle: "Custom Tab 2",
      tabId: "Custom Tab 2",
      count: 11,
      iconName: "heart",
      newAddition: "heart",
    },
    {
      tabTitle: "Custom Tab 3",
      tabId: "Custom Tab 3",
      count: 11,
      iconName: "cup",
      newAddition: "pulse",
    },
  ];
}
```

```html
<h4>Custom Tabs</h4>
<dbs-tabs
  [twoline]="false"
  [variant]="'default'"
  [defaultTab]="1"
  [padding]="16"
  (onSelect)="tabSelected($event)"
>
  <ng-container *ngFor="let tab of customTabs">
    <dbs-tab [template]="template" [tabTemplate]="tab">
      <div [style.padding-top.px]="16">{{tab.tabTitle}}'s content</div>
    </dbs-tab>
  </ng-container>
</dbs-tabs>

<ng-template #template let-tabTemplate="tabTemplate">
  <svg-icon
    *ngIf="tabTemplate?.newAddition"
    class="icon"
    [iconName]="tabTemplate?.newAddition"
  ></svg-icon>
  <svg-icon
    *ngIf="tabTemplate.iconName"
    class="icon"
    [iconName]="tabTemplate.iconName"
  ></svg-icon>
  {{tabTemplate.tabTitle}}
  <dbs-badge
    priority="low"
    *ngIf=" tabTemplate.count && tabTemplate.count>=0"
    >{{ tabTemplate?.count }}</dbs-badge
  >
  <dbs-tag [status]="'success'" [variant]="'dot'"> </dbs-tag>
</ng-template>
```

### **Size Tab**

Size input only works for `[variant]="'default'"` and `[variant]="'filter'"`.

Use `size` input with either 'md' (default) or 'sm'.

```tsx
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  viewChild,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DbsButtonComponent,
  TabsComponent,
  TabComponent,
  DbsSvgIconComponent,
  DbsBadgeComponent,
} from "../../../../public-api";

@Component({
  selector: "dbs-size-tabs-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsButtonComponent,
    TabsComponent,
    TabComponent,
    DbsSvgIconComponent,
    DbsBadgeComponent,
  ],
  templateUrl: "size-tabs.components.html",
  styleUrl: `size-tabs.components.scss`,
})
export class SizeTabsComponent {
  isDisplayed = false;

  tabSelected(event: any) {
    console.log(event);
  }
}
```

```html
<h4>Variant: Default</h4>
<h5>Small</h5>
<dbs-tabs
  [size]="'sm'"
  [defaultTab]="1"
  [padding]="16"
  (onSelect)="tabSelected($event)"
>
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11">
    <div [style.padding-top.px]="16">Tab 1 content here</div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">Tab 2 content here</div>
  </dbs-tab>
  <dbs-tab
    [tabId]="'Tab 3'"
    [tabTitle]="'Tab 3'"
    [count]="12"
    [iconName]="'heart'"
  >
    <div [style.padding-top.px]="16">Tab 3 content here</div>
  </dbs-tab>
</dbs-tabs>

<h5>Medium</h5>
<dbs-tabs
  [size]="'md'"
  [defaultTab]="1"
  [padding]="16"
  (onSelect)="tabSelected($event)"
>
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11">
    <div [style.padding-top.px]="16">Tab 1 content here</div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">Tab 2 content here</div>
  </dbs-tab>
  <dbs-tab
    [tabId]="'Tab 3'"
    [tabTitle]="'Tab 3'"
    [count]="12"
    [iconName]="'heart'"
  >
    <div [style.padding-top.px]="16">Tab 3 content here</div>
  </dbs-tab>
</dbs-tabs>

<h4>Variant: Filter</h4>
<h5>Small</h5>
<dbs-tabs
  [size]="'sm'"
  [variant]="'filter'"
  [defaultTab]="1"
  [padding]="16"
  (onSelect)="tabSelected($event)"
>
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11">
    <div [style.padding-top.px]="16">Tab 1 content here</div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">Tab 2 content here</div>
  </dbs-tab>
  <dbs-tab
    [tabId]="'Tab 3'"
    [tabTitle]="'Tab 3'"
    [count]="12"
    [iconName]="'heart'"
  >
    <div [style.padding-top.px]="16">Tab 3 content here</div>
  </dbs-tab>
</dbs-tabs>

<h5>Medium</h5>
<dbs-tabs
  [size]="'md'"
  [variant]="'filter'"
  [defaultTab]="1"
  [padding]="16"
  (onSelect)="tabSelected($event)"
>
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11">
    <div [style.padding-top.px]="16">Tab 1 content here</div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">Tab 2 content here</div>
  </dbs-tab>
  <dbs-tab
    [tabId]="'Tab 3'"
    [tabTitle]="'Tab 3'"
    [count]="12"
    [iconName]="'heart'"
  >
    <div [style.padding-top.px]="16">Tab 3 content here</div>
  </dbs-tab>
</dbs-tabs>
```

### **Deprecated Size Class**

Please do not use. `class` 'small' or 'compact' is still attached to dbs-tabs, but to be deprecated. Use `[size]` input instead.

```html
<div [style.width.px]="400">
  <dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" [class]="class" (onSelect)="onSelect($event)">
    
    <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab 1'" [count]="11" >
      <div [style.padding-top.px]="16">
        Tab 1 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
      <div [style.padding-top.px]="16">
        Tab 2 content here
      </div>
    </dbs-tab>
    <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 3 content here
      </div>
    </dbs-tab>  
    <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'">
      <div [style.padding-top.px]="16">
        Tab 4 content here
      </div>
    </dbs-tab>  
  </dbs-tabs>  
</div>
```

**API Reference**

```html
<dbs-tabs [defaultTab]="defaultTab" [variant]="variant" [twoline]="twoline" [size]="size" [padding]="padding" (onSelect)="onSelect($event)">
  
  <dbs-tab [tabId]="'Tab 1'" [tabTitle]="'Tab1'" [count]="11">
    <div [style.padding-top.px]="16">
      Tab 1 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 2'" [tabTitle]="'Tab 2'">
    <div [style.padding-top.px]="16">
      Tab 2 content here
    </div>
  </dbs-tab>
  <dbs-tab [tabId]="'Tab 3'" [tabTitle]="'Tab 3'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 3 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 4'" [tabTitle]="'Tab 4'" [count]="12" [iconName]="'heart'" >
    <div [style.padding-top.px]="16">
      Tab 4 content here
    </div>
  </dbs-tab>  
  <dbs-tab [tabId]="'Tab 5'" [tabTitle]="'Tab 5'" [count]="12" [iconName]="'heart'">
    <div [style.padding-top.px]="16">
      Tab 5 content here
    </div>
  </dbs-tab>
</dbs-tabs>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **defaultTab** | Set active tab based on tabId of tab-component. If the value of defaultTab is truthy but does not match the tabId of any tab-component, the first tab will be set to active; otherwise none of the tabs will be set to active by default.any |  |  |
| **variant** | Type of tabs. Replaces type"default""filter""switch""sub-tab" | default | defaultfilterswitchsub-tab |
| **twoline** | If true, the any tab-component with a newline character in its tabTitle will be displayed in two lines. Only applies for 'default' tabs and when tab menu overflows.boolean | false | [ ] |
| **size** | Size of the tabs. Only applicable for type 'default' and 'filter' Use of class = 'small' or 'compact' to be deprecated"md""sm" | md | mdsm |
| **padding** | Set padding-left and padding-right values by attaching the respective utility class. Only accepts 4, 8, 12, 16, 20, 24, 32."0""4""8""12""16""20""24""32" | 0 | Choose option...0481216202432 |
| **showElevation** | If true, shows elevation underneath the tab groupelement. Only applies for 'default' tabs.
boolean | true |  |
| **showTabContent** | Shows or hides the tab content allowing use of the tab without content trueboolean | true |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **type** | *(deprecated - IBGT) Use `variant` instead.*
Type of tab as shown: 'default' (previously 'bottom-border') 'filter' (previously 'grey') 'switch' (previously 'grey-inverted')
Types 'bottom-border', 'grey' and 'grey-inverted' have been deprecated and will be removed in future"default""filter""switch""bottom-border""grey""grey-inverted" | default | Choose option...defaultfilterswitchbottom-bordergreygrey-inverted |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onSelect** | Can be used to execute a callback function whenever a tab is selectedEventEmitter |  |  |