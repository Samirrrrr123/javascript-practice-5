import { Injectable } from '@angular/core'
import { Recipe } from '../models/recipe'

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = []
  lastListPath = '/breakfast/all'

  async getRecipes(): Promise<Recipe[]> {
    if (!this.recipes.length) {
      const response = await fetch('https://dummyjson.com/recipes?limit=50')
      if (!response.ok) throw new Error('Не удалось загрузить рецепты')
      const data = await response.json()
      this.recipes = data.recipes
    }
    return this.recipes
  }

  filterRecipes(recipes: Recipe[], meal: string, difficulty: string): Recipe[] {
    return recipes.filter(recipe =>
      recipe.mealType.some(type => type.toLowerCase() === meal) &&
      (difficulty === 'all' || recipe.difficulty.toLowerCase() === difficulty)
    )
  }

  async getRecipe(id: number): Promise<Recipe | undefined> {
    const recipes = await this.getRecipes()
    return recipes.find(recipe => recipe.id === id)
  }

  getMoreRecipes(recipes: Recipe[], selectedId?: number): Recipe[] {
    return recipes.filter(recipe => recipe.id !== selectedId).slice(0, 6)
  }
}
