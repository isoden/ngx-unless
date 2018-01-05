import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class UnlessDirective {
  @Input()
  set ngxUnless(condition: any) {
    if (Boolean(condition)) {
      this.viewContainerRef.clear();
      return;
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

}
