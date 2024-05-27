import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:"heroes-list",
    pathMatch: 'full',
  },
  {
    path: 'heroes-list',
    loadChildren: () =>
      import('./View/heroes-list/heroes-list.module').then(
        (m) => m.HeroesListModule
      ),
      canActivate:[AuthGuardService]
  },
  {
    path: 'create-hero',
    loadChildren: () =>
      import('./View/new-hero/new-hero.module').then(
        (m) => m.NewHeroModule
      ),
      canActivate:[AuthGuardService]
  },
  {
    path: 'edit-hero/:id',
    loadChildren: () =>
      import('./View/edit-hero/edit-hero.module').then(
        (m) => m.EditHeroModule
      ),
      canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
