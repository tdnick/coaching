import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFilter]'
})
export class InputFilterDirective {

  constructor(private elRef: ElementRef) {}

   @HostListener('keypress', ['$event']) 
   public onKeypress(event: KeyboardEvent): void {
    if (!/^[0-9]$/i.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('keyup', ['$event'])
  public onKeyup(event: KeyboardEvent): void {
    console.log(event);
    if (this.elRef.nativeElement.value.charAt(0) === '0') {
      // this.elRef.nativeElement.value = this.elRef.nativeElement.value.substring(1);
      event.preventDefault();
      
    }
  }

}
