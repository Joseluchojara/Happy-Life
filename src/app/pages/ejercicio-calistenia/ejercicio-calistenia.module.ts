import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioCalisteniaPageRoutingModule } from './ejercicio-calistenia-routing.module';

import { EjercicioCalisteniaPage } from './ejercicio-calistenia.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioCalisteniaPageRoutingModule
  ],
  declarations: [EjercicioCalisteniaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EjercicioCalisteniaPageModule {}
