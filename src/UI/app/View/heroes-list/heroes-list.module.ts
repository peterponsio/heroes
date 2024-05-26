import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '@directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from '@data/data.module';
import { HereosListComponent } from './hereos-list.component';
import { HeroesListViewModel } from './heroes-list.viewmodel';
import { PipesModule } from "../../../../core/pipes/pipes.module";
import { HeroCardComponent } from './components/hero-card/hero-card.component';


const routes: Routes = [
  {
      path: '',
      component: HereosListComponent
  }
];

@NgModule({
    declarations: [HereosListComponent, HeroCardComponent],
    exports: [RouterModule],
    providers: [HeroesListViewModel],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        DataModule,
        PipesModule
    ]
})
export class HeroesListModule { }
