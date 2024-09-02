import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioCalisteniaPage } from './ejercicio-calistenia.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioCalisteniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioCalisteniaPageRoutingModule {}
