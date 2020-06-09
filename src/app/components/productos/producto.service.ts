import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { ProductoI } from '../../shared/models/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productosCollection: AngularFirestoreCollection<ProductoI>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.productosCollection = afs.collection<ProductoI>('productos');
  }
  public getAllProductos(): Observable<ProductoI[]> {

    return this.productosCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ProductoI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
  public uploadData(data: any) {

    for (let i = 0; i < data.PRODUCTOS.length; i++) {
      const productObject = {
        codigo: data.PRODUCTOS[i].CODIGO,
        nombre: data.PRODUCTOS[i].NOMBRE,
        unitid: data.PRODUCTOS[i].UNITID,
        precio_venta: data.PRODUCTOS[i].PRECIO_VENTA,
        costo_financiero: data.PRODUCTOS[i].COSTO_FINANCIERO,
        id_linea: data.PRODUCTOS[i].IDLINEA,
        id_categoria: data.PRODUCTOS[i].IDCATEGORIA,
        codigo_id_proveedor: data.PRODUCTOS[i].CodIDProveedor,
        estado: data.PRODUCTOS[i].ESTADO,
        tipo_fabricante: data.PRODUCTOS[i].TIPOFABRICANTE,
        numero_parte: data.PRODUCTOS[i].NUMERO_PARTE,
        linea: data.PRODUCTOS[i].LINEA,
        categoria: data.PRODUCTOS[i].CATEGORIA,
        uen: data.PRODUCTOS[i].UEN,
        marca: data.PRODUCTOS[i].MARCA,
        precio_minimo: data.PRODUCTOS[i].PRECIO_MINIMO,
        descripcion: data.PRODUCTOS[i].DESCRIPCION,
        imagen_150: data.PRODUCTOS[i].IMAGEN_150,
        imagen_450: data.PRODUCTOS[i].IMAGEN_450
      }
      this.productosCollection.add(productObject);
    }



  }

}