# DBS Angular Part 11

# **Progress Bar**

# Usage

Import `DbsProgressBarComponent` into your component or module.

```tsx
import { DbsProgressBarComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsProgressBarComponent],
})
```

## **Stories**

### **Demo Progress**

Basic progress bar.

Click on buttons to toggle `progress` and `errorState` of progress bar

```tsx
<div style="display:flex; flex-wrap:wrap; gap:8px;">
  <dbs-button (click)='currProgress=0'>Reset progress</dbs-button>
  <dbs-button (click)='currProgress= currProgress+10'>Increment progress by 10</dbs-button>
  <dbs-button (click)='currProgress=100'>Trigger complete</dbs-button>
</div>
<div style="margin:16px 0 24px;">
  <dbs-switch [checked]="currErrorState" (change)='currErrorState = !currErrorState'></dbs-switch>
  <span [style.margin-left.px]="8">Toggle error state</span>
</div>
<p>Current progress: {{currProgress}}</p>
<dbs-progressbar #demoProgressBar
  [minValue]="0"
  [maxValue]="100"
  [progress]="currProgress"
  [progressState]="'inProgress'"
  [errorState]="currErrorState"
></dbs-progressbar>
```

### **Color**

The color of progress bar can be controlled with `color`.

- `color` only takes in `green`, `yellow`, `red`

```tsx
<dbs-progressbar  [color]="'green'" [progress]="70" ></dbs-progressbar>
```

### **Color Mapping**

The color of progress bar can be controlled with `colorMapping`.

- `colorMapping` takes in an object { inProgress: 'yellow', complete: 'green' }.
- Partial config accepted; for example, providing { inProgress: 'red' } will result in `colorMapping` { inProgress: 'red', complete: 'green' }.

```tsx
<dbs-progressbar  [progress]="70" [colorMapping]="{'inProgress':'red','complete':'yellow'}" ></dbs-progressbar>
```

### **Error State**

The progress bar takes in a `errorState`. When toggled to true:

- Width of progress bar is visually set to maximum but `progress` is unchanged `fixedColor` is set to 'red'

When toggled to false:

- Width of progress bar is set based on `progress`
- `fixedColor` is set based on `colorMapping`

```tsx
<dbs-progressbar  [progress]="70" [errorState]="true" ></dbs-progressbar>
```

**API Reference**

