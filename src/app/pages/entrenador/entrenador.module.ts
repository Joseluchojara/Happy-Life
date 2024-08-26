import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenadorPageRoutingModule } from './entrenador-routing.module';

import { EntrenadorPage } from './entrenador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenadorPageRoutingModule
  ],
  declarations: [EntrenadorPage]
})
export class EntrenadorPageModule {}
