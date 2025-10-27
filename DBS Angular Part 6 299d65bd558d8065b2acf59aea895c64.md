# DBS Angular Part 6

## Modal

### Usage

Import `DbsModalComponent` into your component or module.

```html
import { DbsModalComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsModalComponent],
})
```

## **Stories**

### **Basic**

The modal comes rendered with a modal header by default. **Every modal should be rendered with a modal header.** Provide the modal with a title, and optionally a subtitle, to let users know what the modal is about.

- DLS has recommended paddings for content, we have provided them here as a pattern

```html
  <dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
  <dbs-modal  [title]="'Modal title'" [subtitle]="'Modal subtitle'" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
```

### **Size**

Modal comes in 3 `size`. `size` sets the max-width of the dbs-modal

- 'sm' (small) - mobile - 400px
- 'md' (medium) - short forms and alerts - 600px
- 'lg' (large) - tables and complex info - 960px

```html
  **<dbs-button (click)='small.showDialog()'>sm</dbs-button>
  <dbs-modal [title]="title" [subtitle]="title" size='sm' #small>
    <style>
      .modal-content {
        padding-top: var(--modal-content-padding-top);
        padding-right: var(--modal-content-padding-right);
        padding-bottom: var(--modal-content-padding-bottom);
        padding-left: var(--modal-content-padding-left);
      }
    </style>
    <div class="modal-content">Modal content</div>
  </dbs-modal>

  <dbs-button (click)='dialog.showDialog()'>Default 'md'</dbs-button>
  <dbs-modal  [title]="'Modal title'" [subtitle]="'Modal subtitle'" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
  
  <dbs-button (click)='large.showDialog()'>lg</dbs-button>
  <dbs-modal [title]="title" [subtitle]="title" size='lg' #large>
    <style>
      .modal-content {
        padding-top: var(--modal-content-padding-top);
        padding-right: var(--modal-content-padding-right);
        padding-bottom: var(--modal-content-padding-bottom);
        padding-left: var(--modal-content-padding-left);
      }
    </style>
    <div class="modal-content">Modal content</div>
  </dbs-modal>**
```

**Input Components**

```html
<dbs-button (click)='dialog.showDialog()'>Show Dialog</dbs-button>
<dbs-modal #dialog 
[scrollLock]="true"
[title]="'Input Demo'" 
[size]="'lg'"
>
  <div [style.padding.px]="24" [style.display]="'flex'" [style.gap.px]="24" [style.flex-direction]="'column'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
      <label>right tooltip</label>
      <span class="icon icon__info--straight"
        dbsTooltip [tooltipPosition]="tooltipPosition" [tooltipTitle]="tooltipTitle" [tooltipText] ="tooltipText">
      </span>
    </div>
    <dbs-button [style.padding-top.px]="24" #btn1  (click)="popover.openPopover(btn1)" >
      Open Popup
    </dbs-button>
    <dbs-popover #popover [showClose]='true'>
      <div popoverHeader>Popover Header</div>
      <div popoverContent>
        A popover is a more flexible component that can display content with various
        layouts.
      </div>
      <div popoverFooter>
        <dbs-button (click)='popover.setOpen(false)'>Close Btn</dbs-button>
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
      snackbars=[{  message: 'This is a top-layer demo', status: 'success', autoClose: false }]"
    >
    Show snackbar container
    </dbs-button>
    <p>Snackbar Container is at top-layer</p>
    </div>
    <dbs-file-upload></dbs-file-upload>
    <dbs-file-upload></dbs-file-upload>
    <dbs-file-upload></dbs-file-upload>
    <dbs-file-upload></dbs-file-upload>
    <dbs-file-upload></dbs-file-upload>
    <dbs-modal-footer footerSlot>
    <dbs-button (click)='dialog.close()'>Dismiss</dbs-button>
    </dbs-modal-footer>
    </dbs-modal>
    
   <dbs-snackbar-container 
   [(snackbars)]="snackbars"
 ></dbs-snackbar-container>
```

### **Show Modal with `show()` or `showModal()`**

