import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inventory-layout',
  imports: [RouterOutlet],
  template: `
    <div class="inventory-layout">
      <header class="layout-header">
        <h1>Inventory Management System</h1>
      </header>
      <main class="layout-main">
        <router-outlet></router-outlet>
      </main>
      <footer class="layout-footer">
        <p>&copy; 2026 Inventory Management System</p>
      </footer>
    </div>
  `,
  styles: [`
    .inventory-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .layout-header {
      background-color: #3f51b5;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    .layout-main {
      flex: 1;
      padding: 1rem;
    }
    .layout-footer {
      background-color: #f5f5f5;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class InventoryLayout {
}