```tsx
<dbs-progressbar   ></dbs-progressbar>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide properties itemsproperties** | Hide properties items |  |  |
| **defaultColorMapping** | ProgressBarColorMapping | { inProgress: 'yellow', complete: 'green', } |  |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **color** | Progress bar colour ('green'/'yellow'/'red').string |  |  |
| **colorMapping** | Config for custom colour mapping; default value is:
• { inProgress: 'yellow', complete: 'green' }
Partial config accepted; for example, providing { inProgress: 'red' } will result in the following mapping:
• { inProgress: 'red', complete: 'green' }.ProgressBarColorMapping | cloneDeep( this.defaultColorMapping, ) |  |
| **errorState** | When toggled to `true`:
• Width of progress bar is visually set to maximum but `progress` is unchanged
• `fixedColor` is set to 'red'
When toggled to `false`:
• Width of progress bar is set based on `progress`
• `fixedColor` is set based on `colorMapping`boolean | false |  |
| **maxValue** | Maximum value of `progress`.number | 100 |  |
| **minValue** | Minimum value of `progress`.number | 0 |  |
| **progress** | Percentage of progress bar coloured; when `null`, the bar behaves like a loader.numbernull | 0 |  |
| **progressState** | 'inProgress' or 'complete'; does not have any effect when `progress` is null When manually set to 'complete':
• `progress` is set to `maxValue`
• `fixedColor` is set based on `colorMapping`.string | inProgress |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **dynamic** | *(deprecated - IBGT)*
If true, progress bar state updates dynamically based on value of `progress` (eg. if `progress` >= `maxValue` then progress bar changes to completed state).boolean | true |  |
| **mini** | *(deprecated - IBGT)*
Set true to set bar height at 4px, else default 8px.boolean | false |  |
| **status** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **title** | *(deprecated - ODS) Any titles/labels should be a separate element.*string |  |  |
| **type** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **progressStateChange** | New `progressState` is emitted whenever there is a change.EventEmitter<string> | new EventEmitter<string>() |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **updateProgressBar** | (updateState?: boolean) => void |  |  |

# **Tooltip**

# Usage

Import `DbsTooltipDirective` into your component or module.

```tsx
import { DbsTooltipDirective } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsTooltipDirective],
})
```

## **Stories**

### **Basic**

Tooltip can be positioned over any element, such as an icon or button.

```tsx
<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; height:320px;">
  <div style="display:flex; align-items:center; justify-content:center; gap:4px;">
    <label (click)='tooltipText="clicked the label";tooltipTitle="changed title"'>Icon tooltip click to change title and text</label>
     <svg-icon (click)='tooltipText="changed text";tooltipTitle="changed title"' iconName='circle-information' dbsToolTip [tooltipPosition]="tooltipPosition" [tooltipTitle]="tooltipTitle" [tooltipText]="tooltipText"></svg-icon>
  </div>  
  <dbs-button  [tooltipPosition]="'top'" [tooltipTitle]="'This is a title'" [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'" dbsToolTip>Button tooltip</dbs-button>
</div>
```

### **Tooltip Positions**

Tooltip position can be modified using `tooltipPosition`.

```tsx
<label for="position-select">Position </label>
<select id="position-select" (change)="tooltipPosition = $event.target.value">
  <option value="top" selected>top</option>
  <option value="top-start">top-start</option>
  <option value="top-end">top-end</option>
  <option value="right">right</option>
  <option value="right-start">right-start</option>
  <option value="right-end">right-end</option>
  <option value="bottom">bottom</option>
  <option value="bottom-start">bottom-start</option>
  <option value="bottom-end">bottom-end</option>
  <option value="left">left</option>
  <option value="left-start">left-start</option>
  <option value="left-end">left-end</option>
</select>
<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; height:320px;">
  <dbs-button  [tooltipPosition]="'top'" [tooltipTitle]="'This is a title'" [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'" [tooltipPosition]="tooltipPosition" dbsToolTip>{{ tooltipPosition }} tooltip</dbs-button>
</div>
```

### **Offset Positioning**

Tooltip position can be modified using `offsetX` and/or `offsetY`.

```tsx
<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; height:320px;">
  <dbs-button  [offsetX]="50" [offsetY]="-20" [tooltipPosition]="'top'" [tooltipTitle]="'This is a title'" [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'" dbsToolTip>Button tooltip</dbs-button>
</div>
```

### **Custom Tooltip Content Template**

Custom content can be passed into the tooltip by passing a `<ng-template>` into `contentTemplate`. Context of the template can be passed into `contentContext` as an object.

```tsx
  <ng-template #tooltipTemplate let-item="item">
    
  <div>
    <div style="color:aqua; margin-bottom:8px;">{{ item?.title }}</div>
    <div>{{ item?.content1 }}</div>
    <div>{{ item?.content2 }}</div>
  </div>

  </ng-template>
  <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; height:240px;">
    <dbs-button  [tooltipPosition]="'top'" [contentContext]="{'item':{'title':'Template Title','content1':'Template Content 1','content2':'Template Content 2'}}" [contentTemplate]="tooltipTemplate" dbsToolTip >Custom tooltip</dbs-button>
  </div>
```

### **Auto-Repositioning**

Scroll to position the button at different points of the window. Observe that the tooltip automatically adjusts its position to fit inside the window.

```tsx
<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; width:200%; height:320px;">
  <dbs-button  [tooltipPosition]="'top'" [tooltipTitle]="'This is a title'" [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'" dbsToolTip>Button tooltip</dbs-button>
</div>
```

**API Reference**

```tsx
<div style="display:flex; align-items:center; justify-content:center; gap:4px; height:280px;">
  <label>Icon tooltip</label>
  <span  [tooltipPosition]="'top'" [tooltipText]="'A tooltip can help give hints or more information about a label or other indicator.'" dbsToolTip><svg-icon iconName='circle-information'></svg-icon></span>
</div>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **tooltipPosition** | Position of the tooltip.PopperPositionType | top | Choose option...toptop-lefttop-righttop-starttop-endbottombottom-leftbottom-rightbottom-startbottom-endleftleft-startleft-endrightright-startright-end |
| **tooltipText** | Text of the tooltip.string | "" |  |
| **contentContext** | Template variable object.Objectundefined |  |  |
| **contentTemplate** | If this is specified then specified template will be rendered in the tooltipTemplateRef<any> |  |  |
| **gap** | Gap between trigger and popper in px, defaulted to 10pxnumber | 10 |  |
| **offsetX** | offsets the x position of the tooltip in px.number | 0 |  |
| **offsetY** | offsets the y position of the tooltip in px.number | 0 |  |
| **tooltipDisplay** | show/hide tooltipboolean | true |  |
| **tooltipTitle** | Title of the tooltip.string | "" |  |
| **Hide slots itemsslots** | Hide slots items |  |  |
| **(default)** | Slot for the element that triggers the tooltip.HTMLElement | - |  |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **maxWidth** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **minWidth** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **tooltipColor** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **toolTipPosition** | *(deprecated - ODS) Use `tooltipPosition` instead.*"top""bottom""left""right" |  | topbottomleftright |
| **toolTipText** | *(deprecated - ODS) Use `tooltipText` instead.*string |  |  |

# **Switch**

A checkbox is a graphical widget that allows the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options.

# Usage

Import `DbsSwitchComponent` into your component or module.

```tsx
import { DbsSwitchComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSwitchComponent],
})
```

## **Stories**

**Basic**

```tsx
<dbs-switch (onModelChange)="onModelChange($event)" [size]="size">
  
</dbs-switch>
```

**Form Control Example**

```tsx
<div style="{ display: 'block' }">
  formControl.value: {{formControl.value}}
  <br>
  touched (blur) :{{formControl.touched}}
  <br>
  dirty (changed in UI) :{{formControl.dirty}}
  <br>
  disabled:{{formControl.disabled}}
  <br>
  <dbs-switch #switch
  [formControl]='formControl'>
  </dbs-switch>
  <br>
  <dbs-button size='xs'(click)='formControl.setValue(!formControl.value)'>setValue</dbs-button>
  <dbs-button size='xs'(click)='formControl.reset(false)'>reset</dbs-button>
  <dbs-button size='xs'(click)='formControl.enabled?formControl.disable():formControl.enable()'>
    {{formControl.enabled?'disable':'enable'}}
  </dbs-button>
  <br>
  disabled {{formControlDisabled.disable()}} 
  <br>
  <dbs-switch 
  [formControl]='formControlDisabled'>
  </dbs-switch>
</div>
```

**API Reference**

```tsx
<dbs-switch >
  
</dbs-switch>
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **checked** | Sets the state of the switch. If true, switch is greenboolean | false |  |
| **disabled** | Disable switchboolean | false |  |
| **size** | Size of the switch. By Default, it is "md""md""sm" | md | mdsm |
| **Hide deprecated itemsdeprecated** | Hide deprecated items |  |  |
| **mobileView** | *(deprecated) Use `size` instead.*
This is deprecated, please use size input to enable various sizes of the switchboolean | false |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **onModelChange** | handles `checked` state of the switch when it is toggled(event: boolean) => void |  |  |

# **Calendar Input**

# Usage

Import `DbsCalendarInputComponent` into your component or module.

```tsx
import { DbsCalendarInputComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCalendarInputComponent],
})
```

## **Stories**

**Basic**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "basic-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "basic-story.component.html",
})
export class BasicStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: null,
  });
}
HTML
<dbs-calendar-input [formControl]="formControl"></dbs-calendar-input>
```

### **Form Control**

The `dbs-calendar-input` will set the `formControl` to `null` for invalid dates, examples are

- dates that don't exist (30 Feb)
- dates that exceed the `numberOfPastYears` and `numberOfFutureYears` which are +/- 1000 years

```tsx
<dbs-button (click)="formControl.reset()">Reset</dbs-button>
<dbs-button (click)='formControl.setValue(date)'>set</dbs-button>
<dbs-calendar-input [formControl]="formControl" [date]="date"  ></dbs-calendar-input>
FormControl.value:{{formControl.value|json}}
<br>
touched:{{formControl.touched|json}}
<br>
dirty:{{formControl.dirty|json}}
<br>
invalid:{{formControl.invalid|json}}
```

**Disabled**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "disabled-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "disabled-story.component.html",
})
export class DisabledStoryComponent {
  disabledFormControl: UntypedFormControl = new UntypedFormControl({
    date: new Date(),
  });
  ngOnInit() {
    this.disabledFormControl.disable();
  }
}
HTML
<p>Disabled by FormControl</p>
<p>FormControl Value: {{ disabledFormControl.value?.date }}</p>
<dbs-calendar-input [formControl]="disabledFormControl"></dbs-calendar-input>

