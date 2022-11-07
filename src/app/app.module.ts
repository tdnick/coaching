import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstUpperCasePipe } from './first-upper-case.pipe';
import { InputFilterDirective } from './input-filter.directive';
import { PunctuationPipe } from './punctuation.pipe';
import { AsyncTestComponent } from './async-test/async-test.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFilterDirective,
    FirstUpperCasePipe,
    PunctuationPipe,
    AsyncTestComponent,
    ObservablePromiseComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
