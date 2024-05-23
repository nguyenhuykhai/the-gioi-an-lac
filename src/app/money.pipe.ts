import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number') {
      return value;
    }
    // Format the number with thousand separators
    const formattedValue = value.toLocaleString('vi-VN');
    // Append the currency symbol
    return `${formattedValue} VNĐ`;
  }

}
