import { Injectable } from '@angular/core';
import { HeroDao, HeroModel } from '@models/hero.models';
import { CreateHeroUseCase } from '@usecases/create-hero.usecase';
import { EditHeroUseCase } from '@usecases/edit-hero.usecase';
import { Subject } from 'rxjs';

@Injectable()
export class EditHeroViewModel {
  
  public heroesSubject = new Subject<HeroModel[]>()
  constructor(private editHeroByIdUseCase: EditHeroUseCase) {}

  editHeroById(param: HeroDao) {
     this.editHeroByIdUseCase.execute(param)
     .subscribe(res=>{
      console.log("edit hero ",res);
     })
  }

}
