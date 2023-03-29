import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/screens/home/home.component";
import {FavoritesComponent} from "./components/screens/favorites/favorites.component";
import {ProfileComponent} from "./components/screens/profile/profile.component";
import {SaleComponent} from "./components/screens/sale/sale.component";

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
