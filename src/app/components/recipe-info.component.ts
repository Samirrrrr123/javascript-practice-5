import { Component, Input } from '@angular/core'
import { Recipe } from '../models/recipe'

@Component({
  selector: 'app-recipe-info',
  template: `
    <section class="information">
      <h3>Information</h3>
      <div class="metrics">
        <div><strong>{{ recipe.caloriesPerServing }}</strong><span>Calories</span></div>
        <div><strong>{{ recipe.rating }}</strong><span>Rating</span></div>
        <div><strong>{{ recipe.prepTimeMinutes }}</strong><span>Prep time<br />minutes</span></div>
        <div><strong>{{ recipe.cookTimeMinutes }}</strong><span>Cook time<br />minutes</span></div>
      </div>
    </section>
  `,
})
export class RecipeInfoComponent {
  @Input({ required: true }) recipe!: Recipe
}
