import { Routes } from '@angular/router';
import { InventoryLayout } from './components/layout/inventory-layout.component';
import { InicioPage } from './pages/inicio/inicio.page';
import { ProductosPage } from './pages/productos/productos.page';
import { CategoriasPage } from './pages/categorias/categorias.page';

export const routes: Routes = [
  {
    path: '',
    component: InventoryLayout,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioPage },
      { path: 'productos', component: ProductosPage },
      { path: 'categorias', component: CategoriasPage }
    ]
  }
];
