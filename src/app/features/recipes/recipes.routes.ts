import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    component: RecipeListComponent,
  },
  {
    path: 'new',
    component: RecipeFormComponent,
  },
  {
    path: ':id',
    component: RecipeDetailComponent,
  },
  {
    path: ':id/edit',
    component: RecipeFormComponent,
  },
];
