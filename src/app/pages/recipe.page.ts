import { Component, inject, signal } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Recipe } from '../models/recipe'
import { RecipesService } from '../services/recipes.service'
import { RecipeInfoComponent } from '../components/recipe-info.component'
import { MoreRecipesComponent } from '../components/more-recipes.component'
import { NotFoundPage } from './not-found.page'

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink, RecipeInfoComponent, MoreRecipesComponent, NotFoundPage],
  templateUrl: './recipe.page.html',
})
export class RecipePage {
  private route = inject(ActivatedRoute)
  private service = inject(RecipesService)
  recipe = signal<Recipe | undefined>(undefined)
  moreRecipes = signal<Recipe[]>([])
  loading = signal(true)
  error = signal('')
  returnTo = this.service.lastListPath
  id = 0

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      this.id = Number(params.get('id'))
      this.loadRecipe()
    })
  }

  async loadRecipe() {
    this.loading.set(true)
    this.error.set('')
    try {
      this.recipe.set(await this.service.getRecipe(this.id))
      const recipes = await this.service.getRecipes()
      this.moreRecipes.set(this.service.getMoreRecipes(recipes, this.id))
    } catch {
      this.error.set('Не удалось загрузить рецепт. Попробуйте ещё раз.')
    } finally {
      this.loading.set(false)
    }
  }
}
