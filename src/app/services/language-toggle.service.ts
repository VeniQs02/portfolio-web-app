import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageToggleService {
  private languages: string[] = ['en', 'pl'];
  private currentLanguage: number = 1;

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

  public getCurrentLanguage():number {
    return this.currentLanguage;
  }
}
