import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.defaults';
import { Observable } from 'rxjs';
import { Request } from '@base/request';
import { HeroDao, HeroDTO } from '@models/hero.models';
import { HeroRemoteDataSource } from '@data/source/hero/HeroRemoteDataSource';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroDataSource extends HeroRemoteDataSource {
 
  private path = `${environment.baseUrl.DEV}`;
 
  constructor(private db: Request, private http: HttpClient) {
    super();
  }

  override createNewHero(param: HeroDao): Observable<string> {

    const headers = new HttpHeaders()
    headers.set('content-type','application/json')

    const body = {
      "createdAt": new Date(),
      "name": param.name,
      "avatar": param.avatar ?? "https://www.cinemascomics.com/wp-content/uploads/2021/06/Superman.jpg",
      "power": param.power,
      "height": param.height,
      "id": new Date()
    }
    
    return this.db.doRequest<any>('post',`${this.path}/superheroes`,body)
  }

  override getListHeroesData(): Observable<HeroDTO[]> {
    return this.db.doRequest<HeroDTO[]>('get',`${this.path}/superheroes`)
}

}
