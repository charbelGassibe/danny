import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/model';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'ubicacion', 'accion'];

  productos: Producto[] = []

  constructor(
    private productoService: ProductoServiceService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe(resp => {
      this.productos = resp

      console.log(this.productos)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetalleComponent, {
      width: '25%',
      data: { name: 'algo', animal: 'algo' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  abrirDetalle(row: any): void {

    const dialogRef = this.dialog.open(DetalleComponent, {
      width: '25%',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  eliminar(row: any): void {
    console.log("eliminando", row)
    this.productoService.eliminarProducto(row).subscribe(x => {
      console.log("eliminar")
    })
  }

}