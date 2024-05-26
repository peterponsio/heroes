import { HeroDao, HeroDTO } from "@models/hero.models";
import { Observable } from "rxjs";

export abstract class HeroRemoteDataSource {
    abstract getListHeroesData(): Observable<HeroDTO[]>
    abstract createNewHero(param: HeroDao): Observable<string>
}