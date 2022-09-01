import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-test',
  templateUrl: './async-test.component.html',
  styleUrls: ['./async-test.component.scss']
})
export class AsyncTestComponent implements OnInit {

  constructor() { }

  @Input() value!: any;

  ngOnInit(): void {
  }

}
