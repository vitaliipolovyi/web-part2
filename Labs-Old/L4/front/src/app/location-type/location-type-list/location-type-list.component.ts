import { Component, OnInit } from '@angular/core';
import { LocationTypeService } from '../../location-type.service';
import { LocationType } from '../../location-type.model';

@Component({
  selector: 'app-location-type-list',
  templateUrl: './location-type-list.component.html',
  styleUrls: ['./location-type-list.component.scss']
})
export class LocationTypeListComponent implements OnInit {
  locationTypes: LocationType[];

  constructor(private locationTypeService: LocationTypeService) { }

  ngOnInit() {
    this.getLocationTypes();
  }

  getLocationTypes() {
    this.locationTypeService.getLocationTypes()
      .subscribe(locationTypes => this.locationTypes = locationTypes);
  }
}
