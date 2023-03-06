import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { PhoneNumberInputComponent } from '../phone-number-input/phone-number-input.component';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss']
})
export class ControlValueAccessorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['']
  });

  ngOnInit(): void {
  }

}
