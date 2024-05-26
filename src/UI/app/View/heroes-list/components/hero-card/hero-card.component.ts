import { Component, Input } from '@angular/core';
import { HeroModel } from '@models/hero.models';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero: HeroModel = {} as HeroModel
  constructor(){}
}
