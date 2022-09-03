import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {

  private elementSelected = false;

  @Input()
  dynamicClass = ''

  constructor(private el: ElementRef) { }

  @HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add(this.dynamicClass)
    } else {
      this.el.nativeElement.classList.remove(this.dynamicClass)
    }
  }
}
