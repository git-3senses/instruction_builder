# DBS Angular Part 13

# **Information Banner**

## Usage

Import `DbsInformationBannerComponent` into your component or module.

```tsx
import { DbsInformationBannerComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsInformationBannerComponent],
})
```

## **Stories**

### **Basic**

```tsx
<dbs-information-banner  [variant]="'warning'" [title]="'This is a demo title'" [description]="'This is a demo description that describes this demo information banner component that is of a warning type.'" [dismissible]="true" ></dbs-information-banner>
```

### **Demo**

A basic information banner has a title, description and 4 variants ('success', 'info', 'warning', 'error').

```tsx
<dbs-information-banner  [variant]="'success'" [title]="'This is a success title'" [description]="'This is a success description.'" ></dbs-information-banner>
<br>
<dbs-information-banner  [variant]="'info'" [title]="'This is a info title'" [description]="'This is a info description.'" ></dbs-information-banner>
<br>
<dbs-information-banner  [variant]="'warning'" [title]="'This is a warning title'" [description]="'This is a warning description.'" ></dbs-information-banner>
<br>
<dbs-information-banner  [variant]="'error'" [title]="'This is a error title'" [description]="'This is a error description.'" ></dbs-information-banner>
<br>
```

### **Without Description**

Description can be ommitted from the message content.

```tsx
<dbs-information-banner  [variant]="'warning'" [title]="'This is an information banner without description'" ></dbs-information-banner>
```

### **Without Title**

Title can be ommitted from the message content.

```tsx
<dbs-information-banner  [variant]="'warning'" [description]="'This is an information banner without title'" ></dbs-information-banner>
```

### **Only Custom Content**

Full `ng-content`.

```tsx
<dbs-information-banner  [variant]="'info'" >
<div>
Review did not show any discriminatory words or phrases in the job description that would violate <dbs-link>TAFEP guidelines</dbs-link>. 
The job description focuses on the required skills, experience, and responsibilities for the role.
</div>
</dbs-information-banner>
```

### **With Actions**

Action buttons can also be added to the information banner via `ng-content`

```tsx
<dbs-information-banner  [variant]="'info'" [title]="'This is a demo with actions'" [description]="'This is a demo with actions description'" >
<div>
  <dbs-button size="sm">Label</dbs-button>
</div>
</dbs-information-banner>
```

### **Icon Slot**

The `iconSlot` selector can be used to customise the icon

```tsx
<dbs-information-banner  [variant]="'info'" [title]="'This is a demo with custom icon'" [description]="'This is a demo with custom icon description'" >
<svg-icon iconSlot iconName="comment-pencil" fill="var(--color-info)">
</svg-icon>
</dbs-information-banner>
```

**API Reference**

```tsx
<dbs-information-banner  [variant]="'warning'" [title]="'This is a demo title'" [description]="'This is a demo description that describes this demo information banner component that is of a warning type.'" [dismissible]="true" ></dbs-information-banner>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **variant** | Applies styling on the banner. Use the following options: 'success', 'info', 'error', 'warning'"success""info""error""warning" |  |  |
| **title** | Title of the information bannerstring |  |  |
| **description** | Message in the information bannerstring |  |  |
| **dismissible** | Enable close button, defaulted to trueboolean | true | [x] |
| **opened** | Sets whether the info banner should be displayed.boolean | true |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **closable** | *(deprecated - IBGT) Use `dismissible` instead.*boolean | false |  |
| **message** | *(deprecated) Replaced by `description`.*
Message in the information banner_string |  |  |
| **status** | *(deprecated) Replaced by `variant`.*
Applies styling on the banner. Use the following options: 'success', 'info', 'medium', 'warning'_string |  |  |
| **displayInformationDialogEmitter** | *(deprecated - IBGT) Replaced by `openedChange`.*EventEmitter |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when `opened` changes.EventEmitter<boolean> | new EventEmitter() |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The information banner's message content.HTMLElement | - |  |
| **[iconSlot]** | Used to customise the information banner's icon.HTMLElement | - |  |

# **Drawer**

# Usage

Import `DbsDrawerComponent` into your component or module.

```tsx
import { DbsDrawerComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsDrawerComponent],
})
```

## **Stories**

**Basic**

```tsx
<div [ngStyle]='{minHeight:"500px"}'>
  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" (onBack)="onBack($event)" (openedChange)="openedChange($event)"
    (openedChange)='opened=$event'
  >
    
    <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

