import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appVideo]'
})
export class VideoDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseover() {
    this.el.nativeElement.play()
  }

  @HostListener('mouseout')
  onMouseout() {
    this.el.nativeElement.pause();
  }

}
