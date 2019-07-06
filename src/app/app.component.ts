import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentColor: string;
  currentColor1: string = "#00FF00";
  currentColor2: string;
  colorList: string[] = ['#FFFFFF', '#000000', '#ff0000', '#ff4000', '#ff8000'];
  title = 'np-color-picker-package';

  onColorSelect(value:string) {
    alert("selected color is " + value)
  }
}
