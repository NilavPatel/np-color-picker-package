# np-color-picker component

![image login](https://github.com/NilavPatel/np-color-picker-package/blob/master/src/assets/images/image1.PNG)

````
Angular 8 UI Component
````

````
<np-color-picker [value]="currentColor2" [colorList]="colorList" (onChange)="onColorSelect($event)"></np-color-picker>
````

### Properties
````
1.  value : string
    Selected color variable

2.  colorList : string[]
    array of string, list of colors to available

3.  disabled
    true/false - set component disabled

4.  defaultOpen
    true/false
    default open or not.    

5.  height
    string value like '200px', default is '120px'

6.  width
    string value like '200px', default is '200px'
````

## Methods
````
1.  onChange
    on change event binding
````