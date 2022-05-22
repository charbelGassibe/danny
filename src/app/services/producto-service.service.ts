import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private httpClient: HttpClient) {

  }

  public getProductos() {
    return this.httpClient.get<Producto[]>("http://localhost:8080/productos/")
  }

  public crearProducto(producto: Producto) {
    return this.httpClient.post<Producto>("http://localhost:8080/productos/", producto)
  }

  public actualizarProducto(producto: Producto) {
    return this.httpClient.put<Producto>("http://localhost:8080/productos/" + producto.id, producto)
  }

  public eliminarProducto(producto: Producto) {
    return this.httpClient.delete<Producto>("http://localhost:8080/productos/" + producto.id)
  }



}
