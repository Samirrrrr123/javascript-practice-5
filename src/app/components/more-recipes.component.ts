import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Recipe } from '../models/recipe'

@Component({
  selector: 'app-more-recipes',
  imports: [RouterLink],
  template: `
    <section class="more-recipes">
      <h2>More recipes</h2>
      <div class="small-recipe-list" tabindex="0" aria-label="Другие рецепты">
        @for (recipe of recipes; track recipe.id) {
          <a class="small-recipe" [routerLink]="['/recipe', recipe.id]">
            <img [src]="recipe.image" [alt]="recipe.name" />
            <strong>{{ recipe.name }}</strong>
            <span>{{ recipe.cookTimeMinutes }} min cooktime</span>
          </a>
        }
      </div>
    </section>
  `,
})
export class MoreRecipesComponent {
  @Input({ required: true }) recipes: Recipe[] = []
}
