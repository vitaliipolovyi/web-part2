import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationTypeComponent } from './location-type.component';

const routes: Routes = [
  {
    path: 'location-type',
    component: LocationTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationTypeRoutingModule { }
