import { Injectable } from '@angular/core';
import { HeroModel } from '@models/hero.models';
import { HeroesListUseCase } from '@usecases/get-heroes-list.usecase';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class HeroesListViewModel {
  
  public heroesSubject = new BehaviorSubject<HeroModel[]>([])
  constructor(private heroListUseCase: HeroesListUseCase) {}

    initViewModel() {
      setTimeout(() => {
          this.getListHeroes()
      }, 1500);   
    }

    getListHeroes(): void {
      this.heroListUseCase.execute()
      .subscribe(res=>{ 
        this.heroesSubject.next(res)
      })
    }

}
