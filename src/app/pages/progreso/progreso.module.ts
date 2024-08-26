import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoPageRoutingModule } from './progreso-routing.module';

import { ProgresoPage } from './progreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoPageRoutingModule
  ],
  declarations: [ProgresoPage]
})
export class ProgresoPageModule {}
