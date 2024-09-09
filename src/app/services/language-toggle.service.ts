import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageToggleService {
  private languages = ['en', 'pl'];
  private currentLanguage = 1;

  constructor(private translate: TranslateService) {}

  public switchLanguage() {
    if(this.currentLanguage == 1){
      this.currentLanguage = 0;
      this.translate.use(this.languages[this.currentLanguage]);
    }else{
      this.currentLanguage = 1;
      this.translate.use(this.languages[this.currentLanguage]);
    }
  }
}
