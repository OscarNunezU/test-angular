
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductoService } from './../../productos/producto.service';
import { Observable } from 'rxjs';
import { ProductoI } from '../../../shared/models/producto.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public productos$: Observable<ProductoI[]>;

  constructor(private productoSvc: ProductoService, public dialog: MatDialog) { }
  

  displayedColumns: string[] = ['codigo', 'nombre','precio', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {
    this.productoSvc
      .getAllProductos()
      .subscribe(productos => (this.dataSource.data = productos));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  view_producto(producto: ProductoI) {
    console.log('view product');
    this.openDialog(producto);
  }

  openDialog(producto?: ProductoI): void {
    const config = {
      data: {
        message: producto.nombre,
        content: producto
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}

