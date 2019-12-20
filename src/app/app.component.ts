import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'np-ui-color-picker-package';

  currentColor1: string;
  currentColor2: string;
  currentColor3: string;
  currentColor4: string;
  currentColor5: string;
  currentColor6: string;

  existingColors = ['#FFFFFF',
    '#C0C0C0',
    '#808080',
    '#000000'];

  onColorSelect(value: string) {
    alert("Selected Color is " + value);
  }

  setBlackColor() {
    this.currentColor3 = "#000000"
  }
}
