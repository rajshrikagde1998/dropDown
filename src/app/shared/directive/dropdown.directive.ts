import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(public er :ElementRef) { }

@HostListener("click",['$event'])
Onclick(eve:Event){
let res = (eve.target as HTMLElement)
let res1 = res.nextElementSibling?.classList.toggle("show")  
}

}
