import { Component, computed, inject, signal } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Recipe } from '../models/recipe'
import { RecipesService } from '../services/recipes.service'
import { RecipeCardComponent } from '../components/recipe-card.component'
import { MoreRecipesComponent } from '../components/more-recipes.component'
import { NotFoundPage } from './not-found.page'

@Component({
  selector: 'app-list-page',
  imports: [RouterLink, RecipeCardComponent, MoreRecipesComponent, NotFoundPage],
  templateUrl: './list.page.html',
})
export class ListPage {
  private route = inject(ActivatedRoute)
  private service = inject(RecipesService)
  meal: string = this.route.snapshot.data['meal']
  difficulties = ['all', 'easy', 'medium']
  meals = ['breakfast', 'lunch', 'dinner']
  difficulty = signal('all')
  recipes = signal<Recipe[]>([])
  loading = signal(true)
  error = signal('')
  valid = computed(() => this.difficulties.includes(this.difficulty()))
  filteredRecipes = computed(() => this.service.filterRecipes(this.recipes(), this.meal, this.difficulty()))
  moreRecipes = computed(() => this.service.getMoreRecipes(this.recipes()))

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      this.difficulty.set(params.get('difficulty') || 'all')
      if (this.valid()) {
        this.service.lastListPath = '/' + this.meal + '/' + this.difficulty()
      }
    })
    this.loadRecipes()
  }

  async loadRecipes() {
    this.loading.set(true)
    this.error.set('')
    try {
      this.recipes.set(await this.service.getRecipes())
    } catch {
      this.error.set('Не удалось загрузить рецепты. Попробуйте ещё раз.')
    } finally {
      this.loading.set(false)
    }
  }
}
