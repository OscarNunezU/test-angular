(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/productos/producto.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/productos/producto.service.ts ***!
  \**********************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class ProductoService {
    constructor(afs) {
        this.afs = afs;
        this.productosCollection = afs.collection('productos');
    }
    getAllProductos() {
        return this.productosCollection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    uploadData(data) {
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
            };
            this.productosCollection.add(productObject);
        }
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map