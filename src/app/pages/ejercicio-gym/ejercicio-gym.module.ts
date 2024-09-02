import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioGymPageRoutingModule } from './ejercicio-gym-routing.module';

import { EjercicioGymPage } from './ejercicio-gym.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    EjercicioGymPageRoutingModule
  ],
  declarations: [EjercicioGymPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EjercicioGymPageModule {}
