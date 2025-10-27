# DBS Angular Library Part 2

```markdown
### DBS Angular Library Components Part 2
## Input Stepper
Input Stepper
Usage
Import DbsInputStepperComponent into your component or module.

import { DbsInputStepperComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsInputStepperComponent],
})
Copy
Stories
Basic
Numeric value:
The value changes when user enters a value into the field or uses the increase/decrease controls.

Formatting when typing:
When user enters large numeric values (1000), the field value is formatted with locale/lang-specific thousands separators.

Formatting on blur:
After user enters a value exceeding min/max values, field value is clamped to min or max value respectively. Any fraction numbers will be rounded to maxFractionDigit as well.

Step controls:
When field value exceeds/is-at min/max values, step controls are disabled. On long click-hold 150ms, value increase/decrease will accelerate.

Keyboard navigation:
While focus is within input, up↑ and down↓ arrow keypress will increase/decrease value respectively.

Visually hidden labels:
To maintain screen-reader accessibility, control labels are given visually hidden text labels.

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
With fractional steps
Fractional values:
When user enters a value or uses the increase/decrease controls, the value is rounded and formatted to the step fractional digit.

Field Label
Bid size: 0.5
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
At minimum value
Disabled minimum:
To start with a disabled minimum control, set min to initial field value.

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
At maximum value
Disabled maximum:
To start with a disabled maximum control, set max to initial field value.

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Read-only
Focus state:
When input is on read-only, field should still be focusable, but value should not be editable.

Disabled controls:
When input is on read-only, non-interactable decrease/increase controls are hidden.

Field Label
0
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" [readonly]="readonly" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Read-only with readonlyPlaceholder
Default:
When input is on read-only and there's no value, the placeholder would default to '-'

Read only Placeholder:
When input is on read-only, you may use reaedonlyPlaceholder input for placeholder when there's no value.

Field Label
Readonly placeholder
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" [readonly]="readonly" [readonlyPlaceholder]="readonlyPlaceholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Disabled
Completely disabled:
When input is disabled, controls are naturally also disabled.

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" [disabled]="disabled" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Disabled with placeholder
Field Label
Bid size: 1
0.00

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" [disabled]="disabled" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Success status with a success message
Field Label
Bid size: 1
0

Decrease

Increase
Success message
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
            @if(formControl.value != '') {
                <div [style.display]="'flex'" [style.margin-top.px]="8" [style.align-items]="'center'" 
                  [style.font-family]="'var(--input-stepper-font-family)'" [style.font-size.px]="13">
                    <span class="icon icon__checkmark--success"></span>
                    <label [style.margin-left.px]="4" [style.color]="'var(--color-text-success)'">Success message</label>
                </div>
            }
Copy
Error status with an error message
To view error message, set the input field to invalid (eg. empty).
Error message: To define error message, set errorMsg to custom value.

Field Label
Bid size: 1
0

Decrease

Increase
Help text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Error status with an error message and help text
helpText is optional and if provided, will be shown by default and when there is no error. When there is an error and if the errorMsg is provided, the errorMsg will be shown instead of the help text.

To view error message, set the input field to invalid (eg. empty).

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Using compact class
Compact class:
Applied on a parent div (eg. counter) so that you can easily style inner elements, such as:
Setting counter to a height of 32px
Setting input field to a height of 16px

Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [class]="'compact'" [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
API Reference
Field Label
Bid size: 1
0

Decrease

Increase
Help Text
Hide code
            
<div [style.display]="'flex'" [style.margin-bottom.px]="8" [style.justify-content]="'space-between'" [style.font-family]="'var(--input-stepper-font-family)'" [style.color]="'var(--color-neutral-90)'">
    <div [style.display]="'flex'" [style.align-items]="'center'">
        <label [style.font-size.px]="14">Field Label</label>
        <span [style.height.px]="16" [style.width.px]="16" [style.margin-left.px]="4"  class="icon icon__info--straight" dbsTooltip [tooltipPosition]="'top'" [tooltipText]="'Hello World'"></span>
    </div>
    <label [style.font-size.px]="13">
        Bid size:
        <span [style.font-weight]="'var(--font-weight-semibold)'">{{step}}</span>
    </label>
</div>

            <dbs-input-stepper [formControl]="formControl" [step]="step" [min]="min" [max]="max" [errorMsg]="errorMsg" [helpText]="helpText" [placeholder]="placeholder" (blur)="blur($event)" (change)="change($event)" (keyup)="keyup($event)"></dbs-input-stepper>
Copy
Name	Description	Default	
Control
formControl	
object
-	
formControl :{...} 26 keys
Hide inputs items
inputs
Hide inputs items
step	
Increment step for increase/decrease. If number is a float, this value will be used to set the minimum fraction digits

number
1
1
min	
Minimum value for input. If current value is at minimum, decrease control button would be disabled.

number
NaN
-1000
max	
Maximum value for input. If current value is at maximum, increase control button would be disabled.

number
NaN
1000
errorMsg	
Optional. Message to display when the form control has an error

string
""
Error message
helpText	
Optional. Shows a constant helper text below the input unless there is an error

string
""
Help Text
placeholder	
Placeholder of the input field

string
0.00
0.00
aria-describedby	
Aria-related attribute that identifies the element (or elements) that describes this element

string
aria-description	
Aria-related attribute that defines a string value that describes the element

string
aria-invalid	
Aria-related attribute that indicates the entered value does not conform to the format expected.

boolean
false
aria-label	
Aria-related attribute that labels an interactive element

string
aria-labelledby	
Aria-related attribute that identifies the element (or elements) that labels the element it is applied to.

string
disabled	
Whether input would be disabled

boolean
false
id	
Unique identifier of the input field

string
`input-counter-${this.uniqueId}`	
locale	
Locale string for language-sensitive number formatting (i.e. thousands separator, decimal separator)

string
defaultLocale
longHoldIntervalDuration	
Timing duration for click + long-hold of control buttons for increasing/decreasing input value

number
150
name	
Unique name of the input field

string
`input-counter-${this.uniqueId}`	
readonly	
Whether input value would be readonly

boolean
false
readonlyPlaceholder	
Placeholder when readonly is true

string
-
required	
Whether an input value would be required

boolean
false
restrictTyping	
Restrict users from typing in a value into the input field directly Input value can only be adjusted through the increase/decrease controls

boolean
false
size	
Font size of the input, 16px for md and 14px for sm

"sm"
"md"
"md"

sm

md
Hide properties items
properties
Hide properties items
uniqueId	
""
crypto.randomUUID()	
Hide deprecated items
deprecated
Hide deprecated items
decimal_places	
Has no effect.
Sets the number of decimal places. Number of decimal places/fractional digits is derived from step.

number
NaN
hideMinus	
Has no effect.
Set an appropriate min value instead. Decrease control button would be automatically disabled at min value.

boolean
false
hidePlus	
Has no effect.
Set an appropriate max value instead. Increase control button would be automatically disabled at max value.

boolean
false
maximum_value	
Use max instead.
Sets the max value.

number
NaN
minimum_value	
Use min instead.
Sets the min value.

number
NaN
readOnly	
Use readonly instead.
Whether input value would be readonly.

boolean
false
step_value	
Use step instead.
Sets the step value.

number
NaN
Hide outputs items
outputs
Hide outputs items
blur	
Emitted when focus is removed from the input.

Observable<FocusEvent>
Edit JSON string...
change	
Emitted for each alteration to the value of the input.

Observable<string>
Edit JSON string...
keyup	
Emitted when a key is released.

Observable<KeyboardEvent>
Edit JSON string...

## Input

Input
These are text input boxes that allow users to fill in information for forms or requests. It encapsulates the <input> HTMLElement and extends its behaviour.

Usage
The DBS Input provides a comprehensive text input component that supports various input types, validation states, formatting options, and accessibility features. It integrates seamlessly with Angular forms and provides extensive customization for different use cases.

Basic Usage:
<!-- Text Input -->
<dbs-input
  [formControl]="myFormControl"
  placeholder="Enter text here">
</dbs-input>

<!-- Number Input with Formatting -->
<dbs-input
  type="number"
  [formControl]="numberControl"
  [autoFormatNumber]="true"
  [allowNegativeNumber]="true">
</dbs-input>

<!-- Password Input -->
<dbs-input
  type="password"
  [showEyeIcon]="true"
  placeholder="Enter password">
</dbs-input>
Copy
Visual Description
Container Structure
Main Container: .dbs-input with size variants controlled by [size] (--size-md, --size-sm)
Container Classes: Applied via [class] input for custom styling
State Classes:
dbs-input--disabled when [disabled]="true"
dbs-input--readonly when [readonly]="true"
dbs-input--error when [validationMessage] is set (deprecated)
Click Behavior: Entire container focuses the input when clicked
Field Label (Optional)
Label Display: dbs-field-label component appears when [labelPlaceholder] is provided (deprecated)
Label Size: Matches input size via [size] input
Tooltip Integration: Shows tooltip icon when [tooltipContent] is provided (deprecated)
Input Field Structure
Start Slot: .dbs-input__start-slot for content projection via [startSlot] selector
Input Element: .dbs-input__input-field with additional classes from [inputClass]
End Slot: .dbs-input__end-slot for content projection via [endSlot] selector
Input Element Attributes
Type: Set via [type] input (default: 'text', supports 'password', 'number', 'tel', etc.)
Identification: [inputId] sets the input's id attribute (auto-generated if not provided)
Placeholder: [placeholder] text, replaced with [readonlyPlaceholder] when [readonly]="true"
Validation Constraints:
[min] and [max] for numeric inputs
[minlength] and [maxlength] for text length validation
[required]="true" adds required attribute
Behavior Attributes:
[autofocus]="true" focuses input on page load
[disabled]="true" disables the input
[readonly]="true" makes input read-only
[spellcheck]="true" enables spell checking
[tabindex] controls tab order
Mobile Attributes:
[autocorrect] controls mobile autocorrection
[autocapitalize] controls mobile capitalization behavior
[inputmode] suggests mobile keyboard type
Form Integration:
[name] sets the input name attribute
[autocomplete]="true" enables browser autocomplete
[updateOn] controls when form value updates ('change', 'blur', 'submit')
Accessibility Support
ARIA Labels: [ariaLabel] and [ariaLabelledBy] for screen readers
ARIA States: [ariaDisabled], [ariaRequired], [ariaInvalid] for accessibility
Focus Management: Automatic focus handling with keyboard navigation support
Action Buttons in End Slot
Clear Button: dbs-icon-button with 'clear-filled' icon appears when:
[showClear]="true" AND
[readonly]="false" AND
displayValue has content AND
Input is focused (focused state)
Password Eye Button: dbs-icon-button with eye icon appears when:
[type]="'password'" AND
[showEyeIcon]="true"
Icon switches between 'eye' and 'eye-off' based on display state
Message Area (Below Input)
Message Container: .dbs-input__message with size variant --{{ size }}
Error State: .dbs-input__message--error when [validationMessage] is set (deprecated)
Help Text: .dbs-input__help-text displays [helpText] when not [readonly]
Error Message: .dbs-input__error-msg displays [errorMsg] when not [readonly]
Character Counter: .dbs-input__counter shows "X/Y" format when:
[showCharacterCounter]="true" AND
[maxlength] is set AND
[disabled]="false" AND
[readonly]="false"
Size Variants (controlled by [size])
Medium (md): Default size with standard height and font sizing
Small (sm): Compact size with reduced height and font sizing
Responsive: Message area and label adapt to match input size
Number Input Features (when [type]="'number'")
Number Formatting: Thousand separators when [autoFormatNumber]="true"
Locale Support: Number formatting respects [locale] setting (default: 'en')
Rounding Options: Controlled by [roundingOptions] object:
option: 'down', 'up', or 'round' (default: 'down')
decimalPlaces: Number of decimal places (-1 for auto, default: -1)
Negative Numbers: Allowed when [allowNegativeNumber]="true"
Input Validation: Prevents non-numeric characters during typing
Paste Protection: Strips negative signs when [allowNegativeNumber]="false"
Content Projection Slots
Start Slot: <ng-content select="[startSlot]"> - Content before input field (icons, prefixes)
End Slot: <ng-content select="[endSlot]"> - Content after input field (icons, suffixes)
State Management
Focus State: focused property tracks input focus for conditional rendering
Display Value: displayValue handles formatted display vs actual value for numbers
Value Binding: Supports both formatted display and raw value through ControlValueAccessor
Event Handling
Focus Events: (focus) emits when input gains focus via handleFocus()
Blur Events: (blur) emits when input loses focus via handleBlur()
Change Events: (change) emits on value changes via handleModelChange()
Input Events: (input) emits on input events
Key Events: (keyup) emits on key release, keyPress() handles key validation
Clear Action: handleClearMouseDown() clears input when clear button clicked
Password Eye Action: onClickPasswordEye() switches password display mode
Developer Restrictions & Notes
Required Dependencies
Component requires maxlength when [showCharacterCounter]="true"
Number inputs with [allowNegativeNumber]="true" should use [type]="'number'"
Number Input Limitations
Precision Limit: Numbers above 16 digits lose accuracy (Number.MAXSAFEINTEGER)
Type Conversion: [type]="'number'" is internally converted to 'text' for better control
Validation: Only digits, decimal points, and minus signs (when allowed) are permitted
Form Integration Notes
Value Updates: Controlled by [updateOn] - affects when validators run and error states display
Disabled State: Use FormControl's disable() method instead of [disabled] input when using reactive forms
Error Display: Error messages only show when form control is invalid, dirty, and touched
Accessibility Requirements
Labels: Provide either [ariaLabel] or [ariaLabelledBy] for screen readers
Error Messages: Use [errorMsg] instead of deprecated [validationMessage]
Required Controls: Set [required]="true" and [ariaRequired]="true" for mandatory form controls
Performance Considerations
Number Formatting: Applied on blur to avoid performance issues during typing
Event Handling: Uses efficient event delegation and prevents unnecessary re-renders
Memory Management: Properly implements ControlValueAccessor lifecycle methods
Migration Notes (Deprecated Features)
Label: [labelPlaceholder] deprecated - use DbsFieldLabelDirective instead
Character Counter: [characterCounter] deprecated - use [showCharacterCounter] instead
Number Formatting: [thousandSeparator] deprecated - use [autoFormatNumber] instead
Negative Numbers: [negativeNum] deprecated - use [allowNegativeNumber] instead
Validation: [validationMessage] deprecated - use [errorMsg] instead
Display Mode: [displayMode] deprecated - use [readonly] instead
Tooltips: [tooltipContent] deprecated - use DbsFieldLabelComponent with DbsFieldLabelIconComponent
Browser Compatibility
Mobile Support: Handles mobile-specific attributes like [autocorrect] and [autocapitalize]
Input Modes: [inputmode] provides hints for mobile keyboard display
Autocomplete: Respects browser autocomplete settings via [autocomplete]
Security Considerations
Password Controls: Use [type]="'password'" with [showEyeIcon]="true" for secure password entry
Input Validation: Client-side validation should be supplemented with server-side validation
Sanitization: Component handles basic input sanitization for number types
Usage
Import DbsInputComponent into your component or module.

import { DbsInputComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsInputComponent],
})
Copy
Stories
Basic
placeholder
Hide code
<dbs-input  [placeholder]="'placeholder'" ></dbs-input>
Copy
Show Character Counter
Please set maxlength when using showCharacterCounter

placeholder
0/10
Hide code
<dbs-input  [placeholder]="'placeholder'" [showCharacterCounter]="true" [maxlength]="10" ></dbs-input>
Copy
Form Control
patch valuereset
value:null
invalid:true
touched:false
dirty:false
Hide code
<dbs-button (click)='formControl.patchValue("patchedValue")'>patch value</dbs-button>
<dbs-button (click)='formControl.reset()'>reset</dbs-button>
<dbs-input [formControl]="formControl"  ></dbs-input>
value:{{formControl.value |json }} <br>
invalid:{{formControl.invalid }}<br>
touched:{{formControl.touched }}<br>
dirty:{{formControl.dirty }}
Copy
Show Clear
You can use showClear to show the clear button when user focuses on the field

this sets the form to ""
it also sets touched
it also sets dirty as you update the value
patch valuereset
prefilled
value:"prefilled"
invalid:false
touched:false
dirty:false
Hide code
<dbs-button (click)='formControl.patchValue("patchedValue")'>patch value</dbs-button>
<dbs-button (click)='formControl.reset()'>reset</dbs-button>
<dbs-input [formControl]="formControl" [showClear]="showClear"  ></dbs-input>
value:{{formControl.value |json }} <br>
invalid:{{formControl.invalid }}<br>
touched:{{formControl.touched }}<br>
dirty:{{formControl.dirty }}
Copy
Field Label
Import the DbsFieldLabelDirective

Input Label
Hide code
<dbs-input   [fieldLabel]='"Input Label"' [fieldLabelDisplayTooltipIcon]='true' [fieldLabelTooltipText]='"tooltip text"'></dbs-input>
Copy
Size
sm
md
Hide code
<dbs-input  [size]="'sm'" [fieldLabel]="'sm'" ></dbs-input>
<dbs-input  [size]="'md'" [fieldLabel]="'md'" ></dbs-input>
Copy
Customise Inputs
Hide code
<dbs-input   ><svg-icon startSlot iconName='pulse'></svg-icon><svg-icon endSlot iconName='pulse'></svg-icon></dbs-input>
Copy
Reactive Form Control For Number
Form control initialised with null value:
Touched:
false
Dirty:
false
Valid:
true
Display value:
-
Component value:
null (object)
Form control value:
null (object)
Form control initialised with value 1000 as number:
1,000
Touched:
false
Dirty:
false
Valid:
true
Display value:
1,000 (string)
Component value:
1000 (string)
Form control value:
1000 (number)
Form control initialised with value 2000 as string:
2,000
Touched:
false
Dirty:
false
Valid:
true
Display value:
2,000 (string)
Component value:
2000 (string)
Form control value:
2000 (string)
Simulate programmatic update of form control value:
Update value
Mark as pristine
Touched:
false
Dirty:
false
Valid:
true
Display value:
-
Component value:
null (object)
Form control value:
null (object)
Observe when changes are registered:
3,000.00
Form control changes count:
0
HTML
<form class="demo-container" [formGroup]="formGroup">
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Form control initialised with null value:</div>
        <dbs-input
          #input0
          type="number"
          formControlName="initNullValueControl"
          [autoFormatNumber]="true"
        ></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['initNullValueControl'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['initNullValueControl'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['initNullValueControl'].valid }}</div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Display value:</div>
        <div>{{ formatValueAndType(input0.displayValue) }}</div>
      </div>
      <div class="flex-element">
        <div>Component value:</div>
        <div>{{ formatValueAndType(input0.value) }}</div>
      </div>
      <div class="flex-element">
        <div>Form control value:</div>
        <div>
          {{
            formatValueAndType(formGroup.controls['initNullValueControl'].value)
          }}
        </div>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Form control initialised with value 1000 as number:</div>
        <dbs-input
          #input1
          type="number"
          formControlName="initNumberValueControl"
          [autoFormatNumber]="true"
        ></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['initNumberValueControl'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['initNumberValueControl'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['initNumberValueControl'].valid }}</div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Display value:</div>
        <div>{{ formatValueAndType(input1.displayValue) }}</div>
      </div>
      <div class="flex-element">
        <div>Component value:</div>
        <div>{{ formatValueAndType(input1.value) }}</div>
      </div>
      <div class="flex-element">
        <div>Form control value:</div>
        <div>
          {{
            formatValueAndType(
              formGroup.controls['initNumberValueControl'].value
            )
          }}
        </div>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Form control initialised with value 2000 as string:</div>
        <dbs-input
          #input2
          type="number"
          formControlName="initStringValue"
          [autoFormatNumber]="true"
        ></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['initStringValue'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['initStringValue'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['initStringValue'].valid }}</div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Display value:</div>
        <div>{{ formatValueAndType(input2.displayValue) }}</div>
      </div>
      <div class="flex-element">
        <div>Component value:</div>
        <div>{{ formatValueAndType(input2.value) }}</div>
      </div>
      <div class="flex-element">
        <div>Form control value:</div>
        <div>
          {{ formatValueAndType(formGroup.controls['initStringValue'].value) }}
        </div>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Simulate programmatic update of form control value:</div>
        <dbs-input
          #input3
          type="number"
          formControlName="simulationControl"
          [autoFormatNumber]="true"
          [roundingOptions]="roundingOptions"
          [allowNegativeNumber]="true"
        ></dbs-input>
      </div>
      <div class="flex-element">
        <div class="button-container">
          <dbs-button variant="secondary" size="md" (click)="simulateUpdate()"
            >Update value</dbs-button
          >
          <dbs-button variant="secondary" size="md" (click)="markAsPristine()"
            >Mark as pristine</dbs-button
          >
        </div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['simulationControl'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['simulationControl'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['simulationControl'].valid }}</div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Display value:</div>
        <div>{{ formatValueAndType(input3.displayValue) }}</div>
      </div>
      <div class="flex-element">
        <div>Component value:</div>
        <div>{{ formatValueAndType(input3.value) }}</div>
      </div>
      <div class="flex-element">
        <div>Form control value:</div>
        <div>
          {{
            formatValueAndType(formGroup.controls['simulationControl'].value)
          }}
        </div>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Observe when changes are registered:</div>
        <dbs-input
          type="number"
          formControlName="observeChangesControl"
          [autoFormatNumber]="true"
          [roundingOptions]="roundingOptions"
          [allowNegativeNumber]="true"
        ></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Form control changes count:</div>
        <div>{{ formControlChangeCount }}</div>
      </div>
    </div>
  </div>
</form>
TypeScript
HTML
import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { DbsInputComponent } from "../../dbs-input.component";
import { Subscription } from "rxjs";
import { DbsButtonComponent } from "../../../../public-api";

@Component({
  selector: "dbs-input-reactive-form-control-number-story",
  standalone: true,
  imports: [
    CommonModule,
    DbsInputComponent,
    FormsModule,
    ReactiveFormsModule,
    DbsButtonComponent,
  ],
  templateUrl: "dbs-input-reactive-form-control-number-story.component.html",
  styleUrls: ["./dbs-input-reactive-form-control-number-story.component.scss"],
})
export class DbsInputReactiveFormControlNumberStoryComponent
  implements OnInit, OnDestroy
{
  formGroup: FormGroup;
  formControlChangeCount = 0;
  changesSub: Subscription;
  roundingOptions = {
    decimalPlaces: 2,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      initNullValueControl: [],
      initNumberValueControl: [1000],
      initStringValue: ["2000"],
      simulationControl: [],
      observeChangesControl: ["3000"],
    });
    this.changesSub = this.formGroup.controls[
      "observeChangesControl"
    ].valueChanges.subscribe(() => {
      this.formControlChangeCount += 1;
    });
  }

  ngOnDestroy(): void {
    this.changesSub.unsubscribe();
  }

  formatValueAndType(value: any) {
    return value !== undefined && value !== ""
      ? value + " (" + typeof value + ")"
      : "-";
  }

  simulateUpdate() {
    this.formGroup.patchValue({
      simulationControl: Math.random() * 10000,
    });
  }

  markAsPristine() {
    this.formGroup.controls["simulationControl"].markAsPristine();
  }
}
Copy
Reactive Form Control Validation
Required text form control:
Touched:
false
Dirty:
false
Valid:
false
Email form control:
Touched:
false
Dirty:
false
Valid:
false

HTML
<form class="demo-container" [formGroup]="formGroup">
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Required text form control:</div>
        <dbs-input
          type="text"
          formControlName="requiredTextControl"
        ></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['requiredTextControl'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['requiredTextControl'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['requiredTextControl'].valid }}</div>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <div class="flex-row">
      <div class="flex-element">
        <div>Email form control:</div>
        <dbs-input type="email" formControlName="emailControl"></dbs-input>
      </div>
      <div class="flex-element"></div>
    </div>
    <div class="flex-row">
      <div class="flex-element">
        <div>Touched:</div>
        <div>{{ formGroup.controls['emailControl'].touched }}</div>
      </div>
      <div class="flex-element">
        <div>Dirty:</div>
        <div>{{ formGroup.controls['emailControl'].dirty }}</div>
      </div>
      <div class="flex-element">
        <div>Valid:</div>
        <div>{{ formGroup.controls['emailControl'].valid }}</div>
      </div>
    </div>
  </div>
</form>
TypeScript
HTML
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  DEFAULT_EMAIL_REGEX,
  DbsInputComponent,
} from "../../dbs-input.component";

@Component({
  selector: "dbs-input-reactive-form-control-validation-story",
  standalone: true,
  imports: [CommonModule, DbsInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl:
    "dbs-input-reactive-form-control-validation-story.component.html",
  styleUrls: [
    "./dbs-input-reactive-form-control-validation-story.component.scss",
  ],
})
export class DbsInputReactiveFormControlValidationStoryComponent
  implements OnInit
{
  formGroup: FormGroup;
  formControlChangeCount = 0;
  value: string = "11111";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      requiredTextControl: ["", Validators.required],
      emailControl: [
        "",
        [Validators.required, Validators.pattern(DEFAULT_EMAIL_REGEX)],
      ],
    });
  }

  formatValueAndType(value: any) {
    return value !== undefined && value !== ""
      ? value + " (" + typeof value + ")"
      : "-";
  }
}
Copy
Password

Hide code
<dbs-input  [type]="'password'" [showEyeIcon]="true" ></dbs-input>
Copy
Error
This is an error value
This is a errorMsg
Hide code
<dbs-input  [value]="'This is an error value'" [errorMsg]="'This is a errorMsg'" class='ng-invalid ng-touched ng-dirty'></dbs-input>
Copy
Read Only
This is a readonly value
Hide code
<dbs-input  [readonly]="true" [value]="'This is a readonly value'" ></dbs-input>
Copy
Disabled
This disabled value
Hide code
<dbs-input  [disabled]="true" [value]="'This disabled value'" ></dbs-input>
Copy
Outputs
You may observe the Output events in the console

(focus), (blur), (input), (keyup), (change)*,
*(change) emits both string and Event types, you may filter which to use based on their type
prepopulated
Hide code
<dbs-input  [ngModel]="'prepopulated'" 
#inputDemo
(focus)='input($event)'
(blur)='input($event)'
(input)='input($event)'
(change)='input($event)'
(keyup)='input($event)'
></dbs-input>
Copy
API Reference
Hide code
<dbs-input   ></dbs-input>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
allowNegativeNumber	
Allows negative and positive numbers for number inputs field. Pressing - will change the sign of the input value.

boolean
false
aria-disabled	
boolean
false
aria-invalid	
boolean
false
aria-label	
Aria related inputs.

string
aria-labelledby	
string
aria-required	
boolean
false
autocapitalize	
'off' or 'none': No autocapitalization is applied (all letters default to lowercase) 'on' or 'sentences': The first letter of each sentence defaults to a capital letter; all other letters default to lowercase 'words': The first letter of each word defaults to a capital letter; all other letters default to lowercase 'characters': All letters should default to uppercase

string
autocomplete	
Set input elements autocomplete to on

boolean
false
autocorrect	
Sets to 'off' to prevent mobile from autocorrecting text

string
autofocus	
Set true to autofocus on page load

boolean
false
autoFormatNumber	
Formats number with thousand seperator

boolean
false
class	
Sets the higest level div element's class

string
disabled	
Set true to disable the input field

boolean
false
errorMsg	
Error message to display when input validation fails. Only shown when component has classes .ng-invalid.ng-dirty.ng-touched. When visible, it overrides and hides the helpText and character counter. Use with form validation to provide specific error feedback.

string
""
helpText	
Help text displayed below the input to provide additional guidance. Only visible when the component is NOT in error state. Hidden when errorMsg is shown (when form is invalid, dirty and touched). Use for supplementary instructions that help users complete the field correctly.

string
""
inputClass	
Sets the higest level div element's class

string
""
inputId	
Set the id of the input

string
`dbs-input-${Math.random().toString(36).substring(2, 9)}`	
inputmode	
Instructs browser on which keyboard to display. Works with the following types: none, numeric, tel, decimal, email, url, search

string
""
locale	
Sets the translation used

string
"en"
max	
specifies the maximum value for the input element. works with the following input types: number, range, date, datetime-local, month, time and week.

string
number
maxlength	
Maximum length of user input

number
NaN
min	
specifies the minimum value for the input element. works with the following input types: number, range, date, datetime-local, month, time and week.

string
number
minlength	
Minimum length of user input

number
NaN
name	
Set name of the input field

string
placeholder	
Placeholder of input field

string
""
readonly	
set the input field to readonly

boolean
false
readonlyPlaceholder	
Placeholder of input field when readonly is true

string
-
required	
Sets 'required' attribute on the input element

boolean
false
roundingOptions	
Sets the rounding options used for numbers

literal type
this.defaultRoundingOptions
showCharacterCounter	
Counter which limits the characters used against maxlength

(Requires maxlength) - limits the number of characters left. Displays as eg. 0/20

boolean
false
showClear	
Clear input field

boolean
false
showEyeIcon	
Show eye icon when [type]="'passowrd'"

boolean
false
size	
To set the size of the input, sm or md

"sm"
"md"
md

sm

md
spellcheck	
Sets 'spellcheck' attribute on the input element, where if possible the element will be checked for spelling errors

boolean
false
tabindex	
Sets the priority of user pressing tab to get to input, where 0 is first and max at 32767

number
NaN
type	
Set input type - 'number' refers to numbers only input field | 'text' refers to all characters input field (Default: type="'text'")

string
text
updateOn	
Sets when the control value is updated this affects when validators are run as well (error state display)

"change"
"blur"
"submit"
change

change

blur

submit
value	
number
string
null
undefined
""
Hide deprecated items
deprecated
Hide deprecated items
align	
(deprecated - ODS) No longer has any effect.

"start"
"end"

start

end
alphaNumeric	
(deprecated - ODS) No longer has any effect.

boolean
false
backgroundColor	
(deprecated - ODS) No longer has any effect.

string
characterCounter	
(deprecated - IBGT, ODS) Replaced by showCharacterCounter.

string
characterCounterBottom	
(deprecated - IBGT) No longer has any effect. Character counter is always on the bottom right.

boolean
false
displayMode	
(deprecated - ODS) Use readonly instead.

boolean
false
labelPlaceholder	
(deprecated - IBGT, ODS) Replaced by DbsFieldLabelDirective.

string
list	
(deprecated - ODS) No longer has any effect. Use DbsSelectComponent instead.

string
negativeNum	
(deprecated - IBGT) Replaced by allowNegativeNumber.

boolean
false
optionalIcon	
(deprecated - ODS) No longer has any effect.

string
showIcon	
(deprecated - ODS) No longer has any effect.

boolean
false
step	
(deprecated - ODS) No longer has any effect.

number
NaN
thousandSeparator	
(deprecated - IBGT) Replaced by autoFormatNumber.

boolean
false
tooltipContent	
(deprecated - ODS) Use DbsFieldLabelComponent with DbsFieldLabelIconComponent instead.

string
validationBorder	
(deprecated - ODS) No longer has any effect.

boolean
false
validationMessage	
(deprecated - ODS) Use errorMsg instead.

string
Hide outputs items
outputs
Hide outputs items
blur	
(blur) outputs the (blur) Event from the <input>

EventEmitter
Edit JSON string...
change	
(change) outputs 2 types of events

1st emits the string value from (ngModelChange) from the <input> every time the input changes.

2nd when you blur will emit a 'change' type Event from the <input>'s default (change) .

You may choose which you'd like to use by filtering out the string/Event types of the events emitted

EventEmitter
Edit JSON string...
focus	
(focus) outputs the (focus) Event from the <input>

EventEmitter
Edit JSON string...
input	
(input) outputs the (input) Event from the <input>

EventEmitter
Edit JSON string...
keyup	
(keyup) outputs the (keyup) Event from the <input>

EventEmitter
Edit JSON string...
valueChange	
legacy observable

Observable<any>
Edit JSON string...
Hide slots items
slots
Hide slots items
startSlot	
Customise any content at the start of input
HTMLElement
-	
endSlot	
Customise any content at the end of input
HTMLElement
-	

## Select

Select
The <dbs-select> replaces the <dbs-dropdown> from the IBGT UI and ODS libraries. It uses the DbsDropdownMenuComponent for its menu and positioning via the DbsPopperDirective

Docs
DbsSelectComponent Documentation

Usage
The DBS Select provides a flexible dropdown/select component that supports both single and multiple selection modes. It automatically adapts to mobile view with a bottom sheet interface and provides extensive customization options for filtering, searching, and display formatting.

Basic Usage:
<!-- Single Select -->
<dbs-select
  [values]="dropdownOptions"
  [formControl]="myFormControl"
  placeholder="Select an option">
</dbs-select>

<!-- Multiple Select -->
<dbs-select
  [values]="dropdownOptions"
  [formControl]="myFormControl"
  [multipleSelect]="true"
  placeholder="Select multiple options">
</dbs-select>
Copy
Visual Description
Container Structure
Main Container: .dbs-select__container with size variants controlled by [size] (--md, --sm)
Content Layout: Horizontal flexbox with start slot, display area, end slot, and button container
State Classes: auto-height, disabled, readonly for visual state management
Single Select Appearance
Display Area: .single-select-display shows selected value or placeholder text from [placeholder]
Selected Value: Displays the cleaned label text of the selected option via selectedOptionString()
Non-matching Value: Shows .non-matching styled text for FormControl values not in [values] array
Placeholder: .single-select-display--placeholder shows [placeholder] or [readonlyPlaceholder] when [readonly]="true"
Clear Button: dbs-icon-button with 'clear-filled' icon appears when [showClear]="true" and has selection
Dropdown Icon: Animated chevron with .chevron-down__icon--expanded class when opened() is true
Multiple Select Appearance
Display Container: .multiple-select__options-container controlled by [multipleSelect]="true"
Tag Display: Individual dbs-tag components with 'multiselect' variant and close buttons when [showItemCount]="false"
Item Count Mode: Shows "All (X)" or "Selected (X)" when [showItemCount]="true" using translate.all and translate.selected
Readonly Mode: Comma-separated text list without interactive tags when [readonly]="true"
Placeholder: .multiple-select-display--placeholder shows [placeholder] or [readonlyPlaceholder] when no selections
Action Buttons: "Select all" and "Reset" buttons using translate.select_all and translate.reset from [translate] object
Dropdown Menu Structure
Desktop: Positioned dropdown with Popper.js using [popperPosition], [popperAlignment], [popperGap], [popperOffsetX], [popperOffsetY]
Mobile: Full-screen bottom sheet when screen width < [mobileBreakpoint] (default: 767px)
Search Bar: Filter input appears when [showFilter]="true" with placeholder from translate.search
Options List: Scrollable container with max height from [maxOptionsHeight] or [maxMenuHeightPx]
Category Headers: Grouped sections when [values] array items have category property
Option Item Appearance
Single Select: Clickable rows with hover states and selection indicators
Multiple Select: Checkbox-based options with .multiple-select-option__container using dbs-checkbox
Disabled Options: .disabled class when option has isDisabled: true property
Selected State: .selected class for visual feedback when option is chosen
Custom Templates: Support for selectOptionTemplate content projection to override default styling
Tooltips: Shows option.tooltipValue as title attribute when available
Mobile Bottom Sheet Layout (when [mobileBreakpoint] threshold met)
Header: Title from [mobileTitle] and subtitle from [mobileSubtitle]
Search Section: Filter input when [showFilter]="true" with [searchBarPlaceholder]
Height Control: Container height set by [bottomSheetHeight] limited by [bottomSheetMaxheight]
Action Buttons: "Select all" and "Reset" for multiple select using translate.select_all and translate.reset
Options Area: Scrollable list with touch-friendly sizing
Footer: "Apply" and "Cancel" buttons for multiple select using translate.apply and translate.cancel
Button Layout: Footer button arrangement controlled by [bottomSheetFooterButtonLayout] ('stretched' | 'stacked')
Overlay: Semi-transparent background with click detection via (overlayClicked) output
Content Projection Slots
Start Slot: [startSlot] - Content before the display area (icons, labels)
End Slot: [endSlot] - Content after display area, before action buttons
Template Slots:
selectTopSectionTemplate - Custom content in dropdown header
topOptionTemplate - Content above option list (scrolls with options)
selectOptionTemplate - Custom option item rendering
mobileFooterTemplate - Custom mobile footer content
selectTemplate - Complete custom select content override
Size Variants (controlled by [size])
Medium (md): Default 40px height with standard font sizing
Small (sm): Compact 32px height with reduced font sizing
Auto Height: Expands vertically when [autoHeight]="true"
State Indicators
Help Text: .help-text below component shows [helpText] when not [readonly]
Error Message: .error-msg below component shows [errorMsg] when not [readonly]
Loading States: Handled by dropdown menu component
Focus States: Keyboard navigation highlighting with tabindex management based on [disabled] state
No Data: Shows translate.no_data_found when no options match search
Width and Positioning Control
Menu Width: Controlled by [matchParentWidth] (boolean or number for max-width in px)
Menu Positioning: Limited positions via [popperLimitPositions] array
Option Width: Custom width via [selectOptionWidth] (string or number)
Search and Filtering (when [showFilter]="true")
Search Keywords: Filtering scope limited by [searchKeyWords] array
Search Placeholder: Uses translate.search from [translate] object
Search Events: Emits (searchValueChange) and updates searchResults array
No Results: Shows translate.no_data_found message when no matches
Value Binding Modes
Object Binding: Default mode returns full DropdownValue objects
Value-Only Binding: When [bindSingleFormValue]="true", returns only value property strings
Values Array Binding: [valuesBinded]="true" modifies original array instead of cloning
Developer Restrictions & Notes
Required Inputs
[values]: Array of DropdownValue objects is required
component will not function without this
Each DropdownValue must have unique value property for proper selection tracking
Form Control Compatibility
DO NOT use [disabled] input with FormControl - use FormControl's disable() method instead
When using [bindSingleFormValue]="true", FormControl should contain strings, not objects
For multiple select with [bindSingleFormValue]="true", pass string arrays to FormControl
Value Binding Restrictions
[valuesBinded]="false" (default) clones the values array to prevent external mutations
Set [valuesBinded]="true" only if you need the original array to be modified by selections
Non-matching FormControl values in single select will display but won't be selectable
Non-matching values in multiple select are ignored and won't display as tags
Mobile View Limitations
[moveToDocumentMobile] directive cannot be used with [multipleSelect]="true"
Mobile view cannot be disabled for multiple select due to UX constraints when [blockMobileView]="false"
Bottom sheet height is limited by [bottomSheetMaxheight] (default: 95vh)
Performance Considerations
Large option lists (>100 items) should use [showFilter]="true" for better UX
Category grouping adds rendering overhead - use sparingly with large datasets
[searchKeyWords] array limits search scope for better performance with complex objects
[numOptionsToLoad] and [maxOptionsHeight] control rendering performance (deprecated)
Template Restrictions
Custom templates (selectOptionTemplate, topSectionTemplate, etc.) must not contain form controls
Template content should be lightweight to maintain scroll performance
Mobile footer template has limited height - keep content minimal
Accessibility Notes
Component handles keyboard navigation (Enter, Space, Arrow keys, Escape)
Ensure [values] array has meaningful label properties for screen readers
Error messages via [errorMsg] are announced to assistive technologies
Focus management is handled automatically for both desktop and mobile views
ARIA roles and attributes are applied to option elements
Migration Notes
Non-matching single select FormControl values now display (breaking change from previous versions)
Multiple deprecated inputs - check console warnings and migrate to new property names
[forceFormUpdateFromValues] should only be used during migration - not for new implementations
Usage
Import DbsSelectComponent into your component or module.

import { DbsSelectComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsSelectComponent],
})
Copy
Stories
Basic
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)">
</dbs-select>
Copy
Setting Form Control
setValue() and patchValue() functions do not set the form to touched or dirty

non-matching set or patched values will now be displayed, but they are not selectable by the users.
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
formControl.patchValue(values[0])formControl.setValue({"label":"no match","value":"no match"})
formControl.reset()
FormControl: null
touched:false
dirty:false
invalid:false
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<dbs-button (click)='formControl.patchValue(values[0])'>formControl.patchValue(values[0])</dbs-button>
<dbs-button (click)='formControl.setValue({label:"no match",value:"no match"})'>formControl.setValue(&#123;"label":"no match","value":"no match"&#125;)</dbs-button>
<br>
<dbs-button (click)='formControl.reset()'>formControl.reset()</dbs-button>
<br>
FormControl: {{formControl.value|json}}
<br>
touched:{{formControl.touched|json}}
<br>
dirty:{{formControl.dirty|json}}
<br>
invalid:{{formControl.invalid|json}}
Copy
Reset Form Control Demo
Use formcontrol.reset() to reset all the dirty,touched and value of the formcontrol

you may reset to other values, however do ensure DropdownValue type
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
.reset().reset('with matching value').reset('with no matching value')Set Null
FormControl.value:null
touched:false
dirty:false
invalid:true
Hide code
<dbs-select [values]="values" [placeholder]="placeholder" [formControl]="formControl" [showClear]="showClear"  ></dbs-select>
  <dbs-button (click)="formControl.reset()">.reset()</dbs-button>
  <dbs-button (click)="formControl.reset({label:'1',value:'1'})">.reset('with matching value')</dbs-button>
  <dbs-button (click)="formControl.reset({label:'no match',value:'no match'})">.reset('with no matching value')</dbs-button>
  <dbs-button (click)="formControl.setValue(null)">Set Null</dbs-button>
  <br>
  FormControl.value:{{formControl.value|json}}
  <br>
  touched:{{formControl.touched|json}}
  <br>
  dirty:{{formControl.dirty|json}}
  <br>
  invalid:{{formControl.invalid|json}}
Copy
Mobile
For mobile view set via mobileBreakpoint the menu will become a bottom-sheet settings such as bottomSheetHeight and bottomSheetMaxheight can be used to change the view settings.

By default the bottom-sheet will fit-content height

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select [values]="values" [placeholder]="placeholder" [showClear]="showClear" [showFilter]="showFilter"  ></dbs-select>
Copy
Slots
startSlot and endSlot

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
endSlot
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)">
  <dbs-icon-button [style.margin.px]='2' size="sm" startSlot>
    <svg-icon iconName="close"></svg-icon>
  </dbs-icon-button>
  <div endSlot> {{formControl.value?'+1':'endSlot'}}</div>
</dbs-select>
Copy
Disabled
formControl.disabled: true
preselected
disabled via input
preselected
placeholder
Hide code
{{formControl.disable()}}
formControl.disabled: {{formControl.disabled}}
<dbs-select [values]="values" [placeholder]="placeholder" [formControl]="formControl" [disabled]="disabled"  ></dbs-select>
disabled via input
<dbs-select #select [values]="values" [disabled]='disabled' [placeholder]='placeholder'></dbs-select>
<dbs-select #select [values]="[]" [disabled]='disabled' [placeholder]='placeholder'></dbs-select>
Copy
Readonly
-
preselected
1 , 2 , 3
custom [readonlyPlaceholder]
Hide code
<dbs-select [readonly]='readonly'></dbs-select>
<dbs-select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [readonly]="readonly" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<dbs-select multipleSelect='true' [readonly]='readonly' [values]="
  [{ category: '1', value: '1', label: '1',checked:true },{ category: '1', value: '2', label: '2',checked:true },{ category: '1', value: '3', label: '3',checked:true },]
"></dbs-select>
<dbs-select multipleSelect='true' readonlyPlaceholder='custom [readonlyPlaceholder] ' [values]='[]' [readonly]='readonly'></dbs-select>
Copy
Field Label
FB
Field Label via Directive
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-field-label size='sm' > 
 FB
 <dbs-field-label-icon
  [tooltipTitle]="'Tooltip title'"
  [tooltipText]="'Tooltip text'" 
  />
</dbs-field-label>
<dbs-select
  [size]='"sm"'
  [fieldLabel]="'Field Label via Directive'"
  [fieldLabelDisplayTooltipIcon]='true'
  [fieldLabelTooltipTitle]="'Tooltip title'"
  [fieldLabelTooltipText]="'Tooltip text'"
#select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Size
size can be sm or md, defaults to md with height 40px

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select  [values]="[{'value':'搜索中文名測試','label':'搜索中文名測試'},{'value':'Item 2','label':'Item 2'},{'value':'AUD3','label':'<span class=\'icon icon__invest--active\'></span> AUD3','isDisabled':true}]" [placeholder]="'This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text'" [size]="'sm'" ></dbs-select>
<dbs-select  [values]="[{'value':'搜索中文名測試','label':'搜索中文名測試'},{'value':'Item 2','label':'Item 2'},{'value':'AUD3','label':'<span class=\'icon icon__invest--active\'></span> AUD3','isDisabled':true}]" [placeholder]="'This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text'" [size]="'md'" ></dbs-select>
Copy
IBGT Size
For IBGT teams to retain .compact class use, please use .ibgt-compact instead

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<div class='ibgt-compact'>
  <dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
</div>
<dbs-select class='ibgt-compact' #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Show Filter
By using showFilter='true', results will be filtered to show results starting with the search keywords users type down

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [showFilter]="showFilter" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Show Clear Button
By using showClear='true', a clear button will be displayed at the end of the select bar

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [showFilter]="showFilter" [showClear]="showClear" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Help Text And Error Message
FormControl errors: { "required": true }
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
This is a help text
Hide code
FormControl errors: {{formControl.errors|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [helpText]="helpText" [errorMsg]="errorMsg" [showClear]="showClear" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Preselected From Values
Preselection from values array ONLY WORKS if

No formControl attached.
This is because the formControl's initialised value will take priority and overwrite any value and be null or undefined.

To make formControl get updated

set [forceFormUpdateFromValues]=true and initialise formControl's value to null or undefined.
FormControl: { "label": "preselected", "value": "preselected", "selected": true, "checked": false, "_cleanedLabel_": "preselected" }
preselected
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [forceFormUpdateFromValues]="forceFormUpdateFromValues" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Change Of Values
Changing Values will still use formControl's value to select any options.

if no match is found, nothing will be displayed
console error will be fired
Change values values: [ { "label": "From formControl", "value": "From formControl" }, { "label": "1", "value": "1" }, { "label": "2", "value": "2" }, { "label": "3", "value": "3" }, { "label": "preselected", "value": "preselected" } ]
Change FormControl selected
formControl: { "label": "From formControl", "value": "From formControl" }
From formControl
Hide code
<dbs-button (click)="values=[
  {label:'button selected' , value:'button selected' },
  {label:'2' , value:'2' },
  {label:'3' , value:'3' },
  { label: 'preselected', value: 'preselected' },
]">Change values</dbs-button>
values: {{values|json}}
<br>
<dbs-button (click)="formControl.setValue(
  {label:'button selected' , value:'button selected' }
)">Change FormControl selected</dbs-button>
<br>
formControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"
></dbs-select>
Copy
Prepopulated Form Control Demo
Prepopulation via formcontrol will match via the value key

FormControl: { "value": "Item 2", "label": "Item 2" }
Item 2
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Category
Dropdown options may be split into separate categories. To do so, set values to take on the format of [{ category: 'a', value: 'a', label: 'a' }]

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [showFilter]="showFilter" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Multiple Select
Set [multipleSelect]='true'

AUD3
INR4

FormControl.value:[ "AUD3", "INR4" ]
touched:false
dirty:false
invalid:false
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [multipleSelect]="multipleSelect" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<br>
FormControl.value:{{formControl.value|json}}
<br>
touched:{{formControl.touched|json}}
<br>
dirty:{{formControl.dirty|json}}
<br>
invalid:{{formControl.invalid|json}}
Copy
Show Item Count
Set [showItemCount]='true' to show only the count of items selected. This is to be used when space is limited. The count does not count isDisabled options.

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [multipleSelect]="multipleSelect" [showItemCount]="showItemCount" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Multiple Select Category
Multiple select option is also available when dropdown values are split into categories

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [multipleSelect]="multipleSelect" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Multiple Select Show Filter
Set [multipleSelect]='true' and [showFilter]='true'

This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [multipleSelect]="multipleSelect" [showFilter]="showFilter" [formControl]="formControl" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Prepopulated Form Control Multiple Select Demo
Please pass in DropdownValue[] for multipleSelect

FormControl: [ { "value": "Item 2", "label": "Item 2", "selected": true, "checked": true }, { "value": "搜索中文名測試", "label": "搜索中文名測試" } ]
Item 2

搜索中文名測試

Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [multipleSelect]="multipleSelect" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Values Binded Multiple Select
For migrations ONLY

Use [valuesBinded]='true' to cause your values input variable to be updated as you select options.

note this is not recommended
please use formControl instead
Values Binded
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
[ { "value": "搜索中文名測試", "label": "搜索中文名測試", "checked": false, "selected": false }, { "value": "Item 2", "label": "Item 2", "checked": false, "selected": false }, { "value": "AUD3", "label": "<span class=\"icon icon__invest--active\"></span> AUD3", "isDisabled": true, "checked": false, "selected": false }, { "value": "INR4", "label": "<span class=\"icon icon__invest--active\"></span> INR4", "checked": false, "selected": false }, { "value": "Item 5", "label": "Item 5", "checked": false, "selected": false }, { "value": "Item 6", "label": "Item 6", "checked": false, "selected": false }, { "value": "AUD7", "label": "AUD7", "isDisabled": true, "checked": false, "selected": false }, { "value": "INR8", "label": "INR8", "checked": false, "selected": false }, { "value": "Item 9", "label": "Item 9", "checked": false, "selected": false }, { "value": "Item 10", "label": "Item 10", "checked": false, "selected": false }, { "value": "AUD11", "label": "AUD11", "isDisabled": true, "checked": false, "selected": false }, { "value": "INR12", "label": "INR12", "checked": false, "selected": false }, { "value": "9", "label": "9", "checked": false, "selected": false }, { "value": "z", "label": "z", "checked": false, "selected": false }, { "value": "a", "label": "a", "checked": false, "selected": false }, { "value": "1", "label": "1", "checked": false, "selected": false } ]
Hide code
<dbs-select [values]="values" [placeholder]="placeholder" [multipleSelect]="multipleSelect" [formControl]="formControl" [fieldLabel]="'Values Binded'" [valuesBinded]="true" ></dbs-select>
{{values|json}}
Copy
Values Not Binded Multiple Select
This is by default [valuesBinded]='false'

Values NOT Binded
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
[ { "value": "搜索中文名測試", "label": "搜索中文名測試" }, { "value": "Item 2", "label": "Item 2" }, { "value": "AUD3", "label": "<span class=\"icon icon__invest--active\"></span> AUD3", "isDisabled": true }, { "value": "INR4", "label": "<span class=\"icon icon__invest--active\"></span> INR4" }, { "value": "Item 5", "label": "Item 5" }, { "value": "Item 6", "label": "Item 6" }, { "value": "AUD7", "label": "AUD7", "isDisabled": true }, { "value": "INR8", "label": "INR8" }, { "value": "Item 9", "label": "Item 9" }, { "value": "Item 10", "label": "Item 10" }, { "value": "AUD11", "label": "AUD11", "isDisabled": true }, { "value": "INR12", "label": "INR12" }, { "value": "9", "label": "9" }, { "value": "z", "label": "z" }, { "value": "a", "label": "a" }, { "value": "1", "label": "1" } ]
Hide code
<dbs-select [values]="values" [placeholder]="placeholder" [multipleSelect]="multipleSelect" [formControl]="formControl" [fieldLabel]="'Values NOT Binded'" [valuesBinded]="false" ></dbs-select>
{{values|json}}
Copy
Set Form Control Multiple Select Demo
Please pass in DropdownValue[] for multipleSelect

FormControl: null
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
set to first 2 items
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [multipleSelect]="multipleSelect" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<dbs-button 
(click)='formControl.setValue(values.slice(0,2))'>
 set to first 2 items 
</dbs-button>
Copy
Bind Single Form Value
Please pass in [bindSingleFormValue]=true if you want to only

pass string to the formControl's value
receive the .value property of the objects
FormControl: null
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
FormControl: null
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
set to objectset to string
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [formControl2]="formControl2" [bindSingleFormValue]="bindSingleFormValue" [multipleSelect]="multipleSelect" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)" [bindSingleFormValue]='true' [formControl]='formControl' [values]='values' [multipleSelect]='true' ></dbs-select>
FormControl: {{formControl2.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [formControl2]="formControl2" [bindSingleFormValue]="bindSingleFormValue" [multipleSelect]="multipleSelect" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)" [bindSingleFormValue]='true' [formControl]='formControl2' [values]='values' [multipleSelect]='false' ></dbs-select>
<dbs-button 
(click)='
formControl.setValue([
  { "value": "Item 2", "label": "Item 2", "selected": true, "checked": true },
  { "value": "INR4", "label": "INR4", "selected": true, "checked": true },
]);
formControl2.setValue({ "value": "Item 2", "label": "Item 2", "selected": true, "checked": true });
'>
 set to object
</dbs-button>
<dbs-button 
(click)='
formControl.setValue(["Item 2","INR4"]);
formControl2.setValue("Item 2");
'>
 set to string 
</dbs-button>
Copy
IBGT Force Values To Update Formcontrol Value Prepopulated
ONLY FOR MIGRATION For IBGT apps that require the formcontrol to be updated from [values] please set [forceFormUpdateFromValues]=true and do not send anything to the FormControl as passing anything will cause it to take precedence

FormControl: [ { "value": "Added selected 1", "label": "Added selected 1", "selected": true, "checked": true, "_cleanedLabel_": "Added selected 1" }, { "value": "Added selected 2", "label": "Added selected 2", "selected": true, "checked": true, "_cleanedLabel_": "Added selected 2" } ]
Added selected 1

Added selected 2

Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [multipleSelect]="multipleSelect" [forceFormUpdateFromValues]="forceFormUpdateFromValues" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
Copy
Match Parent Width
matchParentWidth will allow the select's dropdown to be limited to the parent's width

FormControl: null
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [showFilter]="showFilter" [showClear]="showClear" [matchParentWidth]="matchParentWidth" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [showFilter]="showFilter" [showClear]="showClear" [matchParentWidth]="matchParentWidth" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)" [multipleSelect]='true'></dbs-select>
Copy
Auto Height
autoHeight will allow the display to expand based on its selected content

FormControl: null
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
FormControl: {{formControl.value|json}}
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [autoHeight]="autoHeight" [showFilter]="showFilter" [showClear]="showClear" [matchParentWidth]="matchParentWidth" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)"></dbs-select>
<dbs-select #select [values]="values" [placeholder]="placeholder" (onSelect)="onSelect($event)" (onSelectDropdownValue)="onSelectDropdownValue($event)" [formControl]="formControl" [autoHeight]="autoHeight" [showFilter]="showFilter" [showClear]="showClear" [matchParentWidth]="matchParentWidth" (searchValueChange)="searchValueChange($event)" (menuClick)="menuClick($event)" (onBlur)="onBlur($event)" (onClose)="onClose($event)" (overlayClicked)="overlayClicked($event)" (valueChange)="valueChange($event)" (onClosed)="onClosed($event)" (onOptionSelected)="onOptionSelected($event)" (whenClosed)="whenClosed($event)" (whenSelect)="whenSelect($event)" [multipleSelect]='true'></dbs-select>
Copy
Positioning
The <dbs-select> will position itself accordingly to where space is available via the DbsPopperDirective.

alter postioning via the popperPosition, popperOffsetX, popperOffsetY, popperOffsetX, popperGap, popperAlignment, and popperLimitPositions
[popperLimitPositions] takes the array of limits where the dropdown-menu can spawn to retain visibility. Its default is ['bottom-start','top-start','bottom','top']
[popperPosition] is the position you'd like to force it to set it to
Use both [popperLimitPositions] and [popperPosition] to limit and set the dropdown to be locked into its position

note if using inline-block you will need to use vertical-align

default with bottom-start
multipleSelect bottom
bottom and top
bottom-end
Hide code
<div [ngStyle]="{display:'flex',width:'100%',
    justifyContent: 'space-between'}">
    <dbs-select placeholder='default with bottom-start' [values]='values' [popperPosition]='"bottom-start"'></dbs-select>
    <dbs-select placeholder='multipleSelect bottom' [values]='values' [multipleSelect]='true' [popperLimitPositions]='["bottom"]'[popperPosition]='"bottom"'></dbs-select>
    <dbs-select placeholder='bottom and top' [values]='values.slice(1)' [popperLimitPositions]='["bottom","top"] '[popperPosition]='"bottom"'></dbs-select>
    <dbs-select placeholder='bottom-end' [values]='values' [popperLimitPositions]='["bottom-end"]' [popperPosition]='"bottom-end"'></dbs-select>
</div>
Copy
Custom Template
Custom templates use @ContentChild to retrieve the templates. This requires the ng-template to be placed within the <dbs-select> Place Template Here </dbs-select> tags.

#selectTopSectionTemplate - Between search and the options (does not scroll with options)
#topOptionTemplate - Above options (scrolls with options)
#selectOptionTemplate - Overwrites options
#selectTemplate - overwrites the whole dropdown
Styles

you may use the class default-style, with addon disabled,selected and norecord to use default styles
ie <div class="default-style selected">
styles included for hovered, selected, disabled
Custom Single Select
Custom Multiple Select
onSelect : "nothing selected"

Phone FormControl: null
Custom Single Select
HTML
<dbs-select
  #single
  placeholder="Custom Single Select"
  [values]="values"
  (onSelect)="selected=$event"
  [showFilter]="true"
>
  <!-- <ng-template #selectTemplate >
  OVERWRITE ALL
</ng-template> -->
  <ng-template #selectTopSectionTemplate>
    <div class="template-border">
      <dbs-button
        size="sm"
        (click)="single.closeMenu();$event.stopImmediatePropagation()"
        >Close menu</dbs-button
      >
      #selectTopSectionTemplate doesn't scroll
    </div>
  </ng-template>
  <ng-template #topOptionTemplate>
    <div class="template-border">#topOptionTemplate will scroll</div>
  </ng-template>
  <ng-template #selectOptionTemplate let-option let-index="index">
    <!-- <div class="custom-container"> -->
    <!-- {{index|json}}
    {{option|json}} -->
    <div class="custom-container" [ngClass]="{'selected':option.selected}">
      <div class="custom-container--left">
        <dbs-avatar [variant]="'logo'">
          @if (option.category === 'Internal') {
            <img src="./favicon.svg" alt="favicon" />
          } @else {
            <dbs-avatar [name]="option.value"></dbs-avatar>
          }
        </dbs-avatar>
        <div class="custom-container-text">
          <div class="account">
            {{option.value}}
          </div>
          <div class="account-number">
            {{option.label}}
          </div>
        </div>
      </div>

      <div class="custom-container-text">
        <dbs-currency-pair
          [size]="'md'"
          [currency]="option.currency"
          [amount]="option.amount"
        ></dbs-currency-pair>
      </div>
    </div>
  </ng-template>
</dbs-select>

<dbs-select
  #multi
  placeholder="Custom Multiple Select"
  [(ngModel)]="multiModel"
  [values]="values"
  (onSelect)="selected=$event"
  [multipleSelect]="true"
  class="dbs-checkbox--center"
>
  <!-- <ng-template #selectTemplate >
  OVERWRITE ALL
</ng-template> -->
  <ng-template #selectTopSectionTemplate>
    <div class="template-border">
      <dbs-button
        size="sm"
        (click)="multi.closeMenu();$event.stopImmediatePropagation()"
        >Close menu</dbs-button
      >
      #selectTopSectionTemplate doesn't scroll
    </div>
  </ng-template>
  <ng-template #selectOptionTemplate let-option let-index="index">
    <div class="custom-container--multi">
      <div class="custom-container">
        <dbs-checkbox
          #optionCheckbox
          class="dbs-checkbox--center"
          [readonly]="option.isDisabled"
          [checked]="option.checked"
        >
          <!-- run $event.stopImmediatePropagation() as select already runs the selection for you, else both the checkbox and the selection() will run unchecking the option-->
          <label
            (click)="$event.stopImmediatePropagation()"
            [for]="optionCheckbox.checkboxId"
            class="custom-container__label"
          >
            <div class="custom-container--left">
              <dbs-avatar [variant]="'logo'">
                @if (option.category === 'Internal') {
                  <img src="./favicon.svg" alt="favicon" />
                } @else {
                  <dbs-avatar [name]="option.value"></dbs-avatar>
                }
              </dbs-avatar>
              <div class="custom-container-text">
                <div class="account">
                  {{option.value}}
                </div>
                <div class="account-number">
                  {{option.label}}
                </div>
              </div>
            </div>

            <div class="custom-container-text">
              <dbs-currency-pair
                [size]="'md'"
                [currency]="option.currency"
                [amount]="option.amount"
              ></dbs-currency-pair>
            </div>
          </label>
        </dbs-checkbox>
      </div>
    </div>
  </ng-template>
  <ng-template #mobileFooterTemplate>
    <dbs-button (click)="multi.closeMenu();$event.stopImmediatePropagation()"
      >Custom Close Button</dbs-button
    >
  </ng-template>
</dbs-select>
onSelect : {{selected??'nothing selected'|json}}
<br />
<br />
Phone FormControl: {{fc.value|json}}
<dbs-select
  [formControl]="fc"
  [bindSingleFormValue]="true"
  #select
  placeholder="Custom Single Select"
  [values]="phoneMenuCategory"
  (onSelect)="selected=$event"
  [showFilter]="true"
>
  <ng-template #selectOptionTemplate let-option let-index="index">
    <div
      class="default-style"
      [ngClass]="{ 
          'selected': option.selected,
          'disabled': option.isDisabled,
           }"
    >
      <div class="label" [style.display]="'flex'">
        <!-- ch used to space the numbers out to align the countries -->
        <div class="code" [style.width.ch]="5">{{option.label}}</div>
        <div class="spacer" [style.width.ch]="1">•</div>
        <div class="country">{{option.country}}</div>
      </div>
    </div>
  </ng-template>
</dbs-select>
CSS
.custom-container {
  display: flex;
  padding: 8px;
  border-radius: var(--input-select-option-border-radius);
  justify-content: space-between;
  dbs-checkbox {
    width: 100%;
  }
  &__label {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  &--left,
  &--text {
    display: flex;
    gap: 8px;
  }
  &.selected {
    background-color: var(--input-select-option-selected-background);
  }
  &:hover {
    background-color: var(--input-select-option-hover-background);
  }
}
.template-border {
  border: 1px solid var(--color-slate-110);
  border-radius: 8px;
}
Type Script
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
  DbsCurrencyPairComponent,
  DbsCheckboxComponent,
  phoneMenuTemplate,
  phoneMenuCategoryTemplate,
} from "../../../../public-api";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    DbsCurrencyPairComponent,
    DbsCheckboxComponent,
  ],
  templateUrl: "custom-template-story.component.html",
  styleUrl: "custom-template-story.component.scss",
})
export class CustomTemplateStoryComponent {
  showDropdown = false;
  selected: any;
  values: DropdownValue[] = [
    {
      category: "Group 1",
      value: "My Account 1",
      label: "7383682-293-1(1)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 1",
      value: "My Account 2",
      label: "7383682-293-1(2)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 1",
      value: "My Account 3",
      label: "7383682-293-1(3)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 2",
      value: "Other 1",
      label: "7383682-293-2(1)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 2",
      value: "Other 2",
      label: "7383682-293-2(2)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 2",
      value: "Other 3",
      label: "7383682-293-2(3)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 2",
      value: "Other 4",
      label: "7383682-293-2(4)",
      currency: "sgd",
      amount: 10000,
    },
    {
      category: "Group 2",
      value: "Other 5",
      label: "7383682-293-2(5)",
      currency: "sgd",
      amount: 10000,
    },
  ];
  fc = new FormControl(null);
  multiModel: [];
  phoneMenu = phoneMenuTemplate;
  phoneMenuCategory = phoneMenuCategoryTemplate;
  ngOnInit() {
    this.phoneMenu[2].isDisabled = true;
  }
}
Copy
Non Matching Option
From version 18.31.0 non-matching values passed into the single select formControl will be displayed.

Value:""
formControl.disabled: true
Formcontrol
placeholder
-
NgModel
placeholder
-
SelectedVal (DbsDeprecatedSelectedValDirective)
placeholder
-

Toggle String or DropdownValue :{ label: 'Non-existent label', value: 'Non-existent value'}

Toggle existing option:{ label: 'Non-existent label', value: 'Non-existent value'}
Update LOV
Current LOVs: [ { "label": "a", "value": "1" }, { "label": "b", "value": "2" }, { "label": "c", "value": "3" }, { "label": "EXISTING label", "value": "EXISTING value" } ]
enable
Set Placeholder
Reset
Hide code
Value:{{formControl.value|json}} <br>
formControl.disabled: {{formControl.disabled}}
<br>
Formcontrol
<dbs-select [values]="values" [placeholder]="placeholder" [formControl]="formControl" [disabled]="disabled" [bindSingleFormValue]="bindSingleFormValue"  ></dbs-select>
<dbs-select [bindSingleFormValue]='bindSingleFormValue' [formControl]="formControl" [values]="values" [readonly]='disabled' [placeholder]='placeholder'></dbs-select>
NgModel 
<dbs-select [ngModel]="formControl?.value" [bindSingleFormValue]='bindSingleFormValue' [values]="values" [disabled]='disabled' [placeholder]='placeholder'></dbs-select>
<dbs-select [ngModel]="formControl?.value" [bindSingleFormValue]='bindSingleFormValue' [values]="values" [readonly]='disabled' [placeholder]='placeholder'></dbs-select>

SelectedVal (DbsDeprecatedSelectedValDirective)
<dbs-select [selectedVal]="formControl?.value" [bindSingleFormValue]='bindSingleFormValue' [values]="values" [disabled]='disabled' [placeholder]='placeholder'></dbs-select>
<dbs-select [selectedVal]="formControl?.value" [bindSingleFormValue]='bindSingleFormValue' [values]="values" [readonly]='disabled' [placeholder]='placeholder'></dbs-select>

<br>
<br>
<dbs-button (click)="formControl.value?.value?formControl.setValue('string'):formControl.setValue({ label: 'Non-existent label', value: 'Non-existent value'})"> 
  Toggle String or DropdownValue : 
</dbs-button>{{formControl.value?.value?'string':"{ label: 'Non-existent label', value: 'Non-existent value'}"}}
<br>

<br>
<dbs-button (click)="formControl.value?.value==='Non-existent value'?formControl.setValue({ label: 'EXISTING label', value: 'EXISTING value'}):formControl.setValue({ label: 'Non-existent label', value: 'Non-existent value'})"> 
  Toggle existing option:
</dbs-button>{{formControl.value?.value==='Non-existent value'?"{ label: 'EXISTING label', value: 'EXISTING value'}":"{ label: 'Non-existent label', value: 'Non-existent value'}"}}

<br>

<dbs-button (click)="values=
[
  { label: 'STRING label', value: 'string' },
  { label: 'EXISTING label', value: 'EXISTING value' },
];"> 
  Update LOV
</dbs-button>

<br>
Current LOVs: {{values|json}}

<br>
@switch(disabled){
  @case(true){
    <dbs-button (click)="formControl.enable();disabled=false"> 
      enable
    </dbs-button>
  }@default{
    <dbs-button (click)="formControl.disable();disabled=true"> 
      disable
    </dbs-button>
  }
}
<br>

<dbs-button (click)="placeholder='PlaceHolder'"> 
  Set Placeholder
</dbs-button>
<br>

<dbs-button (click)="formControl.reset()"> 
  Reset
</dbs-button>
Copy
API Reference
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
Hide code
<dbs-select [values]="values" [placeholder]="placeholder"  ></dbs-select>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
values	
The array of DropdownValue to pass into the dropdown

[{value: string, label: string;}...]

Array<DropdownValue>
[]	
values :[
0 :{...} 2 keys
1 :{...} 2 keys
2 :{...} 2 keys
3 :{...} 3 keys
4 :{...} 2 keys
5 :{...} 2 keys
6 :{...} 2 keys
7 :{...} 3 keys
8 :{...} 2 keys
9 :{...} 2 keys
10 :{...} 2 keys
11 :{...} 3 keys
12 :{...} 2 keys
13 :{...} 2 keys
14 :{...} 2 keys
15 :{...} 2 keys
16 :{...} 2 keys
]
placeholder	
Placeholder for the dbs-select use readonlyPlaceholder to overwrite the readonly states placeholder

string
""
This is a very long string of text This is a very long string of textThis is a very long string of textThis is a very long string of textThis is a very long string of text
autoHeight	
Will allow height of the dropdown to expand according to the number of selected for multiple and length of text for single

boolean
false
bindSingleFormValue	
this will result in only 'value' property being returned to the FormControl and the emitter. passing in only the 'value' property will allow preselection

Example: [formControl] = new FormControl("value1") || new FormControl(["value1","value2"])

boolean
false
blockMobileView	
boolean
false
bottomSheetFooterButtonLayout	
Bottom Sheet layout of <dbs-button> elements.

stretched (default): Buttons stretch evenly to fill the row.
stacked: Buttons stack one on top of the other.
"stretched"
"stacked"
stretched

stretched

stacked
bottomSheetHeight	
Sets css height of the bottom-sheet, sets via ngStyle tied to the height css thus you may pass in 'fit-content' etc.

this is limited by [bottomSheetMaxheight]
string
bottomSheetMaxheight	
Sets css max-height of the bottom-sheet where it expands up to, sets via ngStyle tied to the max-height css thus you may pass in '100%'/'100dvh' etc.

limits [componentHeight]
string
95vh
disabled	
NOT TO BE USED WITH FORMCONTROL disables non-FormControl dbs-select

boolean
false
errorMsg	
The red error message below the select

string
""
forceFormUpdateFromValues	
Forces FormControl to be updated from values

boolean
false
helpText	
The general help message below the select

string
""
matchParentWidth	
true to set width of the dbs-select's dropdown-menu to be limited to its parent attached element if you set a number it will limit the max-width in px. min-width is still the parent's width which takes precidence

boolean
number
false
maxMenuHeightPx	
Used to override height calculations and limit height of the dropdown menu in px\ ie 100 is 100px

number
NaN
maxOptionsHeight	
number
5.5
mobileBreakpoint	
The number to trigger the mobile menu

number
767
mobileSubtitle	
subtitle for the select's bottom-sheet header section

string
""
mobileTitle	
title for the select's bottom-sheet header section

string
""
moveToDocumentMobile	
boolean
false
multipleSelect	
Set to true for multiple select checkboxes

boolean
false
popperAlignment	
From DbsDropdownMenuComponent Alignment of Popper, snap popper edge to trigger's center/side

PopperAlignmentType
side

center

side
popperGap	
From DbsDropdownMenuComponent Gap between trigger and popper in px, defaulted to 8px

number
8
popperLimitPositions	
From DbsDropdownMenuComponent set this string[ ] to the limited positions you like in order this will limit it to flip between these positons ONLY

Example: limitPositions = ['bottom-start','top-start','bottom','top']

PopperPositionType[]
['bottom-start','top-start','bottom','top']	
popperOffsetX	
From DbsDropdownMenuComponent offsets the x position of the popover in px.

number
0
popperOffsetY	
From DbsDropdownMenuComponent offsets the y position of the popover in px.

number
0
popperPosition	
From DbsDropdownMenuComponent Position of the calendar pop up with respect to the calendar icon on the input.

PopperPositionType
bottom-start
readonly	
Sets the readonly state for the dbs-select

boolean
false
readonlyPlaceholder	
Replaces the placeholder when readonly is true.

string
-
searchkeyWords	
Array of properties which you want to filter by. Searches all keys be default.

Example (if you want to search by the property "label"): values = [{ "label": "In Progress", "value": "IN_PROGRESS", "category": "No Category", "checked": false, "selected": false }] searchKeyWords = ['label']

Array<string>
selectOptionWidth	
string
number
showClear	
Shows clear button in single-select, clears search and selection

boolean
false
showFilter	
Shows search filter input field

boolean
false
showItemCount	
Replaces multi selects display from tags to show the number of selected items

boolean
false
size	
Sets the height and font-size of the select field

'md' height: 40px 'sm' height: 32px

"md"
"sm"
md

md

sm
translate	
Used to overwrite the display text for the dropdown

all - 'All (##)' multiple select showItemCount display
selected - 'Selected (##)' multiple select showItemCount display
select_all - 'Select all (##)' multiple select button
reset - 'Reset' multiple select button
no_data_found -'No data found.' when no data
search - showFilter search bar placeholder
cancel - 'Cancel' multiple select button (bottom-sheet)
apply - 'Apply' multiple select button (bottom-sheet)
{ all: string; select_all: string; selected: string; no_data_found: string; clear_all: string; search: string; reset: string; cancel: string; apply: string; }
{ all: 'All', //for 'All (##)' select_all: 'Select all',//for 'Select all (##) button' selected: 'Selected', //for 'Selected (##)' no_data_found: 'No data found.', //'No data found.' when no data clear_all: 'Clear all',// not used search: 'Search',// `showFilter` search bar placeholder reset: 'Reset', //'Reset' multiple select button cancel: 'Cancel',//'Cancel' multiple select button (bottom-sheet) apply: 'Apply',//'Apply' multiple select button (bottom-sheet) }	
value	
Used in <dbs-table> similar to [ngModel]

string
valuesBinded	
will cloneDeep [values] to prevent values origin from being changed

boolean
false
Hide outputs items
outputs
Hide outputs items
onSelect	
Emits the selected values [] depending on [bindSingleFormValue] will emit the Array of DropdownValues or strings

EventEmitter
Edit JSON string...
onSelectDropdownValue	
Similar to (onSelect) however will always emit the DropdownValue or DropdownValue[] even when [bindSingleFormValue]=true

EventEmitter
Edit JSON string...
searchValueChange	
Emitted on searched value changes

""
Edit JSON string...
menuClick	
Emits when an option is clicked fired from dbs-dropdown

EventEmitter
Edit JSON string...
overlayClicked	
Emits when mobile overlay background is clicked. The mobile dropdown menu(bottom-sheet) in dbs-select always has overlay.

allows you to detect the overlay has been clicked to do other events such as confirm dismiss dialogs.

EventEmitter
Edit JSON string...
valueChange	
Emits on value change

EventEmitter
Edit JSON string...
Hide deprecated items
deprecated
Hide deprecated items
dropdownFixHeight	
Use maxMenuHeightPx instead

Used to override height calculations and limit height of the dropdown menu in px

number
48
dropUp	
boolean
false
minOptionsHeight	
number
1
mobilePlaceholder	
string
""
numOptionsToLoad	
number
50
showOptions	
boolean
false
filterEnabled	
(deprecated - IBGT, ODS) Use showFilter instead.

boolean
false
filterFields	
(deprecated - IBGT) Replaced by searchkeyWords.

string[]
labelVal	
(deprecated - ODS) No longer has any effect.

string
limit	
(deprecated - ODS) No longer has any effect.

number
NaN
maintainOrder	
(deprecated - IBGT) No longer has any effect. Order is always maintained.

boolean
false
maxStyle	
(deprecated - IBGT, ODS) No longer has any effect.

boolean
false
mobileHeader	
(deprecated - IBGT) Use mobileTitle instead.

Title in the header of the bottom-sheet.

string
mobileSubHeader	
(deprecated - IBGT) Use mobileSubtitle instead.

subtitle in the header of the bottom-sheet.

string
moveToDocument	
(deprecated - IBGT) Use the moveToDocument directive instead.

boolean
false
optionalIcon	
(deprecated - ODS) No longer has any effect.

string
placeHolder	
(deprecated - IBGT, ODS) Replaced by placeholder.

string
readonlyPlaceHolder	
(deprecated - IBGT) Replaced by placeholder.

string
removePlaceHolderHTMLTagContent	
(deprecated - IBGT) Use the saved _cleanedLabel_ instead.

boolean
false
selectAllEnabled	
(deprecated - IBGT, ODS) No longer has any effect. Select All is always enabled.

boolean
false
selectedMultiVal	
(deprecated - IBGT) Replaced by formControl.

DropdownValue[]
selectedVal	
(deprecated - IBGT) Replaced by formControl.

DropdownValue
sortCategory	
(deprecated - IBGT) No longer has any effect. Please sort values in order you want and pass to [values].

boolean
false
sortNonCategoryValues	
(deprecated - IBGT) No longer has any effect. Please sort values in order you want and pass to [values].

boolean
false
tooltipContent	
(deprecated - ODS) Use DbsFieldLabelComponent and DbsFieldLabelIconComponent instead.

string
validationMessage	
(deprecated - ODS) Use errorMsg instead.

string
onBlur	
EventEmitter
Edit JSON string...
onClose	
EventEmitter
Edit JSON string...
onClosed	
(deprecated - IBGT) Replaced by onClose Output.

EventEmitter<any>
new EventEmitter<any>()	
Edit JSON string...
onOptionSelected	
(deprecated - ODS) Replaced by menuClick Output.

EventEmitter<any>
new EventEmitter<any>()	
Edit JSON string...
whenClosed	
(deprecated - ODS) Replaced by onClose Output.

EventEmitter<any>
new EventEmitter<any>()	
Edit JSON string...
whenSelect	
(deprecated - ODS) Replaced by onSelect Output.

EventEmitter<any>
new EventEmitter<any>()	
Edit JSON string...
Hide methods items
methods
Hide methods items
applySelectionMultiple	
handles multipleSelect mobileView bottomsheet apply button

() => void
cancelSelectionMultiple	
handles multipleSelect mobileView bottomsheet cancel button

() => void
closeMenu	
May be used externally to force close the menu

You will require $event.stopImmediatePropagation() if you call this via a (click) within the menu itself.

Used to close the menu for single select selection but not multiple as it does not close on selection

() => void
Hide slots items
slots
Hide slots items
startSlot	
Content that goes before the main content.
HTMLElement
-	
endSlot	
Content that goes after the main content.
HTMLElement
-	
Hide templates items
templates
Hide templates items
topOptionTemplate	
Allows custom element to be inserted above all the other drop down items. Scrolls with options.
HTMLElement
-	
selectTopSectionTemplate	
Allows custom element to be inserted between the search bar and drop down items. Specific to the <dbs-select> element. Does not scroll with the options.
HTMLElement
-	
topSectionTemplate	
Allows custom element to be inserted between the search bar and drop down items. Specific to the <dbs-dropdown-menu> element. Does not scroll with the options.
HTMLElement
-	
selectOptionTemplate	
Allows customisation for the drop down items. Specific to the <dbs-select> element.
HTMLElement
-	
optionTemplate	
Allows customisation for the drop down items. Specific to the <dbs-dropdown-menu> element.
HTMLElement
-	
selectTemplate	
Overwrites multi-select ng-content. Specific to the <dbs-select> element.
HTMLElement
-
```