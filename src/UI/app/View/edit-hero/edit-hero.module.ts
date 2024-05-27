import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '@directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from '@data/data.module';
import { PipesModule } from "../../../../core/pipes/pipes.module";
import { EditHeroComponent } from './edit-hero.component';
import { EditHeroViewModel } from './edit-hero.viewmodel';


const routes: Routes = [
  {
      path: '',
      component: EditHeroComponent
  }
];

@NgModule({
    declarations: [EditHeroComponent],
    exports: [RouterModule],
    providers: [EditHeroViewModel],
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
export class EditHeroModule { }
