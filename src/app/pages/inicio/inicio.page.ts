import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { CardComponent } from '../../components/ui/card.component';

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [CommonModule, CardComponent],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.css'
})
export class InicioPage {
  productosCount = 0;
  categoriasCount = 0;

  constructor(private inventoryService: InventoryService) {
    this.productosCount = this.inventoryService.getProductos().length;
    this.categoriasCount = this.inventoryService.getCategorias().length;
  }
}
