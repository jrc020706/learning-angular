import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InventoryService, Producto } from '../../services/inventory.service';

@Component({
  standalone: true,
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.page.html',
  styleUrl: './productos.page.css'
})
export class ProductosPage {
  productos: Producto[] = [];
  nuevoProducto: Partial<Producto> = {
    nombre: '',
    categoria: '',
    stock: 0,
    precio: 0
  };

  constructor(private inventoryService: InventoryService) {
    this.productos = this.inventoryService.getProductos();
  }

  agregarProducto() {
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.categoria) {
      return;
    }

    const nextId = this.productos.length > 0 ? Math.max(...this.productos.map((p) => p.id)) + 1 : 1;
    const producto: Producto = {
      id: nextId,
      nombre: this.nuevoProducto.nombre,
      categoria: this.nuevoProducto.categoria,
      stock: Number(this.nuevoProducto.stock) || 0,
      precio: Number(this.nuevoProducto.precio) || 0
    };

    this.inventoryService.addProducto(producto);
    this.nuevoProducto = { nombre: '', categoria: '', stock: 0, precio: 0 };
  }
}
