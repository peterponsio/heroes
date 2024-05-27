import { Injectable } from '@angular/core';
import { HeroDao, HeroModel } from '@models/hero.models';
import { CreateHeroUseCase } from '@usecases/create-hero.usecase';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class NewHeroViewModel {
  
  public heroesSubject = new Subject<HeroModel[]>()
  public isLoading = new BehaviorSubject<boolean>(false)
  constructor(private createHeroUseCase: CreateHeroUseCase) {}

  createNewHero(param: HeroDao) {

     this.isLoading.next(true)

     setTimeout(() => {
        this.createHeroUseCase.execute(param)
        .subscribe(res=>{
          this.isLoading.next(false)
          console.log("new hero ",res);
        })
     }, 2000);
  }

}
