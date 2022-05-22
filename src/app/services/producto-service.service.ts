import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductoTO } from '../models/productoTO';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  SERVER_URL = '/api/forus/challenge/dummy-api/producto/';

  constructor(private httpClient: HttpClient) {

  }

  public getProductos() {
    return this.httpClient.get<ProductoTO[]>(this.SERVER_URL)
  }

  public crearProducto(producto: ProductoTO) {
    return this.httpClient.post<ProductoTO>(this.SERVER_URL, producto)
  }

  public actualizarProducto(producto: ProductoTO) {
    return this.httpClient.put<ProductoTO>(this.SERVER_URL, producto)
  }

  public eliminarProducto(producto: ProductoTO) {
    return this.httpClient.delete<ProductoTO>(this.SERVER_URL + producto.productoId)
  }

}
