import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    console.log("wouwcccccccc");
    if(!arg) return value;
    const resultProductos = [];
    for (const producto of value) {
      console.log("wouwcccccccc");
      if (producto.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProductos.push(producto);
      };
    };
    return resultProductos;
  }
}