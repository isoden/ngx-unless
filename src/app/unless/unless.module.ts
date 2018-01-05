import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UnlessDirective,
  ],
  exports: [
    UnlessDirective,
  ]
})
export class UnlessModule { }
