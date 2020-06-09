import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadDataRoutingModule } from './upload-data-routing.module';
import { UploadDataComponent } from './upload-data.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [UploadDataComponent],
  imports: [
    CommonModule,
    UploadDataRoutingModule,
    MaterialModule
  ]
})
export class UploadDataModule { }
