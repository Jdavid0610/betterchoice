import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[boxHost]'
})
export class DynamycHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
