import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[hover]',
  host:{
    '[style.color:]': '"#a96de0"',
  }
})
export class HoverDirective implements OnInit {


  @Input()
  backgroundColor = '#fff';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.boxShadow = 'inset 200px 0 0 0 #a96de0';
    this.el.nativeElement.style.transition = 'color .3s ease-in-out, box-shadow .3s ease-in-out';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.color = '#a96de0';
    this.el.nativeElement.style.boxShadow = 'inset 0 0 0 0 #a96de0';
  }

}
