import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-page',
  template: `
    <div class="productos-page">
      <h2>Products Management</h2>
      <div class="actions">
        <button class="btn btn-primary">Add New Product</button>
      </div>
      <div class="products-table-container">
        <table class="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>Electronics</td>
              <td>$1,299.99</td>
              <td>15</td>
              <td>
                <button class="btn btn-sm btn-edit">Edit</button>
                <button class="btn btn-sm btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Desk Chair</td>
              <td>Furniture</td>
              <td>$249.99</td>
              <td>8</td>
              <td>
                <button class="btn btn-sm btn-edit">Edit</button>
                <button class="btn btn-sm btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Monitor</td>
              <td>Electronics</td>
              <td>$349.99</td>
              <td>12</td>
              <td>
                <button class="btn btn-sm btn-edit">Edit</button>
                <button class="btn btn-sm btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .productos-page {
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
    .products-table-container {
      overflow-x: auto;
    }
    .products-table {
      width: 100%;
      border-collapse: collapse;
    }
    .products-table th,
    .products-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    .products-table th {
      background-color: #f5f5f5;
      font-weight: 600;
    }
    .products-table tr:hover {
      background-color: #f9f9f9;
    }
  `]
})
export class ProductosPage {
}