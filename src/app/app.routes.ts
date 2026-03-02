import { Routes } from '@angular/router';
import { AuthGuard } from './core/gaurds/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'recipes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/recipes/recipes.routes').then((m) => m.RECIPES_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];
