import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      console.log('contador -->', contador);
      this.contador = contador;
    });
  }

  multi() {
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }

  divide() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }

  updatePadre(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
