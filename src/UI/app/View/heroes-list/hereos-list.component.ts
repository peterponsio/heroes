import { HeroesListViewModel } from './heroes-list.viewmodel';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroModel } from '@models/hero.models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hereos-list',
  templateUrl: './hereos-list.component.html',
  styleUrls: ['./hereos-list.component.scss']
})
export class HereosListComponent {

  searchTerm: string = ""

  constructor(
    private router:Router,
    public translate: TranslateService, 
    public vm: HeroesListViewModel,
  ){
    vm.initViewModel()
  }

  createNewHero(){
    this.router.navigate(["/create-hero"])
  }

  editHeroById(hero: HeroModel){
    this.router.navigate([`/edit-hero/${hero.id}`])
  }

}
