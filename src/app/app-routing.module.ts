import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';

const routes: Routes = [
  {path: 'observable-promise', component: ObservablePromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
