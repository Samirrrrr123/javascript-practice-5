export interface Recipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  difficulty: string
  caloriesPerServing: number
  image: string
  rating: number
  mealType: string[]
}
