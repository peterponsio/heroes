import { HeroDao, HeroDTO, HeroModel } from "@models/hero.models";
import { Observable } from "rxjs";

export abstract class HeroRemoteDataSource {
    abstract getListHeroesData(): Observable<HeroDTO[]>
    abstract createNewHero(param: HeroDao): Observable<HeroModel>
    abstract editHeroById(param: HeroDao): Observable<HeroModel>
    abstract getHeroById(heroId: string): Observable<HeroModel>
}