### **Overlay**

Set the overlay visibility via `overlay`

```tsx
<div [ngStyle]='{minHeight:"500px"}'>
  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" (onBack)="onBack($event)" (openedChange)="openedChange($event)"
    (openedChange)='opened=$event'
  >
    
    <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

### **Dismissible**

You can prevent closing of the drawer via outside clicks and the close icon button with `dismissible`

- you can then set your own close function call

```tsx
<div [ngStyle]='{minHeight:"500px"}'>
  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" (onBack)="onBack($event)" (openedChange)="openedChange($event)"
    (openedChange)='opened=$event'
  >
  <dbs-button (click)="drawer.setOpened(false)">Force close</dbs-button>

    
    <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

**With Footer**

```tsx
<div [ngStyle]='{minHeight:"500px"}'>

  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  
  (openedChange)='opened=$event'
  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" (onBack)="onBack($event)" (openedChange)="openedChange($event)">
  
<dbs-drawer-footer footerSlot>
  <div startSlot>
    startSlot for footer
  </div>
  <dbs-button endSlot>Cancel</dbs-button>
  <dbs-button endSlot variant="primary">Next</dbs-button>
</dbs-drawer-footer>

    <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

### **With Everything**

Here we use full customised `defaultSlot` `headerStartSlot` `headerTitleSlot` `headerEndSlot` `footerSlot`

- for `headerStartSlot` **DLS dictates an 8px gap from the other header content**
- for `headerStartSlot` **DLS dictates any button to have a -8px margin-left**

```tsx
  <div [ngStyle]='{minHeight:"500px"}'>
  
    <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
    <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
    <dbs-drawer #drawer  
    (openedChange)='opened=$event'
    [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" [subtitle]="subtitle" (onBack)="onBack($event)" (openedChange)="openedChange($event)">
    <div> Content with no selector</div><div headerTitleSlot><dbs-badge priority="high">88</dbs-badge></div>
<dbs-icon-button
  size="sm"
  aria-label="Share"
  headerEndSlot
  (click)="onClick($event)"
>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2.25C12.1989 2.24998 12.3897 2.329 12.5303 2.46967L15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033C15.2374 6.82322 14.7626 6.82322 14.4697 6.53033L12.75 4.81066V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V4.81109L9.53142 6.53024C9.23857 6.82318 8.7637 6.82326 8.47076 6.53042C8.17782 6.23757 8.17774 5.7627 8.47058 5.46976L11.4696 2.46976C11.6102 2.32907 11.801 2.25002 11.9999 2.25ZM3.25 12C3.25 10.4808 4.48079 9.25 6 9.25H8C8.41421 9.25 8.75 9.58579 8.75 10C8.75 10.4142 8.41421 10.75 8 10.75H6C5.30921 10.75 4.75 11.3092 4.75 12V19C4.75 19.6908 5.30921 20.25 6 20.25H18C18.6908 20.25 19.25 19.6908 19.25 19V12C19.25 11.3092 18.6908 10.75 18 10.75H16C15.5858 10.75 15.25 10.4142 15.25 10C15.25 9.58579 15.5858 9.25 16 9.25H18C19.5192 9.25 20.75 10.4808 20.75 12V19C20.75 20.5192 19.5192 21.75 18 21.75H6C4.48079 21.75 3.25 20.5192 3.25 19V12Z" fill="var(--color-icon-active)"
  />
</svg>
</dbs-icon-button>
  <dbs-drawer-footer footerSlot [mobileButtonLayout]="'stacked'">
    <div startSlot>
      startSlot for footer
    </div>
    <dbs-button endSlot>Cancel</dbs-button>
    <dbs-button endSlot variant="primary">Next</dbs-button>
  </dbs-drawer-footer>
  
      <dbs-button
          (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
        >
        Show snackbar
        </dbs-button>
        <p>Snackbar is declared here, but its render is moved to the HTML body</p>
        
    </dbs-drawer>
    
  </div>
  <dbs-snackbar-container
    [style.z-index]='drawer.zIndex + 20'
    [moveToDocument]
    [snackbars]="snackbars"
  ></dbs-snackbar-container>
```

### **With Move To Document**

With the `DbsMoveToDocumentDirective` the drawer will spawn as the last child of the document.body

```tsx
<div [ngStyle]='{minHeight:"500px"}'>

  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  
  (openedChange)='opened=$event'
  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" [moveToDocument]="moveToDocument" (onBack)="onBack($event)" (openedChange)="openedChange($event)">
  
    <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

### **IBGT Deprecated Demo**

Note: `additionalIcons` in this demo is deprecated. Please do not use this in your code.

- This demo is only for reference for past work if needed.
- `setOpen(boolean)` is now `setOpened(boolean)`

```tsx
  <div [ngStyle]='{minHeight:"500px"}'>
  <dbs-button (click)="drawer.setOpened(true)">Open Drawer with setOpened</dbs-button>
    
  <dbs-drawer #drawer  
  (openedChange)='opened=$event'
    [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" [showBackBtn]="showBackBtn" [showOverlay]="showOverlay" [badge]="badge" [subtitle]="subtitle" (onBack)="onBack($event)" (openedChange)="openedChange($event)"
  >
    <div additionalIcons>
      <button class="btn btn__icon small">
        <span class="icon icon__share"></span>
      </button>
      <button class="btn btn__icon small" (click)="drawer.setOpen()">
        <span class="icon icon__close"></span>
      </button>
    </div>
    Add some content here.
  </dbs-drawer>
</div>
```

API Reference

```tsx
<div [ngStyle]='{minHeight:"500px"}'>
  <dbs-button (click)="drawer.setOpened()">Open Drawer with setOpened</dbs-button>
  <dbs-button (click)="opened='true'">Open Drawer with Everything</dbs-button>
  <dbs-drawer #drawer  [overlay]="overlay" [dismissible]="dismissible" [opened]="opened" [title]="title" (onBack)="onBack($event)" (openedChange)="openedChange($event)">
      
      <dbs-button
        (click)="snackbars = [{ id: '1', message: 'This is a move to document demo', status: 'success' }]"
      >
      Show snackbar
      </dbs-button>
      <p>Snackbar is declared here, but its render is moved to the HTML body</p>
      
  </dbs-drawer>
  
</div>
<dbs-snackbar-container
  [style.z-index]='drawer.zIndex + 20'
  [moveToDocument]
  [snackbars]="snackbars"
></dbs-snackbar-container>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **overlay** | Shows/hides the background overlay.boolean | true | [x] |
| **dismissible** | Allows the Drawer to be closed by clicking the overlay or close button in header.boolean | true | [x] |
| **opened** | Shows/hides the Drawer.boolean | false | [x] |
| **title** | The title of the Drawer in the header.string | "" |  |
| **moveToDocument** | Deprecated to use moveToDocumentDirective instead @deprecatedboolean | false |  |
| **scrollLock** | Locks page scroll via `dbs-overlay`. Only locks if when the drawer is opened.boolean | false |  |
| **size** | The size of the Drawer."lg""md" | lg | lgmd |
| **subtitle** | The subtitle of the Drawer in the header.string | "" |  |
| **zIndex** | The z-index value of the overlay. Can be adjusted to place the Drawer over or under other elements in the page.numberstring | 800 |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **badge** | The badge content in the header please use the headerTitleSlot ng-content instead. @deprecatedstring |  |  |
| **badgeClass** | The badge class in the header please use the headerTitleSlot ng-content instead. @deprecatedstring |  |  |
| **clickOutside** | Replaced by [dismissible] Allows the Drawer to be closed by clicking the overlay .@deprecatedboolean | false |  |
| **drawerId** | string |  |  |
| **showBackBtn** | Shows back button. Please use the headerStartSlot to put in a button @deprecatedboolean | false |  |
| **showOverlay** | Replaced by [overlay] Shows/hides the background overlay. @deprecatedboolean | false |  |
| **onBack** | Used with back button. Please use the headerStartSlot to put in a button @deprecatedEventEmitter |  |  |
| **additionalIcons** | Deprecated slot for icons on left of close button. Please use headerEndSlot for ng-content insteadHTMLElement | - |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when the Drawer is dismissed.EventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **setOpened** | helper function carried over from IBGT UI Library(toSetOpened?: boolean) => void |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The Drawer's main content.HTMLElement | - |  |
| **headerSlot** | Slot for the Drawer's header.HTMLElement | - |  |
| **headerStartSlot** | Slot to add icon or button in the Drawer's header. **DLS dictates a 8px gap from the other header content**HTMLElement | - |  |
| **headerEndSlot** | Slot for additional buttons to show in the Drawer's header.HTMLElement | - |  |
| **headerTitleSlot** | Slot to add a badge component or customise the title completely.HTMLElement | - |  |
| **footerSlot** | Slot for the Drawer's footer.HTMLElement | - |  |

# **Drawer Header**

# Usage

Import `DbsDrawerHeaderComponent` into your component or module.

`import { DbsDrawerHeaderComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsDrawerHeaderComponent],
})`

## **Stories**

**Basic**

```tsx
<dbs-drawer-header [title]="title" (onClose)="onClose($event)">

