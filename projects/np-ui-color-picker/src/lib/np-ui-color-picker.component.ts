import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, HostListener, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'np-ui-color-picker',
  templateUrl: 'np-ui-color-picker.component.html',
  styleUrls: ['np-ui-color-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NpUiColorPickerComponent implements OnInit {

  _value: string;
  _isOpen: boolean = false;
  _stripColor: string = "#0000ff";
  _currentCursorColor: string = "";
  _colors: string[];
  _isStripLoaded: boolean = false;
  _x: string = '0px';
  _y: string = '0px';
  _isShowCursorDiv: boolean = false;

  @Input() value: string;
  @Input() defaultOpen: boolean;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean;
  @Input() iconCss: string;
  @Input() colors: string[];
  @Input() placeholder: string = "";
  @Input() hideColorInput: boolean;
  @Input() required: boolean = false;
  @Input() name: string = "";

  @ViewChild('colorpickerinput') input: ElementRef;

  constructor(private elRef: ElementRef) {
    this._colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688',
      '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b', '#ccccccff'];
  }

  @HostListener('document:click', ['$event'])
  clickOutSide(event: any) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this._close();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.defaultOpen) {
      this._updateStripCanvas();
      this._updateCanvas();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value != undefined && changes.value.currentValue != this._value) {
      this._value = changes.value.currentValue;
      this._currentCursorColor = changes.value.currentValue;
      this._stripColor = changes.value.currentValue;
    }
    if (changes.colors) {
      this._colors = this.colors;
    }
  }

  _toggleColorPicker() {
    if (this.disabled) {
      return;
    }
    this._isOpen = !this._isOpen;
    if (this._isOpen) {
      this.input.nativeElement.focus();
      setTimeout(() => {
        this._updateStripCanvas();
        this._updateCanvas();
      }, 10);
    }
  }

  _open() {
    if (this.defaultOpen == true) {
      return;
    }
    this.input.nativeElement.focus();
    this._isOpen = true;
    setTimeout(() => {
      this._updateStripCanvas();
      this._updateCanvas();
    }, 10);
  }

  _close() {
    if (this.defaultOpen == true) {
      return;
    }
    this._isShowCursorDiv = false;
    this._isOpen = false;
  }

  _onInputChange() {
    if (this._value && this._value != null && this._value.length > 0 && !this._value.includes('#')) {
      this._value = "#" + this._value;
    }
    this.value = this._value;
    this._currentCursorColor = this._value;
    this._stripColor = this._value;
    this.valueChange.emit(this._value);
    this.onChange.emit(this._value);
  }

  _updateStripCanvas() {
    if (this._isStripLoaded) {
      return;
    }
    var strip = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-strip');
    var ctx2 = strip.getContext('2d');
    ctx2.rect(0, 0, 30, 200);
    var grd1 = ctx2.createLinearGradient(0, 0, 0, 200);
    grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
    grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
    ctx2.fillStyle = grd1;
    ctx2.fill();
  }

  _updateCanvas() {
    var block = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-block');
    var strip = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-strip');
    var ctx1 = block.getContext('2d');
    var ctx2 = strip.getContext('2d');

    ctx1.fillStyle = this._stripColor.length > 0 ? this._stripColor : this.value;
    ctx1.fillRect(0, 0, 200, 200);

    var grdWhite = ctx2.createLinearGradient(0, 0, 200, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1.fillStyle = grdWhite;
    ctx1.fillRect(0, 0, 200, 200);

    var grdBlack = ctx2.createLinearGradient(0, 0, 0, 200);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1.fillStyle = grdBlack;
    ctx1.fillRect(0, 0, 200, 200);
  }

  _clickStrip(e: any, isUpdateColor: boolean) {
    this._isShowCursorDiv = true;
    this._x = (e.pageX + 5) + 'px';
    this._y = (e.pageY + 5) + 'px';
    var strip = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-strip');
    var ctx2 = strip.getContext('2d');
    var x = e.offsetX;
    var y = e.offsetY;
    var imageData = ctx2.getImageData(x, y, 1, 1).data;
    if (isUpdateColor) {
      this._stripColor = this._fullColorHex(imageData[0], imageData[1], imageData[2]);
      this._currentCursorColor = this._stripColor;
      this._updateCanvas();
    } else {
      this._currentCursorColor = this._fullColorHex(imageData[0], imageData[1], imageData[2]);
    }
  }

  _changeColor(e: any, isUpdateColor: boolean) {
    this._isShowCursorDiv = true;
    this._x = (e.pageX + 5) + 'px';
    this._y = (e.pageY + 5) + 'px';
    var block = <HTMLCanvasElement>this.elRef.nativeElement.querySelector('.np-canvas-block');
    var ctx1 = block.getContext('2d');
    var x = e.offsetX;
    var y = e.offsetY;
    var imageData = ctx1.getImageData(x, y, 1, 1).data;
    if (isUpdateColor) {
      this._value = this._fullColorHex(imageData[0], imageData[1], imageData[2]);
      this.value = this._value;
      this._currentCursorColor = this._value;
      this.valueChange.emit(this._value);
      this.onChange.emit(this._value);
    } else {
      this._currentCursorColor = this._fullColorHex(imageData[0], imageData[1], imageData[2]);
    }
  }

  _fullColorHex(r: number, g: number, b: number) {
    var red = this._rgbToHex(r);
    var green = this._rgbToHex(g);
    var blue = this._rgbToHex(b);
    return "#" + red + green + blue;
  };

  _rgbToHex(rgb: number) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  _onMouseLeaveStrip($event: any) {
    this._isShowCursorDiv = false;
    this._currentCursorColor = this._value;
  }

  _onMouseLeaveBlock($event: any) {
    this._isShowCursorDiv = false;
    this._currentCursorColor = this._value;
  }

  _onClickColorBlock(color: string) {
    if (color == undefined || color == null) {
      this.value = null;
      this._value = null;
      this._currentCursorColor = null;
      this.valueChange.emit(null);
      this.onChange.emit(null);
      return;
    }
    this.value = color;
    this._value = color;
    this._currentCursorColor = color;
    this._stripColor = color;
    this.valueChange.emit(color);
    this._updateCanvas();
    this.onChange.emit(color);
  }

  _currentHexToRGB() {
    return this._hexToRgb(this.value);
  }

  _hexToRgb(hexColor) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    var rgb = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    return rgb ? rgb.r + ", " + rgb.g + ", " + rgb.b : "";
  }

  _onOkClick() {
    this._close();
  }

  getSelectedHEX() {
    return this._value;
  }

  getSelectedRGB() {
    return this._hexToRgb(this._value);
  }

  _clear() {
    this._value = null;
    this.value = null;
    this.valueChange.emit(null);
    this._isOpen = false;
  }
}