<p>Disabled by input</p>
<dbs-calendar-input [disabled]="true"></dbs-calendar-input>
```

**Read-only**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "readonly-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "readonly-story.component.html",
})
export class ReadonlyStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: new Date("12/07/2024"),
  });
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [dateFormat]="'YYYY MM DD'"
  [seperator]="' '"
>
  <div secondSlot>年</div>
  <div thirdSlot>月</div>
  <div endSlot>日</div>
</dbs-calendar-input>
```

### **Dynamic Date Format**

Use the `focusin` and `focusout` events to update `dateFormat` dynamically

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "dynamic-date-format-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "dynamic-date-format-story.component.html",
})
export class DynamicDateFormatStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: new Date("01/11/2022"),
  });
  selectedDateFormat = "DD MMM YYYY";
}
**HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [dateFormat]="selectedDateFormat"
  (focusout)="selectedDateFormat= 'DD MMM YYYY'"
  (focusin)="selectedDateFormat= 'DD MM YYYY'"
  [seperator]="' '"
>
</dbs-calendar-input>**
```

**Month Mode**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "month-mode-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "month-mode-story.component.html",
})
export class MonthModeStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: new Date(),
  });
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [monthMode]="true"
></dbs-calendar-input>
```

### **Month Mode With Custom Date Format**

