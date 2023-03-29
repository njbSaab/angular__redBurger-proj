import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {HeaderModule} from "./header/header.module";
import {HomeModule} from "../../screens/home/home.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        HomeModule
    ]
})
export class LayoutModule { }