</dbs-drawer-header>
```

**Dismissible**

```tsx
<dbs-drawer-header [title]="title" [dismissible]="dismissible" (onClose)="onClose($event)">

</dbs-drawer-header>
```

WIth Subtitle

```tsx
<dbs-drawer-header [title]="title" [subtitle]="subtitle" (onClose)="onClose($event)">

</dbs-drawer-header>
```

**With Start Slot**

```tsx
<dbs-drawer-header [title]="title" (onClose)="onClose($event)">
    <dbs-icon-button
size="sm"
aria-label="Previous page"
startSlot
(click)="onClick($event)"
>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_16_1099)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967Z" fill="var(--color-icon-active)"/>
  </g>
  <defs>
  <clipPath id="clip0_16_1099">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
</svg>
</dbs-icon-button>
    </dbs-drawer-header>
```

**With End Slot**

```tsx
<dbs-drawer-header [title]="title" (onClose)="onClose($event)">
    <dbs-icon-button
size="sm"
aria-label="Share"
endSlot
(click)="onClick($event)"
>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2.25C12.1989 2.24998 12.3897 2.329 12.5303 2.46967L15.5303 5.46967C15.8232 5.76256 15.8232 6.23744 15.5303 6.53033C15.2374 6.82322 14.7626 6.82322 14.4697 6.53033L12.75 4.81066V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V4.81109L9.53142 6.53024C9.23857 6.82318 8.7637 6.82326 8.47076 6.53042C8.17782 6.23757 8.17774 5.7627 8.47058 5.46976L11.4696 2.46976C11.6102 2.32907 11.801 2.25002 11.9999 2.25ZM3.25 12C3.25 10.4808 4.48079 9.25 6 9.25H8C8.41421 9.25 8.75 9.58579 8.75 10C8.75 10.4142 8.41421 10.75 8 10.75H6C5.30921 10.75 4.75 11.3092 4.75 12V19C4.75 19.6908 5.30921 20.25 6 20.25H18C18.6908 20.25 19.25 19.6908 19.25 19V12C19.25 11.3092 18.6908 10.75 18 10.75H16C15.5858 10.75 15.25 10.4142 15.25 10C15.25 9.58579 15.5858 9.25 16 9.25H18C19.5192 9.25 20.75 10.4808 20.75 12V19C20.75 20.5192 19.5192 21.75 18 21.75H6C4.48079 21.75 3.25 20.5192 3.25 19V12Z" fill="var(--color-icon-active)"
  />
