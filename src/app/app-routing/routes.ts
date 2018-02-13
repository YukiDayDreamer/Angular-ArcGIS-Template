import { Routes } from '@angular/router';

import { MapComponent } from '../map/map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },  // default path
  { path: 'map', component: MapComponent }
];
