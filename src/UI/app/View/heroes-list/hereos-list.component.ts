import { HeroesListViewModel } from './heroes-list.viewmodel';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroModel } from '@models/hero.models';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-hereos-list',
  templateUrl: './hereos-list.component.html',
  styleUrls: ['./hereos-list.component.scss']
})
export class HereosListComponent {

  searchTerm: string = ""
  public searchTermUpdater: string = '';
  public searchTermUpdate = new Subject<any>();

  constructor(
    private router:Router,
    public translate: TranslateService, 
    public vm: HeroesListViewModel,
  ){
    vm.initViewModel()

    this.searchTermUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged()
     )
      .subscribe(value => {
        this.searchTerm = value
      });
  }

  createNewHero(){
    this.router.navigate(["/create-hero"])
  }

  editHeroById(hero: HeroModel){
    this.router.navigate([`/edit-hero/${hero.id}`])
  }

}
