// filter-by-name.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { HeroModel } from '@models/hero.models';
import { debounceTime, of } from 'rxjs';

@Pipe({
  name: 'filterHeroByName',
})
export class FilterHeroByNamePipe implements PipeTransform {
  transform(
    heroes: HeroModel[] | undefined,
    searchTerm: string
  ): HeroModel[] | undefined {
    if (!heroes || !searchTerm.trim()) {
      return heroes;
    }

    let filteredHeroes = heroes.filter((hero) => hero.name.toLowerCase().includes(searchTerm.toLowerCase()));
    let  upperfilteredHeroes = filteredHeroes.map( res => {
      const heroUpper :HeroModel ={
        name: res.name.toLocaleUpperCase(),
        avatar: res.avatar,
        power: res.power,
        height: res.height,
        id: res.id
      } 
      return heroUpper
    })

    of(upperfilteredHeroes)
    .pipe(
      debounceTime(1500)
    ).subscribe(_=>{
      return upperfilteredHeroes
    })
    return upperfilteredHeroes
  }
}
