import { HeroDao, HeroModel } from '@models/hero.models';
import { Observable } from 'rxjs';

export abstract class HeroDataRepository {
  abstract getListHeroesData(): Observable<HeroModel[]>
  abstract createNewHero(param:HeroDao): Observable<string>
}
