import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditHeroViewModel } from './edit-hero.viewmodel';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeroModel } from '@models/hero.models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent {

  destroyRef = inject(DestroyRef)

  editHeroForm: FormGroup = this.formBuilder.group({});
  heroId: string = ''
  selectedHero: HeroModel = {} as HeroModel
  isLoading: boolean = false

  constructor(
    public vm: EditHeroViewModel, 
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.route.params.subscribe(res=>{
      this.heroId = res['id'] 
    })

    this.vm.getHeroById(this.heroId)

    this.vm.heroesSubject
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((res: HeroModel)=>{
      this.selectedHero = res;
    })

    this.startForm()

    this.vm.isLoading
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(res => this.isLoading = res)
  }

  startForm(){
    this.editHeroForm = this.formBuilder.group({
      id: [this.heroId],
      name : [this.selectedHero.name,[Validators.minLength(2)]],
      power: [this.selectedHero.power,[Validators.minLength(2)]],
      avatar: [this.selectedHero.avatar, [Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/i)]],
      height: [this.selectedHero.height,[Validators.minLength(2)]],
    })
    this.editHeroForm.controls['name'].setValue(this.selectedHero.name)
    this.editHeroForm.controls['power'].setValue(this.selectedHero.power)
    this.editHeroForm.controls['avatar'].setValue(this.selectedHero.avatar)
    this.editHeroForm.controls['height'].setValue(this.selectedHero.height)
    this.editHeroForm.valueChanges.subscribe(fields=>{
      if(fields.name == "" || fields.power == "" || fields.avatar == "" || fields.height == ""){
        this.editHeroForm.setErrors({required: true})
      }
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
