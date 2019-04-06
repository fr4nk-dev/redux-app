import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redux';
  contador: number;
  constructor() {
    this.contador = 10;
  }

  add() {
    this.contador++;
  }

  minus() {
    this.contador--;
  }
}
