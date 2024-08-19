import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeedConverter',
})
export class WindSpeedConverterPipe implements PipeTransform {
  transform(value: number) {
    if (value === undefined || value === null) return null;
    return (value * 3.6).toFixed(0);
  }
}
