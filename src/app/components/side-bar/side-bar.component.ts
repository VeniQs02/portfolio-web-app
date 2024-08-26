import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  protected isSideBarBeingDisplayed: boolean = true;

  protected toggleSideBar() {
    this.isSideBarBeingDisplayed = !this.isSideBarBeingDisplayed;
  }

  protected toggleLanguageSelection(){}

}
