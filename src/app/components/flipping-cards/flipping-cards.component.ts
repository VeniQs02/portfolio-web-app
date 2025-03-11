import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {LanguageToggleService} from "../../services/language-toggle.service";

@Component({
  selector: 'flipping-cards',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './flipping-cards.component.html',
  styleUrl: './flipping-cards.component.css'
})
export class FlippingCardsComponent {
  constructor(private languageToggleService: LanguageToggleService) {}

  getAge(){
    const currentYear = new Date().getFullYear();
    return currentYear - 2003;
  }

  getAgeSuffix(): string {
    if(this.languageToggleService.getCurrentLanguage() == 1){
      if([2, 3, 4].includes(this.getAge()%10)){return " lata"}
      else{return " lat"}
    } else if(this.languageToggleService.getCurrentLanguage() == 0){
      return " years old"
    } else {return " years old";}
  }

  getHobbyAge(): number{
    const currentYear = new Date().getFullYear();
    return currentYear - 2018;
  }
}
