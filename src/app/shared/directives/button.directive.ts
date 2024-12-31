import { AfterViewInit, Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective implements AfterViewInit {
  @HostBinding("class.valid") get valid(){return true;}
  constructor() { }
  temp = input<string>("");
  ngAfterViewInit(): void {
    console.log(this.temp)
  }
  ngOnInit(){
    console.log(this.temp)
    console.log(this.valid)
  }

}
