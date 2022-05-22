import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  SERVER_URL = 'http://localhost:8080/productos/';

  constructor(private httpClient: HttpClient) {

  }

  public getProductos() {
    return this.httpClient.get<Producto[]>(this.SERVER_URL)
  }

  public crearProducto(producto: Producto) {
    return this.httpClient.post<Producto>(this.SERVER_URL, producto)
  }

  public actualizarProducto(producto: Producto) {
    return this.httpClient.put<Producto>(this.SERVER_URL+ producto.id, producto)
  }

  public eliminarProducto(producto: Producto) {
    return this.httpClient.delete<Producto>(this.SERVER_URL + producto.id)
  }

}
