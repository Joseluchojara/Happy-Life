import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioCasaPage } from './ejercicio-casa.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioCasaPageRoutingModule {}
