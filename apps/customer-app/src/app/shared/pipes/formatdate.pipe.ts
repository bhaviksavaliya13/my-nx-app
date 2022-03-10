import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(value: any) {
    const datePipe = new DatePipe("en-US") || undefined;
    value = datePipe.transform(value, 'dd-MMM-yyyy') || undefined;
    return value;
  }

}
