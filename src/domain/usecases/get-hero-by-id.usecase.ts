import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { Injectable } from '@angular/core';
import { HeroModel } from '@models/hero.models';
import { HeroDataRepository } from '@repositories/herodata.repository';

@Injectable()
export class GetHeroByIdUseCase implements UseCase<{}, HeroModel>
{
  constructor(private heroRepository: HeroDataRepository) {}

  execute(heroId: string): Observable<HeroModel> {
    return this.heroRepository.getHeroById(heroId)
  }
}
