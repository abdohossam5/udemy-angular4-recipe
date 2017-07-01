import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') shown = false;

  constructor() {
  }

  @HostListener('click') clickLitener(e: Event) {
    this.shown = !this.shown;
  }
}
