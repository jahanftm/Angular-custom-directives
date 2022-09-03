import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[toolTip]',
  host: {
    '[style.background-color]': '"white"',
    '[style.color]': '"#4c4c4c"',
    '[style.white-space:]': '"nowrap"',
    '[style.width]': '"auto"',
    '[style.text-align]': '"center"',
    '[style.border-radius]': '"6px"',
    '[style.padding]': '"5px"',
    '[style.position]': '"absolute"',
    '[style.z-index]': '"1"',
    '[style.bottom]': '"0"',
    '[style.top]': '"50%"',
    '[style.left]': '"50%"',
    '[style.transform]': '"translate(-50%, 0)"',
    '[style.opacity]': '"0"',
    '[style.transition]': '"opacity 0.2s"',
    '[style.border]': '"1px solid #cccccc"',
    '[style.height]': '"20px"',
    '[style.visibility]': '"hidden"',
  }
})
export class TooltipDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.parentNode.style.position = 'relative';
    this.el.nativeElement.parentNode.addEventListener("mouseover", () => {
      this.el.nativeElement.style.visibility = 'visible';
      this.el.nativeElement.style.opacity = '1';
    });

    this.el.nativeElement.parentNode.addEventListener("mouseout", () => {
      this.el.nativeElement.style.visibility = 'hidden';
      this.el.nativeElement.style.opacity = '0';
    });

}

}
