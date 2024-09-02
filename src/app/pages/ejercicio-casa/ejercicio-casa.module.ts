import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioCasaPageRoutingModule } from './ejercicio-casa-routing.module';

import { EjercicioCasaPage } from './ejercicio-casa.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioCasaPageRoutingModule
  ],
  declarations: [EjercicioCasaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EjercicioCasaPageModule {}
