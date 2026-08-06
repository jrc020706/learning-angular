import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  template: `
    <article class="ui-card">
      <header *ngIf="title" class="ui-card__header">{{ title }}</header>
      <div class="ui-card__body"><ng-content></ng-content></div>
      <footer *ngIf="footer" class="ui-card__footer">{{ footer }}</footer>
    </article>
  `,
  styles: [
    `
      .ui-card {
        border-radius: 1rem;
        background: #fff;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        padding: 1.25rem;
      }
      .ui-card__header {
        margin-bottom: 0.75rem;
        font-size: 1rem;
        font-weight: 700;
        color: #0f172a;
      }
      .ui-card__body {
        color: #334155;
      }
      .ui-card__footer {
        margin-top: 1rem;
        font-size: 0.95rem;
        color: #64748b;
      }
    `
  ]
})
export class CardComponent {
  @Input() title?: string;
  @Input() footer?: string;
}
