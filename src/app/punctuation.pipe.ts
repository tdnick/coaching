import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'punctuation'
})
export class PunctuationPipe implements PipeTransform {

  transform(value: string, sign = '.'): string {
    return value ? value + sign : value;
  }

}
