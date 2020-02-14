import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuentoService {

  private recuento: number;

  constructor() {

    this.recuento = 0;
  }

  setRecuento(recuento: number): void {
    this.recuento = recuento;
  }

  getRecuento(): number {
    return this.recuento;
  }

}
