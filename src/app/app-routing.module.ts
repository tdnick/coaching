import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { MobileFirstComponent } from './mobile-first/mobile-first.component';

const routes: Routes = [
  {path: 'observable-promise', component: ObservablePromiseComponent},
  {path: 'rxjs', component: RxjsOperatorsComponent},
  {path: 'cva', component: ControlValueAccessorComponent},
  {path: 'scss', component: MobileFirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
