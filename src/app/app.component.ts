import { Component } from '@angular/core';
import { Libro } from './model/libro';
import { LIBROS } from './model/constantes';
import { RecuentoService } from './services/recuento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  libros: Array<Libro>;
  lSeleccionado: any;
  busqueda: string;

  constructor(private recuentoService: RecuentoService) {
    console.log('AppComponent constructor');

    this.libros = [];
    this.lSeleccionado = '';
    this.busqueda = '';

  }// AppComponent constructor

  ngOnInit() {
    console.log('AppComponent ngOnInit');

    this.libros = LIBROS;

  }// AppComponent ngOnInit

  seleccionarLibro = function (libro) {
    console.log("seleccionarLibro( isbn: " + libro.isbn + ", title: " + libro.title + " )");

    this.lSeleccionado = libro;

  }// seleccionarLibro

}// AppComponent
