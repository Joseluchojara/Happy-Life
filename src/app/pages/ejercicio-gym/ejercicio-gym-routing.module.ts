import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioGymPage } from './ejercicio-gym.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioGymPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioGymPageRoutingModule {}
