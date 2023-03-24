import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { CNPInputComponent } from '../cnp-input/cnp-input.component';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss']
})
export class ControlValueAccessorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', Validators.required],
    phoneNumber: ['']
  });

  ngOnInit(): void {
  }

}
