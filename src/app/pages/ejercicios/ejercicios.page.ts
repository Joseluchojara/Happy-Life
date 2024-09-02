import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed:',e);
  }

}