</svg>
</dbs-icon-button>
    </dbs-drawer-header>
```

**With Title Slot**

```tsx
<dbs-drawer-header [title]="title" (onClose)="onClose($event)">
<dbs-badge priority="medium" titleSlot>12</dbs-badge>
</dbs-drawer-header>
```

API Reference

```tsx
<dbs-drawer-header [title]="title" (onClose)="onClose($event)">

</dbs-drawer-header>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **title** | The title of the drawer header.string | "" |  |
| **dismissible** | Shows/hides the close button.boolean | false |  |
| **subtitle** | The subtitle of the drawer header.string | "" |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **onClose** | Emitted when the close button is clicked.EventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **startSlot** | Slot for icon in the drawer's header.HTMLElement | - |  |
| **endSlot** | Slot for buttons in the drawer's header.HTMLElement | - |  |
| **titleSlot** | Slot for badge in the drawer's header.HTMLElement | - |  |

# **Drawer Footer**

# Usage

Import `DbsDrawerFooterComponent` into your component or module.

```tsx
import { DbsDrawerFooterComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsDrawerFooterComponent],
})
```

## **Stories**

### **Basic**

```tsx
<dbs-drawer-footer   ><div startSlot>
  <dbs-button>Cancel</dbs-button>
</div>
</dbs-drawer-footer>
```

**With Start Slot**

