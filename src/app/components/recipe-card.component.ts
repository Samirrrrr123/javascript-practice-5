import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Recipe } from '../models/recipe'
import { RecipeInfoComponent } from './recipe-info.component'

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink, RecipeInfoComponent],
  template: `
    <article class="recipe-card">
      <h2>{{ recipe.name }}</h2>
      <div class="card-content">
        <section class="ingredients">
          <h3>Ingredients</h3>
          <ul>
            @for (ingredient of recipe.ingredients; track $index) {
              <li>{{ ingredient }}</li>
            }
          </ul>
        </section>
        <app-recipe-info [recipe]="recipe" />
        <a class="recipe-button" [routerLink]="['/recipe', recipe.id]">Recipe</a>
      </div>
      <img class="recipe-photo" [src]="recipe.image" [alt]="recipe.name" />
    </article>
  `,
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe
}
