import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[expandableRowHost]',
})
export class ExpandableRowDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
