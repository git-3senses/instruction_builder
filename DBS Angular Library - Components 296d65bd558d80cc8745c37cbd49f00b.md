# DBS Angular Library - Components

```markdown
#### DBS Angular Library - Components

----------

### Accordian

## Usage
Import DbsAccordionComponent into your component or module.

import { DbsAccordionComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsAccordionComponent],
})

## Stories

# Basic
A basic accordion has a title and content.
<dbs-accordion  [title]="'This is the title'" >This is the content.</dbs-accordion>

# Opened
The expanded state of the accordion can be controlled with opened.
<dbs-accordion  [title]="'This is the title'" [opened]="true" >This is the content.</dbs-accordion>

# Seperator
The "content separator" variant can also be used with variant="separator" (default: box).
<dbs-accordion  [title]="'This is the title'" [variant]="'separator'" >This is the content.</dbs-accordion>

# With Subtitle
A subtitle can be added for additional info.
<dbs-accordion  [title]="'This is the title'" [subtitle]="'This is the subtitle'" >This is the content.</dbs-accordion>

# With Header End Slot
Additional content can be placed in headerEndSlot.
<dbs-accordion  [title]="'This is the title'" [subtitle]="'This is the subtitle'" >This is the content.<dbs-button headerEndSlot variant="plain">Action</dbs-button></dbs-accordion>

# API Reference
Inputs
<dbs-accordion [title]="title"  >This is the content.</dbs-accordion>
<dbs-accordion [title]="title" [opened]="opened"  >This is the content.</dbs-accordion>
<dbs-accordion [title]="title" [opened]="opened" [subtitle]="subtitle"  >This is the content.</dbs-accordion>
<dbs-accordion [title]="title" [opened]="opened" [subtitle]="subtitle" [variant]="variant"  >This is the content.</dbs-accordion>

Slots
<dbs-accordion [title]="title" [opened]="opened" [subtitle]="subtitle" [variant]="variant" [accordion-header-template]="this['accordion-header-template']"  >This is the content.</dbs-accordion>

<dbs-accordion [title]="title" [opened]="opened" [subtitle]="subtitle" [variant]="variant" [accordion-header-template]="this['accordion-header-template']"  >This is the content.</dbs-accordion>

Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
title	
Title in the header of the accordion.

string
This is the title
opened	
Sets whether the accordion is expanded.

boolean
false
subtitle	
Subtitle in the header of the accordion.

string
variant	
Variant of the accordion.

box - Accordion with border. separator - Accordion with no border.

"box"
"separator"
box

box

separator
Hide slots items
slots
Hide slots items
(default)	
The accordion's main content.
HTMLElement
-	
This is the content.
headerSlot	
The accordion's header content. Replaces the entire default header content.
HTMLElement
-	
accordion-header-template	
(deprecated - IBGT) Replaced by headerSlot.

The accordion's header content. Replaces the entire default header content.

HTMLElement
-	
headerStartSlot	
Content that goes before the header title and subtitle.
HTMLElement
-	
headerEndSlot	
Content that goes after the header title and subtitle, before the chevron icon.
HTMLElement
-	
headerBottomSlot	
Content that goes at the bottom of the header.
HTMLElement
-	

# deprecated

expanded	
(deprecated - IBGT) Use opened instead.
Sets whether the accordion is expanded.
boolean
false

label	
(deprecated - IBGT) Use title instead.
Title in the header of the accordion.
string

type	
(deprecated - IBGT) Use variant instead.
Type of the accordion.
box - Accordion with border. separator - Accordion with no border.
"box"
"separator"
box
separator

onExpandedStateChange	
(deprecated - IBGT) Use openedChange instead.
Emits value of expanded whenever it is changed.
EventEmitter<any>
new EventEmitter()	
Edit JSON string...
Hide outputs items

# outputs

openedChange	
Emits value of opened whenever it is changed.

EventEmitter<any>
new EventEmitter()	
Edit JSON string...
Hide methods items
methods
Hide methods items

toggle	
Toggles opened state and fires openedChange event.

($event?: Event) => void

----------

### Alert

## Usage
Import DbsAlertComponent into your component or module.

import { DbsAlertComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsAlertComponent],
})

## Stories

# Basic
A basic alert has a title and opened to enable display.
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" ></dbs-alert>

# With Subtitle
Additional information can be added to the message content.
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" >Please try again after 5 minutes.</dbs-alert>

# With Actions Buttons
Action buttons can also be added to the message content.
<dbs-alert  [opened]="true" [title]="'Too many failed attempts'" >
  <p>Please try again after 5 minutes.</p>
  <div style="display:flex; align-items:center; gap:16px; margin-top:16px;">
    <dbs-button variant="secondary" size="sm">Wait patiently</dbs-button>
    <dbs-button variant="plain" size="xs">Exit</dbs-button>
  </div>
</dbs-alert>

# Without Title
The alert can be rendered without a title.
<dbs-alert  [opened]="true" >
  <style>
    .dbs-alert_list-item,
    .dbs-alert_list-item a {
      color: var(--color-text-low);
      line-height: var(--typography-leading);
    }
  </style>
  <p>Please fix the following errors in your form:</p>
  <ul>
    <li class="dbs-alert_list-item"><a href="#" target="_self">SG mobile number have 8 digits</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Must be a valid email</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Remove special characters</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">Price cannot be more than 3 decimal points</a></li>
    <li class="dbs-alert_list-item"><a href="#" target="_self">The account number that you entered in incorrect</a></li>
  </ul>
</dbs-alert>

# Event Handling
- TypeScript
import {
  Component,
  ElementRef,
  inject,
  viewChild,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsButtonComponent } from "../../../dbs-button/dbs-button.component";
import { DbsAlertComponent } from "../../dbs-alert.component";

@Component({
  selector: "event-handling-story",
  standalone: true,
  imports: [CommonModule, DbsAlertComponent, DbsButtonComponent],
  templateUrl: `event-handling-story.component.html`,
})
export class EventHandlingStoryComponent {
  alertRef = viewChild.required<DbsAlertComponent>("alertRef");

  opened = true;

  onCloseAlert() {
    this.alertRef().closeAlert();
  }

  onShowAlert() {
    this.opened = true;
  }

  events: { type: string; opened: boolean }[] = [];

  onOpenedChange($event: boolean) {
    this.opened = false;
    const newEvents = [
      {
        type: "openedChange",
        opened: $event,
      },
      ...this.events,
    ];
    this.events = newEvents;
    console.log($event);
  }
}

- HTML
<div style="margin-bottom: 16px; display: flex; gap: 8px">
  <dbs-button (click)="onCloseAlert()">Fire closeAlert()</dbs-button>
  <dbs-button (click)="onShowAlert()">Show alert</dbs-button>
</div>
<dbs-alert
  #alertRef
  title="Too many failed attempts"
  [opened]="opened"
  (openedChange)="onOpenedChange($event)"
>
  Please try again after 5 minutes.
</dbs-alert>
<p><strong>Events fired:</strong></p>
<div
  style="
    background: var(--color-background-level-1);
    padding: 0 16px;
    max-width: 300px;
    height: 300px;
    overflow-y: scroll;
  "
>
  @for (event of events; track event) {
    <pre>
type: {{ event.type | json }}
opened: {{ event.opened | json }}
  </pre
    >
  }
</div>

# API Reference

----

inputs

opened	
Sets whether the alert should be displayed.boolean
false

title	
Title of the alert.
string

----

deprecated

viewAll	
(deprecated - ODS) Message interaction should be controlled via elements passed into <ng-content> instead.
Expanded state of the list of messsages.
""
false

actionType	
(deprecated - IBGT) Refer to Information Banner instead.
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
Sets which icon to use for the action button, if showAction is true.
string
"close"
"arrow"

alertMessages	
(deprecated - IBGT, ODS) Messages should go into <ng-content> instead.
Sets the list of alert messages to display in the alert.
string[]

alertTitle	
(deprecated - IBGT, ODS) Use title instead.
Sets the title text for the alert.
string

alertType	
(deprecated - IBGT, ODS) Refer to Information Banner instead.
No longer has any effect. In DLS 3.1, Alerts have only 1 type.
Determines the type/purpose for the alert
string

closable	
(deprecated - IBGT, ODS) Refer to Information Banner instead.
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
Determines whether the alert is dismissible or not.
boolean
false

iconType	
(deprecated - IBGT) Refer to Information Banner instead.
No longer has any effect. In DLS 3.1, Alerts have only 1 type.
Sets the icon for the alert.
string
"alert"
"info"

showAction	
(deprecated - IBGT) Refer to Information Banner instead.
No longer has any effect. In DLS 3.1, Alerts are non-dismissible and should only be removed when inline errors are fixed.
Determines whether the action button is displayed or not.
boolean
false

size	
(deprecated - IBGT, ODS) Simplified to use a single standard size.
Size of the alert.
"sm"
"md"
md
sm
md

toggle	
(deprecated - IBGT, ODS) Use opened instead.
Sets whether the alert should be displayed.
boolean
false

clickMessage	
(deprecated - ODS) Message interaction should be controlled via elements passed into <ng-content> instead
Event fired when one of the messages in alertMessages is clicked.
EventEmitter
Edit JSON string...

toggleChange	
(deprecated - IBGT, ODS) Use openedChange instead.
Event fired when toggle has changed.
EventEmitter
Edit JSON string...

onMessageClick	
(deprecated - ODS) Message interaction should be controlled via elements passed into <ng-content> instead.
Fired when one of the messages in alertMessages is clicked.
(value: literal type) => void

viewMore	
(deprecated - ODS) Message interaction should be controlled via elements passed into <ng-content> instead.
Expands the list of messages if it is truncated.
() => void

----

outputs

openedChange	
Event fired when opened has changed.

EventEmitter
Edit JSON string...

----

methods

closeAlert	
Removes the alert from display.
() => void

----

slots
(default)	
The alert's message content.
HTMLElement

----

### Avatar
Usage
Import DbsAvatarComponent into your component or module.

import { DbsAvatarComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsAvatarComponent],
})
Copy
Stories
Basic
GA
Hide code
<dbs-avatar [name]="name"  ></dbs-avatar>
Copy
Sizes
There are five sizes: xs, sm, md, lg, and xl.

RA
GP
WM
PG
PS
Hide code
<div [style.display]="'flex'" [style.align-items]="'center'" [style.flex-wrap]="'wrap'" [style.gap.px]="24">
  <dbs-avatar  [size]="'xs'" [name]="'Red Apple'" ></dbs-avatar>
  <dbs-avatar  [size]="'sm'" [name]="'Green Pear'" ></dbs-avatar>
  <dbs-avatar  [size]="'md'" [name]="'White Melon'" ></dbs-avatar>
  <dbs-avatar  [size]="'lg'" [name]="'Purple Grape'" ></dbs-avatar>
  <dbs-avatar  [size]="'xl'" [name]="'Pink Strawberry'" ></dbs-avatar>
</div>
Copy
Background Colors
There are 18 background colors to choose from, including a set of preset gradients. Use none for a transparent background.

N
W
N
G
G
L
L
M
M
L
A
GG
GL
LL
MM
ML
LA
AG
Hide code
<div [style.display]="'flex'" [style.align-items]="'center'" [style.flex-wrap]="'wrap'" [style.gap.px]="24">
  <dbs-avatar  [backgroundColor]="'none'" [name]="'none'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'white'" [name]="'white'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'neutral'" [name]="'neutral'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'goji'" [name]="'goji'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'ginger'" [name]="'ginger'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'lemon'" [name]="'lemon'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'lime'" [name]="'lime'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'melon'" [name]="'melon'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'mint'" [name]="'mint'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'lavender'" [name]="'lavender'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'acai'" [name]="'acai'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'goji-ginger'" [name]="'goji ginger'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'ginger-lemon'" [name]="'ginger lemon'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'lemon-lime'" [name]="'lemon lime'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'melon-mint'" [name]="'melon mint'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'mint-lavender'" [name]="'mint lavender'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'lavender-acai'" [name]="'lavender acai'" ></dbs-avatar>
  <dbs-avatar  [backgroundColor]="'acai-goji'" [name]="'acai goji'" ></dbs-avatar>
</div>
Copy
Text Variant With Name
text variants are usually used when the user profile images are unavailable. Use the name attribute to have the component format the text and generate a gradient background.

GA
Hide code
<dbs-avatar  [variant]="'text'" [name]="'Green Apple'" ></dbs-avatar>
Copy
Text Variant With Content
Content can also be passed in as a text node. However, this method does not provide any formatting.

🍏🐛
Hide code
<dbs-avatar  [variant]="'text'" [backgroundColor]="'melon-mint'" >🍏🐛</dbs-avatar>
Copy
Logo Variant
Logos can be passed in with the logo variant.

Hide code
<dbs-avatar  [variant]="'logo'" ><img src="./favicon.svg" /></dbs-avatar>
Copy
Icon Variant
SVG icons can be passed in with the icon variant. Set the SVG width and height to 100% to allow it to fill the avatar with the right amount of padding.

Hide code
<dbs-avatar  [variant]="'icon'" ><svg-icon iconName="user" style="width: 100%; height: 100%;" /></dbs-avatar>
Copy
Profile Image Variant
User profile images can be passed as an <img> node, together with the profile-image variant.

Hide code
<dbs-avatar  [variant]="'profile-image'" ><img src="./assets/avatar-profile-image.png" /></dbs-avatar>
Copy
Squared Variant
The squared (non-rounded) variant helps prevent images from getting cropped in an undesired manner.

Hide code
<dbs-avatar  [variant]="'squared'" ><img src="./assets/dbs-black-card.svg" /></dbs-avatar>
Copy
API Reference
GA
Hide code
<dbs-avatar [name]="name"  ></dbs-avatar>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
name	
Name of user profile to be converted into initials.

string
Green Apple
backgroundColor	
Background color when used with text variant.

A gradient background will already be generated based on the initials of name, but this will override the gradient if defined.

"none"
"white"
"neutral"
"goji"
"ginger"
"lemon"
"lime"
"melon"
Show 10 more...

Choose option...
size	
Size of avatar container.

Note: The following values are deprecated – mini, small, medium, large.

"mini"
"small"
"medium"
"large"
"xs"
"sm"
"md"
"lg"
Show 1 more...
md

Choose option...
variant	
Variant of avatar.

"text"
"logo"
"icon"
"profile-image"
"squared"
text

text

logo

icon

profile-image

squared
Hide deprecated items
deprecated
Hide deprecated items
color	
(deprecated - ODS) Use backgroundColor instead.

"goji"
"ginger"
"lemon"
"lime"
"melon"
"mint"
"lavender"
"acai"

Choose option...
img	
(deprecated - ODS) Pass <img src="..."> into <ng-content> instead.

string
img_src	
(deprecated - IBGT) Pass <img src="..."> into <ng-content> instead.

string
null
label	
(deprecated - IBGT) Use name instead.

string
null
txt	
(deprecated - ODS) Use name instead.

string
type	
(deprecated - IBGT, ODS) Use variant instead. Emojis should be replaced by icons.

"initials"
"image"
"squared"
"logo"
"emoji"
"custom"
"default"
"img"
Show 1 more...

Choose option...
clicked	
(deprecated - ODS) Use click instead.

EventEmitter
Edit JSON string...
hovered	
(deprecated - ODS) Use mouseenter instead.

EventEmitter
Edit JSON string...
Hide slots items
slots
Hide slots items
(default)	
The avatar's main content.
HTMLElement
-	

### Badge

Badge
These Badges are meant to be attached onto the top right corners of links, buttons or icons they indicate actionables or the status of the interactable.

Usage
Import DbsBadgeComponent into your component or module.

import { DbsBadgeComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsBadgeComponent],
})
Copy
Stories
Basic
Badge with defaultSlot can be used to inicate status

New
Hide code
<dbs-badge [priority]="priority">
New
</dbs-badge>
Copy
Dot Indicator
Badge without defaultSlot can be used as dot indicator

Hide code
<dbs-badge [priority]="priority">

</dbs-badge>
Copy
IBG Demo Utility Classes Deprecated
We also maintained utility classes with the examples below
RedDefaultLight
TypeScript
HTML
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DbsBadgeComponent } from "../../dbs-badge.component";

@Component({
  selector: "dbs-badge-utility-classes-story",
  standalone: true,
  imports: [CommonModule, DbsBadgeComponent],
  templateUrl: "utility-classes-story.component.html",
  styleUrl:
    "utility-classes-story.component.css, ./../../../../../../assets/ibgt-global-styles/_badge.scss",
})
export class BadgeUtilityClassesStoryComponent {}
Copy
API Reference
medium
Hide code
<dbs-badge [priority]="priority">
medium
</dbs-badge>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
priority	
The level of emphasis/priority of badge.

"high"
"medium"
"low"
medium

high

medium

low
Hide slots items
slots
Hide slots items
(default)	
The badge's main content.
HTMLElement
-	
medium

### Bottom Sheet
Bottom Sheet
The dbs-bottom-sheet is priamrily used for Dropdowns allowing them to be adaptive components so all dropdowns on desktop web are bottom sheets for mobile responsiveness

Usage
Import DbsBottomSheetComponent into your component or module.

import { DbsBottomSheetComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsBottomSheetComponent],
})
Copy
Stories
Basic
Method 1: Opening BottomSheet using 'open'

Ensure that opened is 2 way binded

Current state of BottomSheet: false Toggle bottom sheet
Hide code
<div > Current state of BottomSheet: {{opened}}
  <dbs-button (click)="opened=!opened">Toggle bottom sheet</dbs-button>
  <dbs-bottom-sheet #bottomSheet   [title]="title" [subtitle]="subtitle" [hasOverlay]="hasOverlay" [opened]="opened" [setFullWidth]="setFullWidth" [componentMaxHeight]="componentMaxHeight" (onClosed)="onClosed($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)" [(opened)]= "opened">
    <div searchSlot [style.padding-bottom.px]='8'><dbs-search></dbs-search></div>
    <div bottom-sheet-body-content [style.height.px]='500'>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
    </div>

    <dbs-button footerSlot (click)="clickElement($event)">Next
      <svg-icon iconName='chevron-right' endSlot></svg-icon>
    </dbs-button>
    <dbs-button footerSlot (click)="clickElement($event)">Cancel</dbs-button>
  </dbs-bottom-sheet>
</div>
Copy
Open Bottom Sheet
Method 2: Opening BottomSheet using method - openBottomSheet

Current state of BottomSheet: false openBottomSheet()
Hide code
<div > Current state of BottomSheet: {{bottomSheet.opened}}
  <dbs-button (click)="bottomSheet.openBottomSheet()">openBottomSheet()</dbs-button>
  <dbs-bottom-sheet #bottomSheet [title]="title" [subtitle]="subtitle" [hasOverlay]="hasOverlay" [opened]="opened" [setFullWidth]="setFullWidth" [footerButtonLayout]="footerButtonLayout" (onClosed)="onClosed($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)">
    <div searchSlot [style.padding-bottom.px]='8'><dbs-search></dbs-search></div>
    <div bottom-sheet-body-content [style.height.px]='500'>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
    </div>

    <dbs-button footerSlot (click)="bottomSheet.closeBottomSheet()">Cancel</dbs-button>
    <dbs-button footerSlot (click)="bottomSheet.closeBottomSheet()">Close
      <svg-icon iconName='chevron-right' endSlot></svg-icon>
    </dbs-button>
  </dbs-bottom-sheet>
</div>
Copy
API Reference
Current state of BottomSheet: false Toggle bottom sheet
Hide code
<div > Current state of BottomSheet: {{opened}}
  <dbs-button (click)="opened=!opened">Toggle bottom sheet</dbs-button>
  <dbs-bottom-sheet #bottomSheet [(opened)]= "opened" [title]="title" [subtitle]="subtitle" [hasOverlay]="hasOverlay" [opened]="opened" [setFullWidth]="setFullWidth" (onClosed)="onClosed($event)" (openedChange)="openedChange($event)" (overlayClicked)="overlayClicked($event)">
    <div searchSlot [style.padding-bottom.px]='8'><dbs-search></dbs-search></div>
    <div bottom-sheet-body-content [style.height.px]='500'>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
      <h1>this is the test body content</h1>
    </div>

    <dbs-button footerSlot (click)="clickElement($event)">Next
      <svg-icon iconName='chevron-right' endSlot></svg-icon>
    </dbs-button>
    <dbs-button footerSlot (click)="clickElement($event)">Cancel</dbs-button>
</dbs-bottom-sheet>
</div>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
title	
title for the header section

string
""
Heading Title
subtitle	
subtitle for the header section

string
This is subheading
hasOverlay	
Show and hides the overlay behind the bottomsheet

false will prevent scrollLock
boolean
true

opened	
opened state of the bottom-sheet

2-way binded via (openedChange)
boolean
false

closeThreshold	
The number of px that when bottomsheet is dragged will cause it to close

@default 50
number
50
componentHeight	
Sets the css height of the bottom-sheet, sets via ngStyle tied to the height css thus you may pass in fit-content etc.

this is limited by [componentMaxHeight]

if(componentHeight>componentMaxHeight) limit is still componentMaxHeight

string
componentMaxHeight	
Sets css max-height of the bottom-sheet where it expands up to, sets via ngStyle tied to the max-height css thus you may pass in '100%'/'100dvh' etc.

limits [componentHeight]
Set to quantitaive values to preserve open and close transitions
string
95vh
footerButtonLayout	
Mobile layout of <dbs-button> elements in the footer.

stretched (default): Buttons stretch evenly to fill the row.
stacked: Buttons stack one on top of the other.
"stretched"
"stacked"
stretched

stretched

stacked
swipeDistanceThreshold	
number
1000
swipeTimeThreshold	
number
1000
closeWTransition	
(deprecated - IBGT) always closed with transition. closes bottom-sheet with transition

boolean
true
Hide deprecated items
deprecated
Hide deprecated items
setFullWidth	
(deprecated - IBGT) Bottom-sheet is always full-width.

sets bottomsheet to take full screen width 100vw via css class

boolean
true

centerContent	
(deprecated - IBGT) has no effect.

Please set content center via ng-content styles
boolean
false
close	
(deprecated - IBGT) Use opened instead. close state of the bottom-sheet

boolean
false
fullyPullUp	
(deprecated - IBGT) has no effect.

bottomsheet always max-height
boolean
false
hasFooter	
(deprecated - IBGT) has no effect.

footer is ng-content
boolean
false
header	
(deprecated - IBGT) Use title instead.

Title in the header of the bottom-sheet.

string
""
isFooterSticky	
(deprecated - IBGT) has no effect.

always sticky
boolean
false
isHeaderSticky	
(deprecated - IBGT) has no effect.

always sticky
boolean
false
subHeader	
(deprecated - IBGT) Use subtitle instead.

subtitle in the header of the bottom-sheet.

string
updateHeight	
(deprecated - IBGT) has no effect.

Removed usage
Subject<boolean>
new Subject()	
bottom-sheet-header-subcomponent	
(deprecated - IBGT) Replaced by searchSlot instead.
HTMLElement
-	
bottom-sheet-body-content	
(deprecated - IBGT) Replaced by (default) instead.
HTMLElement
-	
bottom-sheet-footer-content	
(deprecated - IBGT) Replaced by footerSlot instead.
HTMLElement
-	
Hide slots items
slots
Hide slots items
searchSlot	
ng-content for search
HTMLElement
-	
<div searchSlot [style.padding-bottom.px]='8'><dbs-search></dbs-search></div>
(default)	
The bottom-sheet's main content.
HTMLElement
-	
headerSlot	
ng-content for fully customising header
HTMLElement
-	
Hide outputs items
outputs
Hide outputs items
onClosed	
emit when bottom-sheet is closed and transition over

EventEmitter
Edit JSON string...
openedChange	
Emits on change of the [opened] input of the bottom-sheet

EventEmitter
Edit JSON string...
overlayClicked	
Emits when overlay background is clicked

allows you to detect the overlay has been clicked to do other events such as confirm dismiss dialogs.

EventEmitter
Edit JSON string...
Hide methods items
methods
Hide methods items
checkIOS16	
() => void
closeBottomSheet	
Function to close the bottom sheet with its animation

(event?: KeyboardEvent) => void
onResize	
(event: any) => void
openBottomSheet	
Open and close the bottom sheet

(windowResize: boolean) => void

### Beadcrumb
Breadcrumb
Usage
Import DbsBreadcrumbComponent into your component or module.

import { DbsBreadcrumbComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsBreadcrumbComponent],
})
Copy
Stories
Basic
Item 1
Item 2
Item 3
Hide code
<dbs-breadcrumb [maxLeading]="maxLeading" [maxTrailing]="maxTrailing" [selected]="selected" [breadcrumbs]="breadcrumbs" (onSelect)="onSelect($event)"></dbs-breadcrumb>
Copy
With Ellipsis
Upon clicking of an ellipsis, a dropdown menu will be displayed

Item 1

Item 3
Hide code
<dbs-breadcrumb [maxLeading]="maxLeading" [maxTrailing]="maxTrailing" [selected]="selected" [breadcrumbs]="breadcrumbs" (onSelect)="onSelect($event)"></dbs-breadcrumb>
Copy
Custom Popout
In this demo, you can trigger a custom popover when u select the breadcrumb item

Item 1
Item 2
Item 3
Hide code

  <dbs-breadcrumb (click)="($event?.target?.tagName=== 'A')?popover.openPopover($event?.target,'bottom-start'): null" [breadcrumbs]="[{ value: 'Item 1', label: 'Item 1', selected:false }, { value: 'Item 2', label: 'Item 2', selected:false }, { value: 'Item 3', label: 'Item 3', selected:false }]"[maxLeading]="maxLeading" [maxTrailing]="maxTrailing" [selected]="selected" [breadcrumbs]="breadcrumbs" (onSelect)="onSelect($event)">
  </dbs-breadcrumb>
  <dbs-popover
  #popover >
  <div popoverHeader>Popover Header</div>
  <div popoverContent>
    A popover is a more flexible component that can display content with various
    layouts.
  </div>
  <div popoverFooter>
    <dbs-button>Footer Btn</dbs-button>
  </div>
  </dbs-popover>
Copy
API Reference
Item 1
Item 2
Item 3
Hide code
<dbs-breadcrumb [maxLeading]="maxLeading" [maxTrailing]="maxTrailing" [selected]="selected" [breadcrumbs]="breadcrumbs" (onSelect)="onSelect($event)"></dbs-breadcrumb>
Copy
Name	Description	Default	
Control
Hide inputs items
inputs
Hide inputs items
maxLeading	
Number of items to show before truncation. Crumbs exceeding this limit will be collapsed into a menu. Defaults to 2.

number
2
1
maxTrailing	
Number of items to show after truncation. Crumbs exceeding this limit will be collapsed into a menu. Defaults to 2.

number
2
2
selected	
Set the selected breadcrumb, either use a string matching the value of the item in breadcrumbs Input, or using a BreadcrumbItem object.

BreadcrumbItem
string
"Item 1"
breadcrumbs	
Set the list of breadcrumbs.

Note: The selected breadcrumb is set through the selected Input, not through the selected property in each object in this array.

Array<BreadcrumbItem>
[]	
breadcrumbs :[
0 :{...} 3 keys
1 :{...} 3 keys
2 :{...} 3 keys
]
Hide outputs items
outputs
Hide outputs items
onSelect	
Executes the provided function whenever a breadcrumb is selected

EventEmitter

### Button

Usage
Import DbsButtonComponent into your component or module.

import { DbsButtonComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsButtonComponent],
})
Copy
Stories
Basic
Button text
Hide code
<dbs-button   >Button text</dbs-button>
Copy
Primary
primary buttons are high-emphasis, they contain actions that are primary to your app.

Primary
Hide code
<dbs-button  [variant]="'primary'" >Primary</dbs-button>
Copy
Secondary
secondary buttons are medium-emphasis buttons. They contain actions that are important but not as critical as the primary actions in your app.

Secondary
Hide code
<dbs-button  [variant]="'secondary'" >Secondary</dbs-button>
Copy
Plain
plain buttons are typically used for less-pronounced actions, generally used in cards or dialogs.

Plain
Hide code
<dbs-button  [variant]="'plain'" >Plain</dbs-button>
Copy
Positive
positive buttons are specialised primary buttons. They must only be used in calling attention to an action with a strong positive outcome.

Positive
Hide code
<dbs-button  [variant]="'positive'" >Positive</dbs-button>
Copy
Destructive
destructive buttons are specialised primary buttons. They must only be used in calling attention to an action with a potentially destructive outcome for the user.

Destructive
Hide code
<dbs-button  [variant]="'destructive'" >Destructive</dbs-button>
Copy
Sizes
There are four sizes: xs, sm, md, and lg.

Extra-small
Small
Medium
Large
Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-button  [size]="'xs'" >Extra-small</dbs-button>
  <dbs-button  [size]="'sm'" >Small</dbs-button>
  <dbs-button  [size]="'md'" >Medium</dbs-button>
  <dbs-button  [size]="'lg'" >Large</dbs-button>
</div>
Copy
Full-width
You can make the button span the full width of its parent container by passing in fullWidth.

Full-width button
Hide code
<dbs-button  [fullWidth]="true" >Full-width button</dbs-button>
Copy
Disabled
disabled buttons cannot be interacted with, and are used to prevent users from executing the original action of the button.

We don't recommend disabled buttons in forms – Instead, allow the user to click next and provide a page-level alert and inline alerts to point to areas that need attention.

Primary
Secondary
Plain
Positive
Destructive
Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-button  [disabled]="true" [variant]="'primary'" >Primary</dbs-button>
  <dbs-button  [disabled]="true" [variant]="'secondary'" >Secondary</dbs-button>
  <dbs-button  [disabled]="true" [variant]="'plain'" >Plain</dbs-button>
  <dbs-button  [disabled]="true" [variant]="'positive'" >Positive</dbs-button>
  <dbs-button  [disabled]="true" [variant]="'destructive'" >Destructive</dbs-button>
</div>
Copy
With Start/End Slots
Sometimes you might want to have other elements like icon/badge/logo for certain buttons to enhance the UX of the application. You can pass the element into the startSlot slot and/or endSlot slot.

DLS dictates a gap of 8px
icon size of 16px

Previous
Next
Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
<style>
svg-icon{
  height: 16px;
  width: 16px;
}
</style>
  <dbs-button   >Previous<svg-icon startSlot iconName="chevron-left" ></svg-icon></dbs-button>
  <dbs-button   >Next<svg-icon endSlot iconName="chevron-right" ></svg-icon></dbs-button>
</div>
Copy
Dim
Dim buttons are used in always-dark backgrounds regardless of theme polarity. An example of such a usage is in snackbars.

Dim Secondary
Dim Secondary
Dim Plain
Dim Plain
Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-button  [dim]="true" [variant]="'secondary'" >Dim Secondary</dbs-button>
  <dbs-button  [dim]="true" [variant]="'secondary'" >Dim Secondary<svg-icon endSlot iconName="chevron-right"></svg-icon></dbs-button>
  <dbs-button  [dim]="true" [variant]="'plain'" >Dim Plain</dbs-button>
  <dbs-button  [dim]="true" [variant]="'plain'" >Dim Plain<svg-icon endSlot iconName="chevron-right"></svg-icon></dbs-button>
</div>
Copy
Loading
Pass in the loading attribute to turn the button into a loading state.

The loading state only applies to primary, secondary, positive, and destructive variants.

Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-button  [loading]="true" [variant]="'primary'" ></dbs-button>
  <dbs-button  [loading]="true" [variant]="'secondary'" ></dbs-button>
  <dbs-button  [loading]="true" [variant]="'positive'" ></dbs-button>
  <dbs-button  [loading]="true" [variant]="'destructive'" ></dbs-button>
</div>
Copy
Bound Plain
bound buttons are convenience components that have negative margin applied to them, such that the space it occupies is smaller than what visually appears on the screen. They are primarily used for achieving optical alignment with other UI elements, and only apply to button styles that have no visible border in its default state.

In this example, we use a bound button to align a line of text with the button's label:

Start of a line of text
Bound Plain Button
Bound Plain Button
Bound Plain Button
Bound Plain Button
Hide code
<p [style.display]="'inline'">Start of a line of text</p>
<div><dbs-button  [variant]="'plain'" [bound]="true" [size]="'xs'" >Bound Plain Button</dbs-button></div>
<div><dbs-button  [variant]="'plain'" [bound]="true" [size]="'sm'" >Bound Plain Button</dbs-button></div>
<div><dbs-button  [variant]="'plain'" [bound]="true" [size]="'md'" >Bound Plain Button</dbs-button></div>
<div><dbs-button  [variant]="'plain'" [bound]="true" [size]="'lg'" >Bound Plain Button</dbs-button></div>
Copy
Form Submit
Passing in type="submit" within a form group will allow the button to trigger the form's ngSubmit event.

Submit
TypeScript
HTML
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { DbsButtonComponent } from "../../dbs-button.component";

@Component({
  selector: "form-submit-story",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DbsButtonComponent],
  templateUrl: "form-submit-story.component.html",
})
export class FormSubmitStoryComponent {
  formBuilder = inject(FormBuilder);

  formGroup = this.formBuilder.group({});

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  onClear() {
    this.submitted = false;
  }
}
Copy
API Reference
Button text
Hide code
<dbs-button   >Button text</dbs-button>
Copy
Name	Description	Default	
Control
Hide slots items
slots
Hide slots items
(default)	
The button's main content.
HTMLElement
-	
Button text
startSlot	
Content that goes before the main content.
HTMLElement
-	
endSlot	
Content that goes after the main content.
HTMLElement
-	
Hide inputs items
inputs
Hide inputs items
bound	
(plain variant only) Applies negative margin to the button. Primarily used for achieving optical alignment with other UI elements.

boolean
false
dim	
Converts the colours for use against dark backgrounds, regardless of theme polarity.

boolean
false
disabled	
Disables the button.

boolean
false
fullWidth	
Makes the button span the full width of its parent container.

boolean
false
loading	
Turns the button into a loading state. Only applicable to primary, secondary, positive, and destructive variants.

boolean
false
size	
The size of the button.

"xs"
"sm"
"md"
"lg"
md

xs

sm

md

lg
type	
The button's input type, inherited from HTML's input button types.

"button"
"submit"
"reset"
button

button

submit

reset
variant	
The button variant.

"primary"
"secondary"
"plain"
"positive"
"destructive"
secondary

primary

secondary

plain

positive

destructive
config	
(deprecated - ODS) Use the individual inputs mapped below instead. Split buttons are replaced by the Dropdown component.

btnName → <ng-content>

btnType → variant

btnSize → size

btnDisabled → disabled

iconClass → <ng-content select="[startSlot]">

isSvg → No longer has any effect.

isSplitBtn → No longer has any effect.

dataItems → No longer has any effect.

splitBtnSize → No longer has any effect.

IButtonConfig
Hide outputs items
outputs
Hide outputs items
btnClick	
(deprecated - ODS) Use click instead.

EventEmitter
Edit JSON string...
splitBtnClick	
(deprecated - ODS) Use click instead.

EventEmitter
Edit JSON string...

# Floating Action Button

Floating Action Button
Usage
Import DbsFloatingActionButtonComponent into your component or module.

import { DbsFloatingActionButtonComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsFloatingActionButtonComponent],
})
Copy
Stories
Basic
dbs-floating action buttons can be modified using the following inputs:

dim
size
disabled
iconName: Refer to svg icon's names

Hide code
<div [style.display]="'flex'" [style.gap.px]="16" [style.flex-wrap]="'wrap'" [style.align-items]="'center'">
    <dbs-floating-action-button  [size]="'xs'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'sm'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button   ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'lg'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
  </div>
Copy
Action Button Dim

Hide code
<div [style.display]="'flex'" [style.gap.px]="16" [style.flex-wrap]="'wrap'" [style.align-items]="'center'">
    <dbs-floating-action-button  [size]="'xs'" [dim]="true" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.429 5.64512C14.9454 4.61045 13.1467 4.12727 11.3444 4.27925C9.54208 4.43124 7.84969 5.20882 6.56036 6.47731C5.27103 7.7458 4.46599 9.42531 4.28466 11.2249C4.10334 13.0245 4.55716 14.8308 5.56752 16.331C6.57788 17.8313 8.08113 18.9308 9.8169 19.4393C11.5527 19.9478 13.4116 19.8331 15.0717 19.1152C16.7319 18.3973 18.0886 17.1213 18.907 15.5084C19.7253 13.8954 19.9538 12.0469 19.5527 10.2833C19.4608 9.87936 19.7138 9.47748 20.1177 9.38562C20.5216 9.29377 20.9235 9.54673 21.0153 9.95064C21.494 12.0557 21.2214 14.2619 20.2447 16.187C19.2679 18.1122 17.6486 19.6351 15.6671 20.492C13.6857 21.3489 11.4669 21.4857 9.39522 20.8788C7.32349 20.2719 5.52928 18.9595 4.32337 17.169C3.11746 15.3784 2.5758 13.2224 2.79222 11.0745C3.00864 8.92662 3.9695 6.92206 5.50837 5.40805C7.04725 3.89404 9.0672 2.96596 11.2183 2.78456C13.3695 2.60316 15.5163 3.17986 17.287 4.41478C17.6268 4.65173 17.7101 5.11924 17.4732 5.45898C17.2362 5.79873 16.7687 5.88207 16.429 5.64512ZM19.9953 6.15858C20.2877 6.45201 20.2868 6.92688 19.9934 7.21924L12.5294 14.6562C12.2363 14.9482 11.7622 14.9478 11.4697 14.6553L8.43267 11.6183C8.13977 11.3254 8.13977 10.8505 8.43267 10.5576C8.72556 10.2647 9.20043 10.2647 9.49333 10.5576L12.001 13.0653L18.9346 6.15666C19.2281 5.8643 19.7029 5.86516 19.9953 6.15858Z" fill="#69737B"/> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'sm'" [dim]="true" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.429 5.64512C14.9454 4.61045 13.1467 4.12727 11.3444 4.27925C9.54208 4.43124 7.84969 5.20882 6.56036 6.47731C5.27103 7.7458 4.46599 9.42531 4.28466 11.2249C4.10334 13.0245 4.55716 14.8308 5.56752 16.331C6.57788 17.8313 8.08113 18.9308 9.8169 19.4393C11.5527 19.9478 13.4116 19.8331 15.0717 19.1152C16.7319 18.3973 18.0886 17.1213 18.907 15.5084C19.7253 13.8954 19.9538 12.0469 19.5527 10.2833C19.4608 9.87936 19.7138 9.47748 20.1177 9.38562C20.5216 9.29377 20.9235 9.54673 21.0153 9.95064C21.494 12.0557 21.2214 14.2619 20.2447 16.187C19.2679 18.1122 17.6486 19.6351 15.6671 20.492C13.6857 21.3489 11.4669 21.4857 9.39522 20.8788C7.32349 20.2719 5.52928 18.9595 4.32337 17.169C3.11746 15.3784 2.5758 13.2224 2.79222 11.0745C3.00864 8.92662 3.9695 6.92206 5.50837 5.40805C7.04725 3.89404 9.0672 2.96596 11.2183 2.78456C13.3695 2.60316 15.5163 3.17986 17.287 4.41478C17.6268 4.65173 17.7101 5.11924 17.4732 5.45898C17.2362 5.79873 16.7687 5.88207 16.429 5.64512ZM19.9953 6.15858C20.2877 6.45201 20.2868 6.92688 19.9934 7.21924L12.5294 14.6562C12.2363 14.9482 11.7622 14.9478 11.4697 14.6553L8.43267 11.6183C8.13977 11.3254 8.13977 10.8505 8.43267 10.5576C8.72556 10.2647 9.20043 10.2647 9.49333 10.5576L12.001 13.0653L18.9346 6.15666C19.2281 5.8643 19.7029 5.86516 19.9953 6.15858Z" fill="#69737B"/> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [dim]="true" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.429 5.64512C14.9454 4.61045 13.1467 4.12727 11.3444 4.27925C9.54208 4.43124 7.84969 5.20882 6.56036 6.47731C5.27103 7.7458 4.46599 9.42531 4.28466 11.2249C4.10334 13.0245 4.55716 14.8308 5.56752 16.331C6.57788 17.8313 8.08113 18.9308 9.8169 19.4393C11.5527 19.9478 13.4116 19.8331 15.0717 19.1152C16.7319 18.3973 18.0886 17.1213 18.907 15.5084C19.7253 13.8954 19.9538 12.0469 19.5527 10.2833C19.4608 9.87936 19.7138 9.47748 20.1177 9.38562C20.5216 9.29377 20.9235 9.54673 21.0153 9.95064C21.494 12.0557 21.2214 14.2619 20.2447 16.187C19.2679 18.1122 17.6486 19.6351 15.6671 20.492C13.6857 21.3489 11.4669 21.4857 9.39522 20.8788C7.32349 20.2719 5.52928 18.9595 4.32337 17.169C3.11746 15.3784 2.5758 13.2224 2.79222 11.0745C3.00864 8.92662 3.9695 6.92206 5.50837 5.40805C7.04725 3.89404 9.0672 2.96596 11.2183 2.78456C13.3695 2.60316 15.5163 3.17986 17.287 4.41478C17.6268 4.65173 17.7101 5.11924 17.4732 5.45898C17.2362 5.79873 16.7687 5.88207 16.429 5.64512ZM19.9953 6.15858C20.2877 6.45201 20.2868 6.92688 19.9934 7.21924L12.5294 14.6562C12.2363 14.9482 11.7622 14.9478 11.4697 14.6553L8.43267 11.6183C8.13977 11.3254 8.13977 10.8505 8.43267 10.5576C8.72556 10.2647 9.20043 10.2647 9.49333 10.5576L12.001 13.0653L18.9346 6.15666C19.2281 5.8643 19.7029 5.86516 19.9953 6.15858Z" fill="#69737B"/> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'lg'" [dim]="true" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.429 5.64512C14.9454 4.61045 13.1467 4.12727 11.3444 4.27925C9.54208 4.43124 7.84969 5.20882 6.56036 6.47731C5.27103 7.7458 4.46599 9.42531 4.28466 11.2249C4.10334 13.0245 4.55716 14.8308 5.56752 16.331C6.57788 17.8313 8.08113 18.9308 9.8169 19.4393C11.5527 19.9478 13.4116 19.8331 15.0717 19.1152C16.7319 18.3973 18.0886 17.1213 18.907 15.5084C19.7253 13.8954 19.9538 12.0469 19.5527 10.2833C19.4608 9.87936 19.7138 9.47748 20.1177 9.38562C20.5216 9.29377 20.9235 9.54673 21.0153 9.95064C21.494 12.0557 21.2214 14.2619 20.2447 16.187C19.2679 18.1122 17.6486 19.6351 15.6671 20.492C13.6857 21.3489 11.4669 21.4857 9.39522 20.8788C7.32349 20.2719 5.52928 18.9595 4.32337 17.169C3.11746 15.3784 2.5758 13.2224 2.79222 11.0745C3.00864 8.92662 3.9695 6.92206 5.50837 5.40805C7.04725 3.89404 9.0672 2.96596 11.2183 2.78456C13.3695 2.60316 15.5163 3.17986 17.287 4.41478C17.6268 4.65173 17.7101 5.11924 17.4732 5.45898C17.2362 5.79873 16.7687 5.88207 16.429 5.64512ZM19.9953 6.15858C20.2877 6.45201 20.2868 6.92688 19.9934 7.21924L12.5294 14.6562C12.2363 14.9482 11.7622 14.9478 11.4697 14.6553L8.43267 11.6183C8.13977 11.3254 8.13977 10.8505 8.43267 10.5576C8.72556 10.2647 9.20043 10.2647 9.49333 10.5576L12.001 13.0653L18.9346 6.15666C19.2281 5.8643 19.7029 5.86516 19.9953 6.15858Z" fill="#69737B"/> </svg></dbs-floating-action-button>
  </div>
Copy
API Reference

Hide code
<div [style.display]="'flex'" [style.gap.px]="16" [style.flex-wrap]="'wrap'" [style.align-items]="'center'">
    <dbs-floating-action-button  [size]="'xs'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'sm'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button   ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
    <dbs-floating-action-button  [size]="'lg'" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></dbs-floating-action-button>
  </div>
Copy
Name	Description	Default	
Control
Hide slots items
slots
Hide slots items
(default)	
The button's main content. The SVG element should go here.
HTMLElement
-	
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16_1175)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.8232 14.7626 18.8232 15.2374 18.5303 15.5303C18.2374 15.8232 17.7626 15.8232 17.4697 15.5303L12 10.0607L6.53033 15.5303C6.23744 15.8232 5.76256 15.8232 5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L11.4697 8.46967Z" fill="#69737B"/> </g> <defs> <clipPath id="clip0_16_1175"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg>
Hide inputs items
inputs
Hide inputs items
dim	
Converts the colours for use against dark backgrounds, regardless of theme polarity.

boolean
false
disabled	
Disables the button.

boolean
false
iconName	
The icon of the button.

""
size	
The size of the button.

"xs"
"sm"
"md"
"lg"
md

xs

sm

md

lg

# Icon Button

Icon Button
Usage
Import DbsIconButtonComponent into your component or module.

import { DbsIconButtonComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsIconButtonComponent],
})
Copy
Stories
Basic

Hide code
<dbs-icon-button   ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Standard
When [variant]="'standard'"

Hide code
<dbs-icon-button [variant]="variant"  ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Outline
When [variant]="'outline'"

Hide code
<dbs-icon-button [variant]="variant"  ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Circle
When [variant]="'circle'"

Hide code
<dbs-icon-button [variant]="variant"  ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Sizes

Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-icon-button size='xs' >
    <svg-icon iconName='close'></svg-icon>
  </dbs-icon-button>
  <dbs-icon-button  [size]="'xs'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
  <dbs-icon-button size='sm' >
    <svg-icon iconName='close'></svg-icon>
  </dbs-icon-button>
  <dbs-icon-button  [size]="'sm'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
  <dbs-icon-button size='md' >
    <svg-icon iconName='close'></svg-icon>
  </dbs-icon-button>
  <dbs-icon-button  [size]="'md'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
  <dbs-icon-button size='lg' >
    <svg-icon iconName='close'></svg-icon>
  </dbs-icon-button>
  <dbs-icon-button  [size]="'lg'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
</div>
Copy
Disabled

Hide code
<dbs-icon-button [disabled]="disabled"  ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Dim

Hide code
<div [style.display]="'flex'" [style.gap.px]="8" [style.flex-wrap]="'wrap'">
  <dbs-icon-button [dim]="dim" [variant]="'standard'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
  <dbs-icon-button [dim]="dim" [variant]="'outline'" ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
</div>
Copy
Bound Standard
Start of a line of text

Hide code
<p>Start of a line of text</p>
<dbs-icon-button [variant]="variant" [bound]="bound"  ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
API Reference

Hide code
<dbs-icon-button   ><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg></dbs-icon-button>
Copy
Name	Description	Default	
Control
Hide slots items
slots
Hide slots items
(default)	
The button's main content. The SVG element should go here.
HTMLElement
-	
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" name="IconChevronRight"><g clip-path="url(#prefix__clip0_16_1101)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z" fill="currentColor"></path></g><defs><clipPath id="prefix__clip0_16_1101"><path d="M0 0h24v24H0z" fill="currentColor"></path></clipPath></defs></svg>
Hide inputs items
inputs
Hide inputs items
bound	
(standard variant only) Applies negative margin to the button. Primarily used for achieving optical alignment with other UI elements.

boolean
false
dim	
Converts the colours for use against dark backgrounds, regardless of theme polarity.

boolean
false
disabled	
Disables the button.

boolean
false
size	
The size of the button.

"xs"
"sm"
"md"
"lg"
md

xs

sm

md

lg
variant	
The icon button style.

"standard"
"outline"
"circle"
standard

standard

outline

circle

# Card BUTTON
Card Button
The Card Button component provides a card-like button that can contain an icon, title, subtitle, and custom content. It's designed to be used as a navigational or action element with prominent visual treatment, along side dbs-card.

Usage
Import DbsCardButtonComponent into your component or module.

import { DbsCardButtonComponent } from '@dbs-angular/core';

@Component({
  ...
  standalone: true,
  imports: [DbsCardButtonComponent],
})
Copy
Stories
Basic

Card Button Title
Card Button Subtitle
Hide code
<dbs-card-button  [title]="'Card Button Title'" [subtitle]="'Card Button Subtitle'" ><svg-icon iconName="plus-circle" iconSlot></svg-icon></dbs-card-button>
Copy
With Title Only

Card Button Title
Hide code
<dbs-card-button  [title]="'Card Button Title'" ></dbs-card-button>
Copy
With Subtitle Only

Card Button Subtitle
Hide code
<dbs-card-button  [subtitle]="'Card Button Subtitle'" ></dbs-card-button>
Copy
With Custom Content

Custom content goes here
Hide code
<dbs-card-button   ><svg-icon iconName="plus-circle" iconSlot></svg-icon><div>Custom content goes here</div></dbs-card-button>
Copy
With Slots

Custom Title with formatting
Custom Subtitle with formatting
Hide code
<dbs-card-button   ><svg-icon iconName="plus-circle" iconSlot></svg-icon><span titleSlot><strong>Custom Title</strong> with formatting</span><span subtitleSlot>Custom <em>Subtitle</em> with formatting</span></dbs-card-button>
Copy
With Mixed Inputs And Slots

Regular Title
Custom Subtitle with formatting
Hide code
<dbs-card-button  [title]="'Regular Title'" ><span subtitleSlot>Custom <em>Subtitle</em> with formatting</span><svg-icon iconName="plus-circle" iconSlot></svg-icon></dbs-card-button>
Copy
API Reference

Card Button Title
Card Button Subtitle
Hide code
<dbs-card-button [title]="title" [subtitle]="subtitle"  ><svg-icon iconName="plus-circle" iconSlot></svg-icon></dbs-card-button>
Copy
Name	Description	Default	
Control
Hide slots items
slots
Hide slots items
iconSlot	
Icon content that goes before the text
HTMLElement
-	
<svg-icon iconName="plus-circle" iconSlot></svg-icon>
(default)	
Content to display after the title and subtitle
HTMLElement
-	
titleSlot	
Custom title content (alternative to title input)
HTMLElement
-	
subtitleSlot	
Custom subtitle content (alternative to subtitle input)
HTMLElement
-	
Hide inputs items
inputs
Hide inputs items
title	
The title text to display.

string
""
Card Button Title
subtitle	
The subtitle text to display.

string
""
Card Button Subtitle
disabled	
Disables the button.

boolean
false

```