import { Directive, ElementRef, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[i18n]'
})
export class TranslateDirective {

  @Input() i18n: string = ""
  constructor(private tranlate: TranslateService,private el: ElementRef) {}

  getI18n(): string{
    return this.tranlate.instant(this.i18n)
  }

  ngAfterViewChecked(): void {
    this.el.nativeElement.innerHTML = this.getI18n()
  }

}