```tsx
<dbs-drawer-footer   >
<style>
  .start-slot {
    margin: 0;
    color: var(--color-neutral-70)
  }
</style>
<p startSlot class="start-slot">Single line of text.</p></dbs-drawer-footer>
```

### **With End Slot**

Note that when the buttons are arranged horizontally, they appear from right to left, with the first button (typically the primary button) appearing on the right.

```tsx
<dbs-drawer-footer   >
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
</dbs-drawer-footer>
```

**With Both Slots**

```tsx
<dbs-drawer-footer   >
  <style>
    .start-slot {
      margin: 0;
      color: var(--color-neutral-70)
    }
  </style>
  <p startSlot class="start-slot">Single line of text.</p>
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
</dbs-drawer-footer>
```

### **Mobile Button Layout**

Mobile layout of buttons in the footer can be set with `mobileButtonLayout`.

- `stretched` (default): Buttons stretch evenly to fill the row.
- `stacked`: Buttons stack one on top of the other.

```tsx
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <dbs-drawer-footer  [mobileButtonLayout]="'stretched'" >
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
<div startSlot>stretched</div></dbs-drawer-footer>
        <dbs-drawer-footer  [mobileButtonLayout]="'stacked'" >
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
<div startSlot>stacked</div></dbs-drawer-footer>
      </div>
```

**API Reference**

```tsx
<dbs-drawer-footer   >
  <style>
    .start-slot {
      margin: 0;
      color: var(--color-neutral-70)
    }
  </style>
  <p startSlot class="start-slot">Single line of text.</p>
  <dbs-button endSlot variant="primary">Next</dbs-button>
  <dbs-button endSlot>Cancel</dbs-button>
</dbs-drawer-footer>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **startSlot** | Start slot in drawer footer.HTMLElement | - |  |
| **endSlot** | End slot in drawer footer.HTMLElement | - |  |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **mobileButtonLayout** | Mobile layout of `<dbs-button>` elements.
• `stretched` (default): Buttons stretch evenly to fill the row.
• `stacked`: Buttons stack one on top of the other."stretched""stacked" | "stretched" | stretchedstacked |

# **Link**

# Usage

Import `DbsLinkComponent` into your component or module.

```tsx
import { DbsLinkComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsLinkComponent],
})
```

## **Stories**

**Basic**

```tsx
        <div style="
  font-family: var(--text-body-font-family);
  font-weight: var(--text-body-font-weight);
  font-size: var(--text-body-md-font-size);
  line-height: var(--text-body-leading);
  letter-spacing: var(--text-body-tracking);
">
          <dbs-link [href]="href" [color]="color"  >I am a link</dbs-link>
        </div>
```

```tsx
      <div style="
  font-family: var(--text-body-font-family);
  font-weight: var(--text-body-font-weight);
  font-size: var(--text-body-md-font-size);
  line-height: var(--text-body-leading);
  letter-spacing: var(--text-body-tracking);
">
        <dbs-link  [href]="'https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-link--docs'" [bound]="false" [color]="'product'" >I am a link (product) with bound = false</dbs-link>
        <br>
        <dbs-link  [href]="'https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-link--docs'" [color]="'subtle'" >I am a link (subtle)</dbs-link>
        <br>
        <dbs-link  [href]="'https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-link--docs'" [color]="'text'" >I am a link (text)</dbs-link>
        <br>
        <div [style.background]="'var(--color-icon-active)'" [style.padding.px]="8">
        <dbs-link  [href]="'https://angular.dev.apps.cs.sgp.dbs.com/?path=/docs/components-link--docs'" [color]="'on-dim'" >I am a link (on-dim) *I am placed in a darker background so you can see me</dbs-link>
        </div>
      </div>
```

**API Reference**

```tsx
        <div style="
  font-family: var(--text-body-font-family);
  font-weight: var(--text-body-font-weight);
  font-size: var(--text-body-md-font-size);
  line-height: var(--text-body-leading);
  letter-spacing: var(--text-body-tracking);
">
          <dbs-link [href]="href" [color]="color"  >I am a link</dbs-link>
        </div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **href** | The URL to be used in `href` attribute of the anchor tag.string | "" |  |
| **color** | The color of the link to be displayed."product""subtle""text""on-dim" | product | productsubtletexton-dim |
| **bound** | Adds negative margin around the link. Primarily used for optical alignment.boolean | true |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The link's main content.HTMLElement | - |  |