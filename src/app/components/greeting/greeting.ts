import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-greeting',
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  @Output() greeting = new EventEmitter<string>();

  message = 'Shinra tensei!';

  sendGreeting() {
    this.greeting.emit(this.message);
  }
}
