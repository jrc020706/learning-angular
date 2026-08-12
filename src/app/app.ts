import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showAlert(event: SubmitEvent) {
    event.preventDefault();
    alert('Form submitted!');
    }
}

