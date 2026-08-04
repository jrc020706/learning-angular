import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from './components/greeting/greeting';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected greeting = signal('');

  receiveGreeting(message: string) {
    this.greeting.set(message);
  }
}
