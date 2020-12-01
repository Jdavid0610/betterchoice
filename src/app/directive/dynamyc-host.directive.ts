import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[boxHost]'
})
export class DynamycHostDirective {
  public hi="hoa";
  constructor(public viewContainerRef: ViewContainerRef) { }

}
