# DBS Angular Part 17

# **Focus Overlay**

The `dbs-focus-overlay` uses the HTML `dialog` element allowing it to show at the top layer of the application

# Usage

Import `DbsFocusOverlayComponent` into your component or module.

```tsx
import { DbsFocusOverlayComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsFocusOverlayComponent],
})
```

## **Stories**

### **Basic**

Similar to `dbs-modal` the `dbs-focus-overlay` can run the `HTMLDialogElement`'s `showModal()` and `show()` functions.

To open the focus overlay

- Use either `#templateVariable.showFocusOverlay()` or
- `[opened]`
- DO NOT USE BOTH AT ONCE

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>Show Focus Overlay</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)"
  >
    demo content
  
  </dbs-focus-overlay>
</div>
```

### **Top Layer**

Input `topLayer` to `false` to run the `HTMLDialogElement`'s `show()` function instead. Spawning within the component.

- `[overlay]=false` to prevent the overlay from showing

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>Show Focus Overlay</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [topLayer]="topLayer" [overlay]="overlay" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)"
  >
    demo content
  
  </dbs-focus-overlay>
</div>
```

### **Dismissible**

`dismissible` to `false` will make the focus overlay non-dismissible. Only running of the `.close()` function or setting of `opened` will close it

Prevents closing via

- Overlay click
- Escape key
- Default close button

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>showFocusOverlay</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [dismissible]="dismissible" (overlayClicked)="overlayClicked($event)" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)"
  >
    
    <dbs-button (click)='focusOverlay.close()'>focusOverlay.close()</dbs-button>
  
  </dbs-focus-overlay>
</div>
```

### **Opened Input Demo**

This uses the `opened` input boolean to set if the focus overlay shows

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  opened: {{opened}}
  <dbs-button (click)='opened=true'>opened=true</dbs-button>
  <dbs-focus-overlay (openedChange)='opened=$event' [title]="title" [opened]="opened" [topLayer]="topLayer" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" 
  >
    
    <dbs-button (click)='opened=false'>opened=false</dbs-button>
  
  </dbs-focus-overlay>
</div>
```

### **Header Demo**

This uses the included `dbs-focus-overlay-header` component built into the focus overlay and its `ng-content` projections

- note the DLS dictated styles for the icon in the header

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>focusOverlay.showFocusOverlay()</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [opened]="opened" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" 
  >
    <div [style.display]='"flex"' headerStartSlot>
    <!-- Styles below defined by DLS -->
    <style>
    svg-icon{
      background-color: var(--color-crimson-00);
      fill: var(--color-data-red-80);
      border-radius: 50%;
      padding: var(--size-8)
    }
    </style>
    <!-- Styles above defined by DLS -->
    <svg-icon 
      iconName='key' 
      fill='red' >
      </svg-icon>
    </div>
    <dbs-icon-button
      variant="standard"
      size="sm"
      aria-label="Close dialog"
     headerEndSlot
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_16_1157)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM11.9757 7.24935C12.7663 7.21503 13.5398 7.4897 14.1319 8.01605C14.7331 8.55046 15.0986 9.30094 15.1486 10.1038C15.1495 10.1193 15.15 10.1348 15.15 10.1504C15.15 10.6561 15.0147 11.1527 14.7582 11.5886C14.5017 12.0245 14.1333 12.3839 13.6912 12.6295L12.3642 13.3667C12.0022 13.5679 11.5456 13.4374 11.3444 13.0753C11.1432 12.7132 11.2737 12.2566 11.6358 12.0555L12.9628 11.3182L12.9628 11.3182C13.1711 11.2025 13.3446 11.0332 13.4655 10.8279C13.5824 10.6292 13.6458 10.4037 13.6498 10.1734C13.6189 9.77477 13.4347 9.40321 13.1353 9.13716C12.8301 8.86586 12.43 8.72628 12.0223 8.74885C11.9981 8.75019 11.9739 8.75036 11.9497 8.74935C11.5785 8.73394 11.2136 8.84867 10.9179 9.07372C10.6223 9.29876 10.4146 9.62 10.3306 9.98193C10.237 10.3854 9.83398 10.6366 9.43049 10.543C9.02699 10.4494 8.77579 10.0464 8.86941 9.6429C9.03239 8.94045 9.4356 8.31698 10.0094 7.88019C10.5735 7.45073 11.2677 7.22827 11.9757 7.24935ZM11.25 16C11.25 15.5858 11.5858 15.25 12 15.25H12.01C12.4242 15.25 12.76 15.5858 12.76 16C12.76 16.4142 12.4242 16.75 12.01 16.75H12C11.5858 16.75 11.25 16.4142 11.25 16Z"
            fill="#69737B"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_1157">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </dbs-icon-button>
    <p headerBottomSlot> headerBottomSlot content</p>
    
    <dbs-button (click)='focusOverlay.close()'>focusOverlay.close()</dbs-button>
  </dbs-focus-overlay>
