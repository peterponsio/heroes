import { Observable } from 'rxjs';
import { UseCase } from '@base/use-case';
import { Injectable } from '@angular/core';
import { HeroDao, HeroModel } from '@models/hero.models';
import { HeroDataRepository } from '@repositories/herodata.repository';

@Injectable()
export class EditHeroUseCase implements UseCase<{}, any>
{
  constructor(private heroRepository: HeroDataRepository) {}

  execute(param: HeroDao): Observable<HeroModel> {
    return this.heroRepository.editHeroById(param)
  }
}
