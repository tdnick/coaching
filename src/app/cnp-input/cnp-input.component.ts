import { Component, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-cnp-input',
  templateUrl: './cnp-input.component.html',
  styleUrls: ['./cnp-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CNPInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CNPInputComponent
    }
  ]
})
export class CNPInputComponent implements ControlValueAccessor, Validator {

  phoneNumber = '';
  touched = false;

  onValidationChange = () => {}

  constructor() {}

  //luat de pe net
  validCNP( p_cnp: string ): boolean {
    var i=0 , year=0 , hashResult=0 , cnp=[] , hashTable=[2,7,9,1,4,6,3,5,8,2,7,9];
    if( p_cnp.length !== 13 ) { return false; }
    for( i=0 ; i<13 ; i++ ) {
        cnp[i] = parseInt( p_cnp.charAt(i) , 10 );
        if( isNaN( cnp[i] ) ) { return false; }
        if( i < 12 ) { hashResult = hashResult + ( cnp[i] * hashTable[i] ); }
    }
    hashResult = hashResult % 11;
    if( hashResult === 10 ) { hashResult = 1; }
    year = (cnp[1]*10)+cnp[2];
    switch( cnp[0] ) {
        case 1  : case 2 : { year += 1900; } break;
        case 3  : case 4 : { year += 1800; } break;
        case 5  : case 6 : { year += 2000; } break;
        case 7  : case 8 : case 9 : { year += 2000; if( year > ( new Date().getFullYear() - 14 ) ) { year -= 100; } } break;
        default : { return false; }
    }
    if( year < 1800 || year > 2099 ) { return false; }
    return ( cnp[12] === hashResult );
  }

  onChange = (cnp: any) => {
    this.markAsTouched();
    this.onValidationChange();
  };
  
  onTouched = () => {};

  writeValue(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const phoneNumber = control.value;

    if (!this.validCNP(phoneNumber)) {
      return {
        valid: {
          phoneNumber
        }
      }
    }

    return null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidationChange = fn;
  }

}
