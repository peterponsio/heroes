import { Mapper } from '@base/mapper';
import { HeroDTO, HeroModel } from '@models/hero.models';

export class HeroListImplementationRepositoryMapper extends Mapper<HeroDTO[],HeroModel[]> {

  override mapFrom(param: HeroDTO[]): HeroModel[] {
    const heroesDTO = param.map(res=> {
      return {
        name: res.name,
        avatar: res.avatar,
        power: res.power,
        height: res.height,
        id: res.id
      }
    })
    return heroesDTO
  }
  override mapTo(param: HeroModel[]): HeroDTO[] {
    throw new Error('Method not implemented.');
  }


}
