import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]',
  host:{
    '[style.padding]': '".3em 0"',
    '[style.color]': '"#ffffff"',
  }
})
export class HighlightDirective implements OnInit{

  @Input()
  backgroundColor: string = 'rgb(217 163 0)';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;

  }

}
