import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditHeroViewModel } from './edit-hero.viewmodel';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent {

  editHeroForm: FormGroup = this.formBuilder.group({});
  heroId: string = ''

  constructor(
    private vm: EditHeroViewModel, 
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.startForm()
    this.route.params.subscribe(res=>{
      this.heroId = res['id']
      console.log("data ", res);
      
    })
  }

  startForm(){
    this.editHeroForm = this.formBuilder.group({
      id: [this.heroId],
      name : ['',[Validators.required,Validators.minLength(2)]],
      power: ['',[Validators.required,Validators.minLength(2)]],
      avatar: ['', [Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)]],
      height: ['',[Validators.required]],
    })
  }

  editHeroById(){
    this.editHeroForm.controls['id'].setValue(this.heroId) 
    this.vm.editHeroById(this.editHeroForm.getRawValue())
  }
  
  goBack(){
    this.router.navigate(["/heroes-list"])
  }

}
