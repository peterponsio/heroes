import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Request } from '@base/request';
import { HeroesListUseCase } from '@usecases/get-heroes-list.usecase';
import { HeroDataRepository } from '@repositories/herodata.repository';
import { HeroRemoteDataSource } from './source/hero/HeroRemoteDataSource';
import { HeroImpRepository } from './repositories/hero/hero-implementation.repository';
import { HeroDataSource } from './datasource/hero/hero-datasource';
import { CreateHeroUseCase } from '@usecases/create-hero.usecase';

@NgModule({
  providers: [
    Request,
    HeroesListUseCase,
    CreateHeroUseCase,
    { provide: HeroDataRepository, useClass: HeroImpRepository },
    { provide: HeroRemoteDataSource, useClass: HeroDataSource },

  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}