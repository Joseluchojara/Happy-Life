import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenadorPage } from './entrenador.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenadorPageRoutingModule {}
