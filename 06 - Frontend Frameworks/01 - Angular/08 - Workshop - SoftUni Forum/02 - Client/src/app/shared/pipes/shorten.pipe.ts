import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    return value.length > limit ?
      `${value.slice(0, limit)}...` : value;
  }
}
