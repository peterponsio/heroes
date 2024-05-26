import { Observable, map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeroListImplementationRepositoryMapper } from './mappers/user-list.mapper';
import { HeroDataRepository } from '@repositories/herodata.repository';
import { HeroDao, HeroModel } from '@models/hero.models';
import { HeroRemoteDataSource } from '@data/source/hero/HeroRemoteDataSource';

@Injectable()
export class HeroImpRepository extends HeroDataRepository {
  
  heroListMapper = new HeroListImplementationRepositoryMapper();
  
  constructor(private heroRemoteDataSource: HeroRemoteDataSource) {
    super();
  }

  override createNewHero(param: HeroDao): Observable<string> {
    return this.heroRemoteDataSource.createNewHero(param)
    .pipe(
      tap(res=> console.log("created hero ", res))
    )
  }

  override getListHeroesData(): Observable<HeroModel[]> {
    return this.heroRemoteDataSource.getListHeroesData()
    .pipe(
      map(this.heroListMapper.mapFrom))
  }
 
}