Month modes use the `startSlot`,`thirdSlot`,`endSlot` with a `" "` seperator to customise the layout

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "month-mode-custom-format-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "month-mode-custom-format-story.component.html",
})
export class MonthModeCustomFormatStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: new Date(),
  });
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [monthMode]="true"
  [dateFormat]="'YYYY MM'"
  [seperator]="' '"
>
  <div thirdSlot>年</div>
  <div endSlot>月</div>
</dbs-calendar-input>
```

**Mobile View**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "mobile-view-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "mobile-view-story.component.html",
})
export class MobileViewStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl({
    date: new Date(),
  });
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [mobileView]="true"
></dbs-calendar-input>
```

**Validation And Help Text**

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "validation-help-text-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "validation-help-text-story.component.html",
})
export class ValidationHelpTextStoryComponent {
  formControl: UntypedFormControl = new UntypedFormControl(
    {
      date: new Date(),
    },
    Validators.required,
  );
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [errorMsg]="'Display Error Message'"
  helpText="'Help Text'"
></dbs-calendar-input>
<p>Errors:</p>
{{formControl.errors|json}}
```

### **MinDate (Validator)***

- Please include the `Validator` function included below to enable validation.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "min-date-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "min-date-story.component.html",
})
export class MinDateStoryComponent {
  minDate = new Date(new Date().setHours(0, 0, 0, 0));
  formControl: UntypedFormControl = new UntypedFormControl(
    {
      date: new Date(),
    },
    { validators: [Validators.required, minDateValidator(this.minDate)] },
  );
  /** start of today */
}

/** Min date validator function */
export function minDateValidator(minDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null; // Skip if empty (let required validator handle it)

    if (control.value?.date < minDate) {
      return { minDate: true };
    }

    return null;
  };
}
HTML
<p>[minDate] is set to the start of today</p>
<p>Min Date: {{ minDate }}</p>
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [minDate]="minDate"
></dbs-calendar-input>
errors: {{formControl.errors|json}}
```

### **MaxDate (Validator)***

- Please include the `Validator` function included below to enable validation.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "max-date-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "max-date-story.component.html",
})
export class MaxDateStoryComponent {
  maxDate: Date = new Date(new Date().setHours(24, 0, 0, 0));
  formControl: UntypedFormControl = new UntypedFormControl(
    {
      date: new Date(),
    },
    { validators: [Validators.required, maxDateValidator(this.maxDate)] },
  );
}

/** Max date validator function */
export function maxDateValidator(maxDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null; // Skip if empty (let required validator handle it)

    if (control.value.date > maxDate) {
      return { maxDate: true };
    }

    return null;
  };
}
HTML
<p>[maxDate] is set to the start of tomorrow</p>
<p>Max Date: {{ maxDate }}</p>
<p>FormControl Value: {{ formControl.value?.date }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [maxDate]="maxDate"
></dbs-calendar-input>
errors: {{formControl.errors|json}}
```

### **MinDate and MaxDate (Validator)***

- Please include **both** the `Validator` functions included below to enable validation.

```tsx
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { DbsCalendarInputComponent } from "../../dbs-calendar-input.component";

@Component({
  selector: "min-max-date-story",
  standalone: true,
  imports: [CommonModule, DbsCalendarInputComponent, ReactiveFormsModule],
  templateUrl: "min-max-date-story.component.html",
})
export class MinMaxDateStoryComponent {
  minDate: Date = new Date("10 July 2023");
  maxDate: Date = new Date("10 July 2025");
  formControl: UntypedFormControl = new UntypedFormControl(
    {
      date: new Date("10 July 2024"),
    },
    {
      validators: [
        Validators.required,
        minDateValidator(this.minDate),
        maxDateValidator(this.maxDate),
      ],
    },
  );
}

/** Min date validator function */
export function minDateValidator(minDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null; // Skip if empty (let required validator handle it)

    if (control.value?.date < minDate) {
      return { minDate: true };
    }

    return null;
  };
}

