import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libroFiltro'
})
export class LibroPipe implements PipeTransform {

  /**
    * filtro para filtrar por title de libro
    * @param recetas: array de libros
    * @param busqueda: cadena de texto a filtrar
    */
  transform(libros: any, busqueda: string): any {

    let resultado = libros;

    console.debug('busqueda ', busqueda);

    // filtrar title libro
    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter((el) => {
        console.log('resultado.filter()')
        const encontrar = (el.title + '$' + el.isbn).toLowerCase(); // simbolos para que no se junten palabras
        return encontrar.includes(busqueda);
      });

    }

    return resultado;
  }// transform

}// libroFiltro