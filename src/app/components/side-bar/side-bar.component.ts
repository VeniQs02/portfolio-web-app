import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {SideBarStateService} from "../../services/side-bar-state.service";

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

  constructor(private sideBarStateService: SideBarStateService) {
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
  }

  protected toggleSideBar() {
    this.isSideBarBeingDisplayed = !this.isSideBarBeingDisplayed;
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
  }

  protected toggleLanguageSelection(){}
}
