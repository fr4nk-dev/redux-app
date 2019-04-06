import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { DecrementarAction, IncrementarAction } from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux';
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(contador => {
      // console.log(state);
      this.contador = contador;
    });
  }

  add() {
    // this.contador++;
    const accion = new IncrementarAction();

    this.store.dispatch(accion);
  }

  minus() {
    // this.contador--;
    const accion = new DecrementarAction();

    this.store.dispatch(accion);
  }
}
