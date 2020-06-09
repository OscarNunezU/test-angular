import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductosComponent } from './list-productos.component';

const routes: Routes = [{ path: '', component: ListProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductosRoutingModule { }
