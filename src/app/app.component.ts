import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'directive-demo';

  pipevar: string = "";

  punctuationValue: string = ".";

  observable?: Observable<number>;

  numberFromObservable?: number;

  subscription?: Subscription;

  ngOnInit() {
    this.observable = new Observable(observer => {
      let value = 0
      const interval = setInterval(() => {
        observer.next(value);
        value++
      }, 1000)
    })

    this.subscribeMethod();
  }

  subscribeMethod() {
    this.subscription = this.observable?.subscribe(res => {
      this.numberFromObservable = res;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
