import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';

@Pipe({
  name: 'dateCalculation'
  // pure: true
})
export class DateCalculationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const periods = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let calculator;
      for (const i in periods){
        calculator = Math.floor(seconds/periods[i]);
        if (calculator > 0)
        if (calculator === 1){
          return calculator + ' ' + i + 'ago';
        }else{
          return calculator + ' ' + i + 's ago';
        }
      }
    }
    return value;
  }

}
