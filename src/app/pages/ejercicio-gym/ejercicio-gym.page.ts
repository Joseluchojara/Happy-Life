import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-gym',
  templateUrl: './ejercicio-gym.page.html',
  styleUrls: ['./ejercicio-gym.page.scss'],
})
export class EjercicioGymPage  {

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed:',e);
  }

}