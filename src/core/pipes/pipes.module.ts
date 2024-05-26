import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterHeroByNamePipe } from './filter-characters-by-name.pipe';

@NgModule({
  declarations: [FilterHeroByNamePipe],
  imports: [CommonModule],
  exports: [FilterHeroByNamePipe],
})
export class PipesModule {}
