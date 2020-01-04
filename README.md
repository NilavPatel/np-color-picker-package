# np-ui-color-picker
Color picker for Angular 8 and 8+

## [Demo](https://stackblitz.com/edit/np-ui-color-picker)

## NPM
````
npm i np-ui-color-picker
````

## HTML
````
<np-ui-color-picker [value]="currentColor" (onChange)="onColorSelect($event)"></np-ui-color-picker>
````

## Properties
````
1.  value : string
    Selected color variable for two way binding.

2.  disabled : boolean
    set component is disabled or not.

3.  defaultOpen : boolean
    Set color picker by default open or not. 

4.  colors : string[]
    List of pre defined colors, if not passed this variable, default color list will be displayed.

5.  isOkButton : boolean
    If set to true then Ok button will be visible, and color picker will be only closed on click of Ok button. 
    It's default value is false.

6.  placeholder : string
    set placeholder for color picker

7.  hideColorInput
    hide color input box, only show seleced color block
````

## Apis
````
1.  getSelectedHEX()
    get selected color in HEX format

2.  getSelectedRGB()
    get selected color in RGB format
````

## Methods
````
1.  onChange()
    on change event binding
````

## All np-ui packages for Angular
1. [Data grid](https://www.npmjs.com/package/np-ui-data-grid)
2. [Date picker](https://www.npmjs.com/package/np-ui-date-picker)
3. [Time picker](https://www.npmjs.com/package/np-ui-time-picker)
4. [Color picker](https://www.npmjs.com/package/np-ui-color-picker)

<img src="https://raw.githubusercontent.com/NilavPatel/nilavpatel.github.io/master/images/logo-large.png" width="300" height="80">