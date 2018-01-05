/**
 * @isoden/ngx-unless - An Angular module to add unless syntax to template.
 *
 * https://github.com/isoden/ngx-unless
 *
 * Copyright (c) 2018 Yu Isoda
 * Licensed under the MIT license. https://isoden.mit-license.org
 */

import { NgModule } from '@angular/core';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    UnlessDirective,
  ],
  exports: [
    UnlessDirective,
  ],
})
export class UnlessModule { }
