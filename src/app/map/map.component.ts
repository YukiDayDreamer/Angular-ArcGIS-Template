import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  webmap: any = null;
  view: any = null;

  constructor() { }

  ngOnInit() {
    this.initMap(loadModules);
  }

  initMap(loadModules: any): void {
    // first, we use Dojo's loader to require the map class
    loadModules(['esri/views/MapView', 'esri/WebMap'])
      .then(([MapView, WebMap]) => {
        // then we load a web map from an id
        let webmap = new WebMap({
          portalItem: { // autocasts as new PortalItem()
            id: 'f2e9b762544945f390ca4ac3671cfa72'
          }
        });
        // and we show that map in a container w/ id #viewDiv
        let view = new MapView({
          map: webmap,
          container: 'viewDiv'
        });
      })
      .catch(err => {
        // handle any errors
        console.error(err);
      });
  }

}
