import { Routes } from '@angular/router'
import { ListPage } from './pages/list.page'
import { RecipePage } from './pages/recipe.page'
import { NotFoundPage } from './pages/not-found.page'

export const routes: Routes = [
  { path: '', redirectTo: 'breakfast/all', pathMatch: 'full' },
  { path: 'breakfast/:difficulty', component: ListPage, data: { meal: 'breakfast' }, title: 'Breakfast recipes' },
  { path: 'lunch/:difficulty', component: ListPage, data: { meal: 'lunch' }, title: 'Lunch recipes' },
  { path: 'dinner/:difficulty', component: ListPage, data: { meal: 'dinner' }, title: 'Dinner recipes' },
  { path: 'recipe/:id', component: RecipePage, title: 'Recipe' },
  { path: '**', component: NotFoundPage, title: 'Page not found' },
]
