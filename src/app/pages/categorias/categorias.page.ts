import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias-page',
  imports: [CommonModule],
  template: `
    <div class="categorias-page">
      <h2>Categories Management</h2>
      <div class="actions">
        <button class="btn btn-primary">Add New Category</button>
      </div>
      <div class="categories-grid">
        <div class="category-card" *ngFor="let category of categories">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <span class="product-count">{{ category.productCount }} products</span>
          <div class="card-actions">
            <button class="btn btn-sm btn-edit">Edit</button>
            <button class="btn btn-sm btn-delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .categorias-page {
      padding: 1rem;
    }
    .actions {
      margin-bottom: 1rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    }
    .btn-primary {
      background-color: #3f51b5;
      color: white;
    }
    .btn-sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .btn-edit {
      background-color: #ff9800;
      color: white;
      margin-right: 0.5rem;
    }
    .btn-delete {
      background-color: #f44336;
      color: white;
    }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .category-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.5rem;
      background-color: #fafafa;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .category-card h3 {
      margin-top: 0;
      color: #3f51b5;
    }
    .product-count {
      display: inline-block;
      background-color: #e8eaf6;
      color: #3f51b5;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
      font-weight: 500;
      margin: 1rem 0;
    }
    .card-actions {
      display: flex;
      gap: 0.5rem;
    }
  `]
})
export class CategoriasPage {
  categories = [
    { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', productCount: 45 },
    { id: 2, name: 'Furniture', description: 'Office and home furniture', productCount: 28 },
    { id: 3, name: 'Clothing', description: 'Apparel and fashion accessories', productCount: 67 },
    { id: 4, name: 'Books', description: 'Educational and entertainment books', productCount: 123 }
  ];
}