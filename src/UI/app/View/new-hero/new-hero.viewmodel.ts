import { Injectable } from '@angular/core';
import { HeroDao, HeroModel } from '@models/hero.models';
import { CreateHeroUseCase } from '@usecases/create-hero.usecase';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class NewHeroViewModel {
  
  public heroesSubject = new Subject<HeroModel[]>()
  constructor(private createHeroUseCase: CreateHeroUseCase) {}

  createNewHero(param: HeroDao) {
     this.createHeroUseCase.execute(param)
     .subscribe(res=>{
      console.log("new hero ",res);
      
     })
  }

}
