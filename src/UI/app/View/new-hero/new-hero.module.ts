import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '@directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from '@data/data.module';
import { PipesModule } from "../../../../core/pipes/pipes.module";
import { NewHeroComponent } from './new-hero.component';
import { NewHeroViewModel } from './new-hero.viewmodel';
import { TranslateModule } from '@ngx-translate/core';


const routes: Routes = [
  {
      path: '',
      component: NewHeroComponent
  }
];

@NgModule({
    declarations: [NewHeroComponent],
    exports: [RouterModule],
    providers: [NewHeroViewModel],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        DataModule,
        PipesModule
    ]
})
export class NewHeroModule { }
