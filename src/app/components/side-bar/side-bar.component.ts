import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {SideBarStateService} from "../../services/side-bar-state.service";
import {ThemeToggleService} from "../../services/theme-toggle.service";

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  protected isSideBarBeingDisplayed: boolean = true;

  constructor(private sideBarStateService: SideBarStateService, protected themeToggleService: ThemeToggleService) {
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
  }

  protected toggleSideBar() {
    this.isSideBarBeingDisplayed = !this.isSideBarBeingDisplayed;
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
  }

  protected toggleTheme(){
    this.themeToggleService.toggleTheme();
  }

  protected toggleLanguageSelection(){}
}
