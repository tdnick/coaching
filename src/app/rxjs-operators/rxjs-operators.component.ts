import { Component, OnInit } from '@angular/core';
import { of, forkJoin, combineLatest, merge, interval, Observable, Subscription, takeUntil, take, delay } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getDataAsItIsUpdated();
    this.getDataWhenAllComplete();
    this.getDataMerged();
  }

  obs1 = of('a', 'b', 'c');
  obs2 = of(4, 5);
  obs3 = interval(2000);

  combineSub: Subscription = new Subscription;
  mergeSub: Subscription = new Subscription;

  forkResponses: string[] = [];
  combineResponses: string[] = [];
  mergeResponses: string[] = [];

  getDataWhenAllComplete() {
    forkJoin({
      data1: this.obs1,
      data2: this.obs3.pipe(take(3))
    }).subscribe(res => this.forkResponses.push(JSON.stringify(res)));
  }

  getDataAsItIsUpdated() {
    this.combineSub = combineLatest({
      data1: this.obs1,
      data2: this.obs3
    }).subscribe(res => this.combineResponses.push(JSON.stringify(res)));
  }

  getDataMerged() {
    this.mergeSub = merge(
      this.obs1.pipe(delay(700)), this.obs2.pipe(delay(500)), this.obs3
    ).subscribe(res => this.mergeResponses.push(JSON.stringify(res)));
  }

  combineUnsub() {
    this.combineSub.unsubscribe();
  }

  mergeUnsub() {
    this.mergeSub.unsubscribe();
  }

}
