import { Injectable } from '@angular/core';
import { HeroDao, HeroModel } from '@models/hero.models';
import { CreateHeroUseCase } from '@usecases/create-hero.usecase';
import { EditHeroUseCase } from '@usecases/edit-hero.usecase';
import { GetHeroByIdUseCase } from '@usecases/get-hero-by-id.usecase';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable()
export class EditHeroViewModel {
  
  public heroesSubject = new Subject<HeroModel>()
  public isLoading = new BehaviorSubject<boolean>(false)
  constructor(private editHeroByIdUseCase: EditHeroUseCase,private getHeroByIdUseCase: GetHeroByIdUseCase) {}

  editHeroById(param: HeroDao) {
     this.isLoading.next(true)
     setTimeout(() => {
        this.editHeroByIdUseCase.execute(param)
        .subscribe(res=>{
          console.log("edit hero ",res);
          this.isLoading.next(false)
        })
     }, 1000); 
  }

  getHeroById(heroId: string) {
    this.getHeroByIdUseCase.execute(heroId)
    .subscribe(res=>{
      console.log("res ", res);
      this.heroesSubject.next(res)
    })
  }

}
