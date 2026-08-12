import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-page',
  template: `
    <div class="inicio-page">
      <h2>Welcome to Inventory Management System</h2>
      <p>This is the home page of the inventory management application.</p>
      <div class="dashboard-cards">
        <div class="card">
          <h3>Products</h3>
          <p>Manage your product inventory</p>
        </div>
        <div class="card">
          <h3>Categories</h3>
          <p>Organize products by categories</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .inicio-page {
      padding: 1rem;
    }
    .dashboard-cards {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }
    .card {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 1.5rem;
      text-align: center;
      background-color: #fafafa;
    }
    .card h3 {
      margin-top: 0;
      color: #3f51b5;
    }
  `]
})
export class InicioPage {
}