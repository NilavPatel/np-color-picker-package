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
  
  onColorSelect(value: string) {
    alert("selected color is " + value);
  }

  setBlackColor() {
    this.currentColor2 = "#000000"
  }
}