The modal can be shown using the `show()` and `showModal()` methods, adapted from the [HTML `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

`show()` will render the modal element within the parent container, while `showModal()` will render it in the `#top-layer`.

```html
  <div [style.height.px]="240" [style.display]="'flex'" [style.gap.px]="8">
    <dbs-button (click)='dialog.show()'>Show modal with `show()`</dbs-button>
    <dbs-button (click)='dialog.showModal()'>Show modal with `showModal()`</dbs-button>
    <dbs-modal  [title]="'Modal title'" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
  </div>
```

### **Show Modal with `showDialog()` and `topLayer`**

Another way to show the modal is with `showDialog()`. This is simply a helper method that checks for `topLayer` and calls `show()` or `showModal()` accordingly.

If `topLayer` is true, the modal will be rendered in the `#top-layer`. Otherwise, it will be rendered within the parent container.

```html
    <div [style.height.px]="240">
      <div [style.margin-bottom.px]="16" [style.display]="'flex'" [style.align-items]="'center'" [style.gap.px]="8">
        <dbs-switch [checked]='opened' (change)='topLayer = !topLayer'></dbs-switch>
        <code>topLayer: {{ topLayer }}</code>
      </div>
      <dbs-button (click)='dialog.showDialog()'>Show modal with `showDialog()`</dbs-button>
      <dbs-modal [topLayer]="topLayer" [title]="'Modal title'" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
    </div>
```

### **Controlled Opened State**

The `opened` state can also be controlled directly to show/hide the modal.

```html
<div [style.margin-bottom.px]="16" [style.display]="'flex'" [style.align-items]="'center'" [style.gap.px]="8">
  <dbs-switch [checked]='opened' (change)='opened = !opened'></dbs-switch>
  <code>opened: {{ opened }}</code>
</div>
<div [style.height.px]="240" [style.transform]="'scale(1)'">
  <dbs-modal [title]="'Modal title'" [topLayer]="false" [opened]="opened" (openedChange)="opened = $event">
    <div [style.padding.px]="24">Modal content</div>
  </dbs-modal>
</div>
```

### **Invisible Overlay**

The overlay can be made invisible by passing `overlay` as false.

```html
  <dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
  <dbs-modal  [title]="'Modal title'" [overlay]="false" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
```

### **Scroll Lock**

The page scroll can be locked with `scrollLock`. Only locks when the modal is opened.

```html
  <dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
  <dbs-modal  [title]="'Modal title'" [scrollLock]="true" #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
```

### **Non-dismissible**

By default, the modal is dismissible by clicking the close button in the header, clicking the background overlay, or pressing the escape key (if rendered on `#top-layer`).

This behaviour can be disabled by passing `dismissible` as false.

```html
<dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
<dbs-modal [title]="'Modal title'" [dismissible]="dismissible" #dialog>
  <div [style.padding.px]="24">
    <dbs-button (click)='dialog.close()'>Close modal</dbs-button>
  </div>
</dbs-modal>
```

### **With Custom Header**

The default header can be overridden to add further customisations such as adding an icon, or adding refined control over the close button.

To render a custom header, import `DbsModalHeaderComponent` and use `<dbs-modal-header headerSlot>` within `<dbs-modal>`.

```html
<dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
<dbs-modal [title]="'Modal title'" [opened]="opened" (openedChange)="opened = $event" #dialog>
  <dbs-modal-header
    headerSlot
    [title]="'Modal title'"
    [subtitle]="'Modal subtitle'"
    [dismissible]="true"
    (dismiss)="opened = false"
  >
  <svg-icon iconSlot iconName="circle-checkmark-filled" fill="#00ab61"></svg-icon>
  </dbs-modal-header>
  <div [style.padding.px]="24">Modal content</div>
</dbs-modal>
```

### **With Footer**

Add a footer to display the main actions needed to complete or cancel the modal task.

To render a modal footer, import `DbsModalFooterComponent` and use `<dbs-modal-footer footerSlot>` within `<dbs-modal>`.

- note that buttons are in the reverse order of the code, this is required by DLS where the `primary` button is placed before the `secondary` in code so that it grabs focus first.

```html
<dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
<dbs-modal [title]="'Modal title'" #dialog>
  <div [style.padding.px]="24">Modal content</div>
  <dbs-modal-footer footerSlot [mobileButtonLayout]="'stacked'">
    <div startSlot>Additional text in <code>startSlot</code></div>
    <dbs-button variant="primary">Action</dbs-button>
    <!-- NOTE THAT BUTTONS ARE REVERSED ORDERED , primary above secondary , DLS defines that the primary button should be tab key press focused first-->
    <dbs-button (click)='dialog.close()'>Dismiss</dbs-button>
  </dbs-modal-footer>
</dbs-modal>
```

Form Demo

```html
<dbs-button (click)='dialog.showDialog()'>Show Dialog</dbs-button>
<p>FormArray Value: {{ items.value | json }}</p>
<p>checkbox Value: {{ checkbox.value | json }}</p>
<dbs-modal #dialog [title]="'Form Demo'">
  <div [style.padding.px]="24" [style.display]="'flex'" [style.flex-direction]="'column'" [style.gap.px]="16">
    @for (item of items.controls; track item) {
      <div [style.display]="'flex'" [style.gap.px]="8">
        <dbs-input
          [fieldLabel]='"item "+$index'
          [formControl] = 'item' [value]='item.value'></dbs-input>
      </div>
    }
  </div>
  <dbs-modal-footer footerSlot>
  <dbs-checkbox
      startSlot
      [formControl]="checkbox"
      label="Did you check the checkbox?"
    />
    <dbs-button (click)='dialog.close()'>Dismiss</dbs-button>
  </dbs-modal-footer>
</dbs-modal>
<div [style.display]="'flex'" [style.flex-direction]="'column'" [style.gap.px]="16">
  @for (item of items.controls; track item) {
    <div>
      <dbs-input 
      [fieldLabel]='"item "+$index'
      [formControl]='item' [value]='item.value'></dbs-input>
    </div>
  }
</div>
```

### **Event Handling**

`Dbs-modal` emits several Outputs that you may attach functions to

- `(openDialog)` fires when opened
- `(closeDialog)` fires when closed
- `(openedChange)` fires when opened and closed with value as the state of `opened`

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";
import { DbsModalComponent } from "../../dbs-modal.component";

@Component({
  selector: "event-handling-story",
  standalone: true,
  imports: [CommonModule, DbsModalComponent, DbsButtonComponent],
  templateUrl: `event-handling-story.component.html`,
})
export class EventHandlingStoryComponent {
  events: { type: string; visible: boolean }[] = [];

  onEvent(type: string, $event: any) {
    this.events.push({
      type: type,
      visible: $event,
    });
    console.log($event);
  }
}
```

```html
<dbs-button (click)="dialog.showDialog()">Show Modal</dbs-button>
<dbs-modal
  #dialog
  title="Modal title"
  (openDialog)="onEvent('openDialog', $event)"
  (closeDialog)="onEvent('closeDialog', $event)"
  (openedChange)="onEvent('openedChange', $event)"
>
  <div style="padding: 24px">Modal content</div>
</dbs-modal>
<p><strong>Events fired:</strong></p>
<div
  style="
    background: var(--color-background-level-1);
    padding: 0 16px;
    max-width: 400px;
    height: 300px;
    overflow-y: scroll;
  "
>
  @for (event of events; track event; let idx = $index) {
    {{idx}}: ({{ event.type  }}):
    {{ event.visible | json }}
    <hr />
  }
</div>
```

**API Reference**

```html
  <div [style.height.px]="240">
    <dbs-button (click)='dialog.showDialog()'>Show modal</dbs-button>
    <dbs-modal [title]="title"  #dialog>
  <style>
    .modal-content {
      padding-top: var(--modal-content-padding-top);
      padding-right: var(--modal-content-padding-right);
      padding-bottom: var(--modal-content-padding-bottom);
      padding-left: var(--modal-content-padding-left);
      @media only screen and (min-width: 40em) {
        padding-right: var(--modal-content-md-padding-right);
        padding-left: var(--modal-content-md-padding-left);
      }
    }
  </style>
  <div class="modal-content">Modal content</div>
</dbs-modal>
  </div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **title** | The title of the modal in the header.string | "" |  |
| **dismissible** | Allows the modal to be closed by clicking the overlay.boolean | true |  |
| **opened** | Shows/hides the dialog.boolean | false |  |
| **overlay** | Shows/hides the overlay.boolean | true |  |
| **scrollLock** | Locks page scroll. Only locks if when the modal is opened.boolean | true |  |
| **size** | Sets the max-width of the dbs-modal
• 'sm' (small) - mobile - 400px
• 'md' (medium) - short forms and alerts - 600px
• 'lg' (large) - tables and complex info - 960px"sm""md""lg" | md | smmdlg |
| **subtitle** | The subtitle of the modal in the header.string | "" |  |
| **topLayer** | Sets whether the modal opens in the `#top-layer` (on top of all other layers in a web document).boolean | true |  |
| **zIndex** | The z-index value of the overlay. Can be adjusted to place the modal over or under other elements in the page.numberstring | 900 |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The modal's main content.HTMLElement | - |  |
| **headerSlot** | Slot for the modal's header. Replaces the default header.HTMLElement | - |  |
| **footerSlot** | Slot for the modal's footer.HTMLElement | - |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **appendTo** | *(deprecated - ODS) No longer has any effect. Handled by HTML `<dialog>` element.*any |  |  |
| **autoZIndex** | *(deprecated - ODS) No longer has any effect. Handled by HTML `<dialog>` element.*boolean | false |  |
| **baseZIndex** | *(deprecated - ODS) Use `zIndex` instead.*number | NaN |  |
| **blockScroll** | *(deprecated - ODS) Use `scrollLock` instead.*boolean | false |  |
| **breakpoint** | *(deprecated - ODS) No longer has any effect.*number | NaN |  |
| **breakpoints** | *(deprecated - ODS) No longer has any effect.*any[] |  |  |
| **closable** | *(deprecated - ODS) Use `dismissible` instead.*boolean | false |  |
| **closeIcon** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **closeOnEscape** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **contentStyle** | *(deprecated - ODS) No longer has any effect. Pass styles to a parent container in `<ng-content></ng-content>` instead.*any |  |  |
| **contentStyleClass** | *(deprecated - ODS) No longer has any effect. Pass classes to a parent container in `<ng-content></ng-content>` instead.*string |  |  |
| **data** | *(deprecated - IBGT) Use the other Inputs instead.*
Data input that takes in data for MatDialogs. No longer required as MatDialog is no longer used.any |  |  |
| **dismissableMask** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **draggable** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **focusOnShow** | *(deprecated - ODS) No longer has any effect. Handled by HTML `<dialog>` element.*boolean | false |  |
| **focusTrap** | *(deprecated - ODS) No longer has any effect. Handled by HTML `<dialog>` element.*boolean | false |  |
| **header** | *(deprecated - ODS) Use `title` instead.*string |  |  |
| **keepInViewport** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **maskStyleClass** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **maximizable** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **maximizeIcon** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **minimizeIcon** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **minX** | *(deprecated - ODS) No longer has any effect.*number | NaN |  |
| **minY** | *(deprecated - ODS) No longer has any effect.*number | NaN |  |
| **modal** | *(deprecated - ODS) Use `topLayer` and `scrollLock` instead.*boolean | false |  |
| **position** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **positionLeft** | *(deprecated - ODS) No longer has any effect.*number | NaN |  |
| **positionTop** | *(deprecated - ODS) No longer has any effect.*number | NaN |  |
| **resizable** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **responsive** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **rtl** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **showHeader** | *(deprecated - ODS) No longer has any effect. Header is always shown.*boolean | false |  |
| **style** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **styleClass** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **transitionOptions** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **onDragEnd** | *(deprecated - ODS) No longer has any effect.*EventEmitter |  |  |
| **onHide** | *(deprecated - ODS) Use `visibleChange` instead.*EventEmitter |  |  |
| **onMaximize** | *(deprecated - ODS) No longer has any effect.*EventEmitter |  |  |
| **onResizeEnd** | *(deprecated - ODS) No longer has any effect.*EventEmitter |  |  |
| **onResizeInit** | *(deprecated - ODS) No longer has any effect.*EventEmitter |  |  |
| **onShow** | *(deprecated - ODS) Use `visibleChange` instead.*EventEmitter |  |  |
| **dialogActionClicked** | *(deprecated - IBGT) only to be used to preserve old MatDialogs use*
To update data for MatDialogs(value: any) => void |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **openedChange** | Emitted when the opened state changes.EventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **close** | Closes the dialog with the native `.close()` function.(returnValue?: any) => void |  |  |
| **show** | Shows the dialog with the native `.show()` function. Spawns the dialog within the parent component.() => void |  |  |
| **showDialog** | Calls either `showModal()` or `show()` depending on `topLayer`.() => void |  |  |
| **showModal** | Shows the dialog with the native `.showModal()` function. Spawns the dialog on the `#top-layer`.() => void |  |  |

# **Modal Header**

The `DbsModalHeaderComponent` is only a template its functionalities are built into the `DbsModalComponent`.

It is only to be used to minutely change the header design via `iconSlot`, it also allows you to overwrite the `dismiss` output this allows for custom functions to run on close.

To fully customise the modal's header, use `headerSlot` in the `DbsModalComponent`

# Usage

Import `DbsModalHeaderComponent` into your component or module.

```tsx
import { DbsModalHeaderComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsModalHeaderComponent],
})
```

## **Stories**

### **Basic**

```tsx
<dbs-modal-header  [title]="'Modal Title'" ></dbs-modal-header>
```

**With Subtitle**

```tsx
<dbs-modal-header  [title]="'Modal Header With Subtitle'" [subtitle]="'This is a single line subtitle'" ></dbs-modal-header>
```

**With Icon**

```tsx
<dbs-modal-header  [title]="'Modal Header With Icon'" ><svg-icon iconSlot iconName="circle-checkmark-filled" fill="#00ab61"></svg-icon></dbs-modal-header>
```

**With Icon And Subtitle**

```tsx
<dbs-modal-header  [title]="'Modal Header With Icon And Subtitle'" [subtitle]="'This is a single line subtitle'" ><svg-icon iconSlot iconName="circle-checkmark-filled" fill="#00ab61"></svg-icon></dbs-modal-header>
```

**Dismissible**

```tsx
<dbs-modal-header  [title]="'Dismissible Modal Header'" [subtitle]="'This modal can be dismissed by clicking the close button in the header.'" [dismissible]="true" ></dbs-modal-header>
```

API Reference

```tsx
<dbs-modal-header [title]="title"  ></dbs-modal-header>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **title** | The title of the modal.string | "" |  |
| **dismissible** | Shows/hides the close button.boolean | false |  |
| **subtitle** | The subtitle of the modal.string | "" |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **dismiss** | Emitted when the close button is clicked.EventEmitter |  |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **iconSlot** | An icon to show in the header.HTMLElement | - |  |

# **Modal Footer**

# Usage

Import `DbsModalFooterComponent` into your component or module.

```tsx
import { DbsModalFooterComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsModalFooterComponent],
})
```

## **Stories**

### **With CTA**

Note that when the buttons are arranged horizontally, they appear from right to left, with the first button (typically the primary button) appearing on the right.

```tsx
<dbs-modal-footer   >
  <dbs-button variant="primary">Action</dbs-button>
  <dbs-button>Dismiss</dbs-button>
