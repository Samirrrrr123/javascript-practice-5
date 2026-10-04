import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="message not-found">
      <h2>404 — Page not found</h2>
      <p>Такой страницы или рецепта нет.</p>
      <a routerLink="/breakfast/all">Вернуться к рецептам</a>
    </section>
  `,
})
export class NotFoundPage {}
