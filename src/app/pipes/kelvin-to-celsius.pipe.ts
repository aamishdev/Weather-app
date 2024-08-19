import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
})
export class KelvinToCelsiusPipe implements PipeTransform {
 transform(value: number) {
    if (value === undefined || value === null) return null;
    return (value - 273.15).toFixed(0);
  }

}
