import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto
  actualizar: boolean = false

  constructor(
    private productoService: ProductoServiceService,
    public dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
  ) {

    console.log('constructor', data)
    console.log('constructor', JSON.stringify(data))
    this.producto = data

    console.log('constructor detalle', data)
  }

  ngOnInit(): void {
  }

  nuevoProducto() {

    console.log('nuevo producto', this.producto)
    console.log('nuevo producto', JSON.stringify(this.producto))

    if (this.producto.id) {

      this.productoService.actualizarProducto(this.producto).subscribe(resp => {
        console.log("actualizar producto");
      })

    } else {

      this.productoService.crearProducto(this.producto).subscribe(resp => {
        console.log('nuevo producto...')
      })

    }
    this.dialogRef.close()
  }

}