</div>
```

### **Fully Custom Header Demo**

This uses the fully custom `headerSlot` selector built into the focus overlay and its `ng-content` projections

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>focusOverlay.showFocusOverlay()</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [opened]="opened" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" 
  >
    <h2 headerSlot>Fully custom</h2>
    
    <dbs-button (click)='focusOverlay.close()'>focusOverlay.close()</dbs-button>
  </dbs-focus-overlay>
</div>
```

### **Footer Demo**

This uses the `<dbs-focus-overlay-footer>` along with the `footerSlot` selector to display the footer. `<dbs-focus-overlay-footer>` component and its slots are not built-in as they are not required by default.

Note that when the buttons are arranged horizontally, they appear from right to left, with the first button (typically the primary button) appearing on the right.

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>focusOverlay.showFocusOverlay()</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [opened]="opened" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" 
  >
    
    <dbs-button (click)='focusOverlay.close()'>focusOverlay.close()</dbs-button>
    <dbs-focus-overlay-footer footerSlot [fullWidth]="fullWidth" [mobileButtonLayout]="'stretched'">
      <div footerStartSlot>startSlot</div>
      <dbs-button footerEndSlot variant="primary">Next</dbs-button>
      <dbs-button footerEndSlot>Cancel</dbs-button>
    </dbs-focus-overlay-footer>
  </dbs-focus-overlay>
</div>
```

### **Fully Custom Footer Demo**

This uses just the `footerSlot` to customise the footer fully

```tsx
<div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>focusOverlay.showFocusOverlay()</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" [opened]="opened" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" 
  >
    
    <dbs-button (click)='focusOverlay.close()'>focusOverlay.close()</dbs-button>
    <div footerSlot >
      Fully Custom Footer
    </div>
  </dbs-focus-overlay>
</div>
```

**Input Components Demo**

```tsx
<dbs-button (click)="overlay.showFocusOverlay()">
  Show Focus Overlay
</dbs-button>
<dbs-focus-overlay #focusOverlay  #overlay>
  
<div [style.padding.px]="24" [style.display]="'flex'" [style.gap.px]="24" [style.flex-direction]="'column'">
<div [style.display]="'flex'" [style.align-items]="'center'">
  <label>tooltip</label>
  <span class="icon icon__info--straight"
    dbsTooltip [tooltipPosition]="'top'" [tooltipTitle]="'tooltipTitle'" [tooltipText] ="'tooltipText'">
  </span>