/** Max date validator function */
export function maxDateValidator(maxDate: Date) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.date) return null; // Skip if empty (let required validator handle it)

    if (control.value.date > maxDate) {
      return { maxDate: true };
    }

    return null;
  };
}
HTML
<p>FormControl Value: {{ formControl.value?.date }}</p>
<p>Min Date: {{ minDate }}</p>
<p>Max Date: {{ maxDate }}</p>
<dbs-calendar-input
  [formControl]="formControl"
  [minDate]="minDate"
  [maxDate]="maxDate"
></dbs-calendar-input>
errors: {{formControl.errors|json}}
```

API Reference

```tsx
 
<dbs-calendar-input [formControl]="formControl"  ></dbs-calendar-input>
formControl:{{formControl.value|json}} 
<br>
Date pipe:{{formControl.value?.date|date:'d MMM y h:mm:ss a'}}
<br>
*Note that the Formcontrol value is a Date class thus the numbers may not be visually equivalant to the parsed date
```

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| **Hide inputs itemsinputs** | Hide inputs items |  |  |
| **bottomSheetFooterButtonLayout** | Bottom Sheet layout of `<dbs-button>` elements.
• `stretched` (default): Buttons stretch evenly to fill the row.
• `stacked`: Buttons stack one on top of the other."stretched""stacked" | stretched | stretchedstacked |
| **dateFormat** | Date format displayed in input. `seperator` input needed to format the date and placeholder display Takes in combinations of DD, MM, and YYYY, with the same `seperator`.string | DD/MM/YYYY |  |
| **disabled** | Set true to disable the calendarboolean | false |  |
| **errorMsg** | Optional. Message to display when the form control has an errorstring | "" |  |
| **helpText** | Optional. Shows a constant helper text below the input unless there is an errorstring | "" |  |
| **isReadOnly** | Set true to set the calendar as readonlyboolean | false |  |
| **maxDate** | Set the maximum date selectable by users `Fri Dec 31 3000 00:00:00 GMT+0000` (Coordinated Universal Time)Date | new Date(3000, 11, 31) |  |
| **minDate** | Set the minimum date selectable by users `Mon Jan 01 1000 00:00:00 GMT+0000` (Coordinated Universal Time)Date | new Date(1000, 0, 1) |  |
| **mobileView** | Sets the calendar to mobile view and render it in a bottom sheetboolean | false |  |
| **monthMode** | Shows only the month and year. Will change to true if dateFormat only contains MM and YYYYboolean | false |  |
| **numberOfFutureYears** | Sets number of future years to be generated in the calendar Any year above this number will be considered an invalid Date and formControl will be nullnumber | 1000 |  |
| **numberOfPastYears** | Sets number of past years to be generated in the calendar Any year below this number will be considered an invalid Date and formControl will be nullnumber | 1000 |  |
| **position** | Position of the calendar pop up with respect to the calendar icon on the input."top""top-left""top-right""top-start""top-end""bottom""bottom-left""bottom-right"Show 8 more... | bottom-right | Choose option...toptop-lefttop-righttop-starttop-endbottombottom-leftbottom-rightbottom-startbottom-endleftleft-startleft-endrightright-startright-end |
| **seperator** | Date seperator. Needs to match the seperator in the `dateFormat` input
i.e. `/`,`-`,`" "`(blank space)string | / |  |
| **showClear** | Used to show the clear button on the dbs-calendarboolean | false |  |
| **size** | Sets the size of the calendar input"sm""md" | md | smmd |
| **todayButton** | Toggles today button in the calendarboolean | true |  |
| **todaySelect** | Toggles today button selecting today's date when pressed, default falseboolean | false |  |
| **align** | *(deprecated - ODS) No longer has any effect.*string |  |  |
| **allowKeyboard** | *(deprecated - ODS) No longer has any effect.*boolean | false |  |
| **Hide outputs itemsoutputs** | Hide outputs items |  |  |
| **dateUpdated** | Output emitter when the date is updatedEventEmitter |  |  |
| **Hide methods itemsmethods** | Hide methods items |  |  |
| **checkInputLengthDay** | (event: any, pos: number) => void |  |  |
| **focusInputAtPostion** | (pos: number) => void |  |  |
| **formatDate** | () => void |  |  |
| **inputFocusNext** | (pos: number) => boolean |  |  |
| **isCurMonthNumber** | Returns if curMonth is a parseable Number(this.curMonth) !isNaN(Number(this.curMonth));() => boolean |  |  |
| **onPaste** | (event: ClipboardEvent) => void |  |  |
| **validateDate** | () => void |  |  |