# np-color-picker component

````
Angular 8 UI Component
Example given in github repository.
````

### [Demo](https://stackblitz.com/edit/np-ui-color-picker)

````
<np-color-picker [value]="currentColor" (onChange)="onColorSelect($event)"></np-color-picker>
````

### Properties
````
1.  value : string
    Selected color variable

2.  disabled
    true/false - set component disabled

3.  defaultOpen
    true/false
    default open or not. 

4.  iconCss
    give class to show icon in color picker.   

5.  colors
    list of pre defined colors, if not pass this variable, default color list will be displayed.
    data type is array of string. 
````

## Methods
````
1.  onChange
    on change event binding
````