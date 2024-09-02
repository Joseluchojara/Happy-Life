import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-calistenia',
  templateUrl: './ejercicio-calistenia.page.html',
  styleUrls: ['./ejercicio-calistenia.page.scss'],
})
export class EjercicioCalisteniaPage implements OnInit {
  Dias = []; // Cambia de 'Dia' a 'Dias'

  ngOnInit() {
    for (let i = 1; i < 8; i++) {
      this.Dias.push(`Dia ${i}`);
    }
  }
}
