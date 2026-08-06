import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Sidebar } from './sidebar/sidebar';

@Component({
  standalone: true,
  selector: 'app-inventory-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, Sidebar],
  templateUrl: './inventory-layout.component.html',
  styleUrl: './inventory-layout.component.css'
})
export class InventoryLayout {
}
