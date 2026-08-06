import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InventoryService, Categoria } from '../../services/inventory.service';

@Component({
  standalone: true,
  selector: 'app-categorias',
  imports: [CommonModule],
  templateUrl: './categorias.page.html',
  styleUrl: './categorias.page.css'
})
export class CategoriasPage {
  categorias: Categoria[] = [];

  constructor(private inventoryService: InventoryService) {
    this.categorias = this.inventoryService.getCategorias();
  }
}
