import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      <h1>Recipes</h1>
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
