import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./components/ui/layout/layout.module";
import { ProfileComponent } from './components/screens/profile/profile.component';
import { FavoritesComponent } from './components/screens/favorites/favorites.component';
import { ProductComponent } from './components/screens/product/product.component';
import { SaleComponent } from './components/screens/sale/sale.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "./components/screens/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FavoritesComponent,
    ProductComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    HomeModule,
  ],
  providers: [],
  exports: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
