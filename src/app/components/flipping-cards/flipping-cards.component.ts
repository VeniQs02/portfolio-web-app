import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

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
  getAge(){
    const currentYear = new Date().getFullYear();
    return currentYear - 2003;
  }
}
