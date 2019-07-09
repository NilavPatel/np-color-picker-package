import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'np-color-picker-package';

  currentColor: string;
  currentColor1: string = "#00FF00";
  currentColor2: string;
  currentColor3: string;
  colorList2: string[] = ['#FFFFFF', '#000000', '#ff0000', '#ff4000', '#ff8000'];

  onColorSelect(value: string) {
    alert("selected color is " + value);
  }

  setBlackColor() {
    this.currentColor2 = "#000000"
  }
}
