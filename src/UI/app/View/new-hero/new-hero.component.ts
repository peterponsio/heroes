import { Component, DestroyRef, inject } from '@angular/core';
import { NewHeroViewModel } from './new-hero.viewmodel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent {

  destroyRef = inject(DestroyRef)
  newHeroForm: FormGroup = this.formBuilder.group({});
  isLoading: boolean = false

  constructor(
    private vm: NewHeroViewModel, 
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.startForm()

    this.vm.isLoading
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(res => this.isLoading = res)
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
  
  goBack(){
    this.router.navigate(["/heroes-list"])
  }

}
