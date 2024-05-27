import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.defaults';
import { Observable } from 'rxjs';
import { Request } from '@base/request';
import { HeroDao, HeroDTO, HeroModel } from '@models/hero.models';
import { HeroRemoteDataSource } from '@data/source/hero/HeroRemoteDataSource';

@Injectable()
export class HeroDataSource extends HeroRemoteDataSource {
  
  private path = `${environment.baseUrl.DEV}`;
 
  constructor(private db: Request) {
    super();
  }

  override getHeroById(heroId: string): Observable<HeroModel> {
    return this.db.doRequest<any>('get',`${this.path}/superheroes/${heroId}`)
  }

  override editHeroById(param: HeroDao): Observable<HeroModel> {

    const body = {
      "createdAt": new Date(),
      "name": param.name,
      "avatar": param.avatar,
      "power": param.power,
      "height": param.height,
      "id": param.id
    }

    return this.db.doRequest<any>('post',`${this.path}/superheroes/edit`,body)
  }

  override createNewHero(param: HeroDao): Observable<HeroModel> {

    const body = {
      "createdAt": new Date(),
      "name": param.name,
      "avatar": param.avatar,
      "power": param.power,
      "height": param.height,
      "id": new Date()
    }
    console.log("body ", body);
    
    return this.db.doRequest<any>('post',`${this.path}/superheroes`,body)
  }

  override getListHeroesData(): Observable<HeroDTO[]> {
    return this.db.doRequest<HeroDTO[]>('get',`${this.path}/superheroes`)
  }

}
