import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjerciciosPageRoutingModule } from './ejercicios-routing.module';

import { EjerciciosPage } from './ejercicios.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciciosPageRoutingModule
  ],
  declarations: [EjerciciosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EjerciciosPageModule {}
