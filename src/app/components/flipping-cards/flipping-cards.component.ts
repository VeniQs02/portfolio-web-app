import { Component } from '@angular/core';

@Component({
  selector: 'flipping-cards',
  standalone: true,
  imports: [],
  templateUrl: './flipping-cards.component.html',
  styleUrl: './flipping-cards.component.css'
})
export class FlippingCardsComponent {
  getAge(){
    const currentYear = new Date().getFullYear();
    return currentYear - 2003;
  }
}
