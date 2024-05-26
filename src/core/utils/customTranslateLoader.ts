import { of } from "rxjs"
import i18_es from "../../UI/assets/i18n/es.json";
import { TranslateLoader } from "@ngx-translate/core";

export class CustomTranslateLoader implements TranslateLoader{

    constructor(){}

    getTranslation(){
        return of(i18_es)
    }

}