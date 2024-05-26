import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { Injectable } from '@angular/core';
import { HeroModel } from '@models/hero.models';
import { HeroDataRepository } from '@repositories/herodata.repository';

@Injectable()
export class HeroesListUseCase implements UseCase<{}, HeroModel[]>
{
  constructor(private heroRepository: HeroDataRepository) {}

  execute(): Observable<HeroModel[]> {
    return this.heroRepository.getListHeroesData()
  }
}
