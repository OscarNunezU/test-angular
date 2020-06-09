import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductoService } from './../../productos/producto.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';



@Component({
  selector: 'upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {

  willDownload = false;
  constructor(private productoSvc: ProductoService, private router: Router) { }

  onFileChange(ev) {
    Swal.fire({
      title: 'Está Seguro?',
      text: ``,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then(result => {
      if (result.value) {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          const dataString = JSON.stringify(jsonData);
    
          this.productoSvc.uploadData(jsonData);
        }
        reader.readAsBinaryString(file);
      }
    });
    this.router.navigate(['./home']);

  }


  ngOnInit(): void {
  }

}





