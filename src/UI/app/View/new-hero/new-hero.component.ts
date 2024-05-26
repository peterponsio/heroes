import { Component } from '@angular/core';
import { NewHeroViewModel } from './new-hero.viewmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent {

  newHeroForm: FormGroup = this.formBuilder.group({});
  constructor(private vm: NewHeroViewModel, private formBuilder: FormBuilder,public translate: TranslateService){}

  ngOnInit(): void {
    this.startForm()
  }

  startForm(){
    this.newHeroForm = this.formBuilder.group({
      name : ['',[Validators.required,Validators.minLength(2)]],
      power: ['',[Validators.required,Validators.minLength(2)]],
      avatar: ['', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)]],
      height: ['',[Validators.required]],
    })
  }

  createNewHero(){
    this.vm.createNewHero(this.newHeroForm.getRawValue())
  }
  

}
