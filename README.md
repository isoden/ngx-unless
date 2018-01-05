# ngx-unless

An Angular module to add unless syntax to template.

## Installation

```console
npm install @isoden/ngx-unless
```

## Usage

1. Import `UnlessModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnlessModule } from '@isoden/ngx-unless';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnlessModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Use directive

```html
<div *ngxUnless="false">unless is working!</div>
```

## License

[MIT License](https://isoden.mit-license.org/)