</div>
<dbs-button (click)="dialog.showDialog()">Show modal</dbs-button>
<dbs-modal [title]="'Modal title'" [subtitle]="'Modal subtitle'" #dialog>
  <style>
    .modal-content {
      padding: 24px;
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
<dbs-button [style.padding-top.px]="24" #btn1  (click)="popover.openPopover(btn1)" >
  Open Popup
</dbs-button>
<dbs-popover #popover >
  <div popoverHeader>Popover Header</div>
  <div popoverContent>
    A popover is a more flexible component that can display content with various
    layouts.
  </div>
  <div popoverFooter>
    <dbs-button >Footer Btn</dbs-button>
  </div>
</dbs-popover>  
<dbs-input [fieldLabel]='"Input"' [type]="'text'"></dbs-input>
<dbs-input-stepper [fieldLabel]='"Input"' ></dbs-input-stepper>

<div>
  <dbs-field-label>textarea</dbs-field-label>
  <dbs-textarea ></dbs-textarea>
</div>
<dbs-monthpicker [fieldLabel]='"Monthpicker"' [quickSelect]="true"></dbs-monthpicker>
<dbs-calendar [fieldLabel]='"Calendar"' [quickSelect]="true"></dbs-calendar>
<dbs-calendar-input [fieldLabel]='"Calendar Input"'></dbs-calendar-input>
<div>
  <dbs-field-label>select</dbs-field-label>
  <dbs-select #select [values]="values" (onSelect)="onSelect()"></dbs-select>
</div>
<dbs-button 
      (click)="
      snackbars=[{  message: 'This is a top-layer demo', status: 'success' }]"
    >
    Show snackbar container
    </dbs-button>
    <dbs-button 
      (click)="
      snackbars=snackbars.concat([{  message: 'This is a top-layer demo', status: 'success' }])"
    >
    add snackbar container
    </dbs-button>
    <p>Snackbar Container is at top-layer</p>
   
</div>

  </dbs-focus-overlay>
  <dbs-snackbar-container 
    [(snackbars)]="snackbars"
  ></dbs-snackbar-container>
  
  

```

**API Reference**

```tsx
  <div [style.height.px]="500" [style.border]="'none'">
  <dbs-button (click)='focusOverlay.showFocusOverlay()'>Show Focus Overlay</dbs-button>
  <dbs-focus-overlay #focusOverlay [title]="title" (closeBtnPressed)="closeBtnPressed($event)" (openChange)="openChange($event)" (openDialog)="openDialog($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)"
  >
    demo content
  </dbs-focus-overlay>
</div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **title** | The title of the Focus Overlay in the header.string | "" |  |
| **dialogId** | ID of the dialog used to retrieve the dialog element for showModal() functionsstring |  |  |
| **dismissible** | Allows the Focus Overlay to be closed by clicking the overlay, Escape keydown or close button in header.
• uses the [attr.closedby]='none' to limit the closing of dialog via the escape keyboolean | true |  |
| **fullWidth** | Allows the header, body and footer to go beyond 1200px/75rem max-width.boolean | false |  |
| **opened** | Shows/hides the Focus Overlay.boolean | false |  |
| **overlay** | Shows/hides the overlay.boolean | true |  |
| **scrollLock** | Locks scroll via dbs-overlayboolean | false |  |
| **topLayer** | Sets if focus overlay's dialog is added to the top layer and the accessibility treeboolean | true |  |
| **zIndex** | The z-index value of the overlay. Can be adjusted to place the Focus Overlay over or under other elements in the page.numberstring | 800 |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The focus overlay's main content.HTMLElement | - |  |
| **headerSlot** | The focus overlay's header content. For full customisationsHTMLElement | - |  |
| **headerStartSlot** | The focus overlay's header's start content.HTMLElement | - |  |
| **headerEndSlot** | The focus overlay's header's end content.HTMLElement | - |  |
| **headerBottomSlot** | The focus overlay's header's bottom content.HTMLElement | - |  |
| **footerSlot** | The focus overlay's footer content. For `dbs-focus-overlay-footer` or full customisationsHTMLElement | - |  |
| **Hide properties itemsproperties** | Hide properties items |  |  |
| **dialogElement** | The dialog HTMLElement in the componentHTMLDialogElement |  |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **open** | *(deprecated) Replaced by `[opened]`.* IBGT Deprecated Shows/hides the Focus Overlay. @deprecatedboolean | false |  |
| **openChange** | *(deprecated) Replaced by `[openedChange]`.*
IBGT Deprecated 2 way binds the [open] inputEventEmitter |  | [x] |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **closeBtnPressed** | IBGT close button specific emitterEventEmitter |  |  |
| **openDialog** | EventEmitter |  |  |
| **openedChange** | 2 way binds the [opened] inputEventEmitter |  |  |
| **overlayClicked** | Emits when overlay background is clicked
allows you to detect the overlay has been clicked to do other events such as confirm dismiss dialogs.
For dismiss confirmation dialogs, please set `[dismissible]=false` to prevent closing and handle the closing manually on your app. Via the `.close()` function.EventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **close** | Function to force close the dialog from anywhere() => void |  |  |
| **setOpen** | for IBGT setOpen() migration to be @deprecated(open?: boolean, closebuttonPressed: ) => void |  |  |
| **show** | Function to run the dialog element's .show(). Spawns within parent component() => void |  |  |
| **showFocusOverlay** | Function to dynamically show dialog. Runs topLayer check to run either `showModal()` or `show()`() => void |  |  |
| **showModal** | Function to run the dialog element's .showModal(). Spawns at #top-layer() => void |  |  |