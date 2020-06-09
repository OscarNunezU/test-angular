import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductosRoutingModule } from './list-productos-routing.module';
import { ListProductosComponent } from './list-productos.component';


@NgModule({
  declarations: [ListProductosComponent],
  imports: [
    CommonModule,
    ListProductosRoutingModule
  ]
})
export class ListProductosModule { }
