import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  stock: number;
  precio: number;
}

export interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Laptop', categoria: 'Electrónica', stock: 24, precio: 1250 },
    { id: 2, nombre: 'Mouse inalámbrico', categoria: 'Accesorios', stock: 64, precio: 25 },
    { id: 3, nombre: 'Escritorio ergonómico', categoria: 'Mobiliario', stock: 12, precio: 310 }
  ];

  private categorias: Categoria[] = [
    { id: 1, nombre: 'Electrónica', descripcion: 'Dispositivos y accesorios tecnológicos.' },
    { id: 2, nombre: 'Mobiliario', descripcion: 'Mesas, sillas y equipamiento de oficina.' },
    { id: 3, nombre: 'Accesorios', descripcion: 'Componentes y artículos de soporte.' }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  addProducto(producto: Producto): void {
    this.productos.push(producto);
  }
}
