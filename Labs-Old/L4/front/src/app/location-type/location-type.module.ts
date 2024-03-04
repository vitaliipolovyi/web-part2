import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationTypeRoutingModule } from './location-type-routing.module';
import { LocationTypeComponent } from './location-type.component';
import { LocationTypeListComponent } from './location-type-list/location-type-list.component';

@NgModule({
  declarations: [
    LocationTypeComponent,
    LocationTypeListComponent
  ],
  imports: [
    CommonModule,
    LocationTypeRoutingModule
  ]
})
export class LocationTypeModule { }