</dbs-modal-footer>
```

**With Start Slot**

```tsx
<dbs-modal-footer   ><span startSlot>Additional text</span></dbs-modal-footer>
```

**With CTA And Start Slot**

```tsx
<dbs-modal-footer   >
  <dbs-button variant="primary">Action</dbs-button>
  <dbs-button>Dismiss</dbs-button>
<span startSlot>Additional text</span></dbs-modal-footer>
```

### **Mobile Button Layout**

Mobile layout of buttons in the footer can be set with `mobileButtonLayout`.

- `stretched` (default): Buttons stretch evenly to fill the row.
- `stacked`: Buttons stack one on top of the other.

```tsx
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <dbs-modal-footer  [mobileButtonLayout]="'stretched'" >
  <dbs-button variant="primary">Action</dbs-button>
  <dbs-button>Dismiss</dbs-button>
<div startSlot>stretched</div></dbs-modal-footer>
    <dbs-modal-footer  [mobileButtonLayout]="'stacked'" >
  <dbs-button variant="primary">Action</dbs-button>
  <dbs-button>Dismiss</dbs-button>
<div startSlot>stacked</div></dbs-modal-footer>
  </div>
```

**API Reference**

```tsx
<dbs-modal-footer   ><dbs-button>Dismiss</dbs-button></dbs-modal-footer>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | The footer's main content.HTMLElement | - |  |
| **startSlot** | Content that goes before the main content.HTMLElement | - |  |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **mobileButtonLayout** | Mobile layout of `<dbs-button>` elements.
• `stretched` (default): Buttons stretch evenly to fill the row.
• `stacked`: Buttons stack one on top of the other."stretched""stacked" | "stretched" | stretchedstacked |