import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadDataComponent } from './upload-data.component';

const routes: Routes = [{ path: '', component: UploadDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadDataRoutingModule { }
