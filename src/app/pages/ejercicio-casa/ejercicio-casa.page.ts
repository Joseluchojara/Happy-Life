import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-casa',
  templateUrl: './ejercicio-casa.page.html',
  styleUrls: ['./ejercicio-casa.page.scss'],
})
export class EjercicioCasaPage  {
  Dias = []; 

  ngOnInit() {
    for (let i = 1; i < 8; i++) {
      this.Dias.push(`Dia ${i}`);
    }
  }
}
