import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstUpperCasePipe } from './first-upper-case.pipe';
import { InputFilterDirective } from './input-filter.directive';
import { PunctuationPipe } from './punctuation.pipe';
import { AsyncTestComponent } from './async-test/async-test.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFilterDirective,
    FirstUpperCasePipe,
    PunctuationPipe,
    AsyncTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
