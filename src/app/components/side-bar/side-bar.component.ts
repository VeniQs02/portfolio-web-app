import {Component, effect} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {SideBarStateService} from "../../services/side-bar-state.service";
import {ThemeToggleService} from "../../services/theme-toggle.service";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageToggleService} from "../../services/language-toggle.service";

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  protected isSideBarBeingDisplayed: boolean = true;
  protected isLightTheme: boolean = false;

  constructor(private sideBarStateService: SideBarStateService,
              protected themeToggleService: ThemeToggleService,
              protected languageToggleService: LanguageToggleService) {
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
    effect(() => {
      this.isLightTheme = this.themeToggleService.isLightTheme();
    });
  }

  protected toggleSideBar() {
    this.isSideBarBeingDisplayed = !this.isSideBarBeingDisplayed;
    this.sideBarStateService.setIsSidebarVisible(this.isSideBarBeingDisplayed);
  }

  protected toggleThemeButtonAction(){
    this.themeToggleService.toggleTheme();
  }

  protected toggleLanguageSelection(){
    this.languageToggleService.switchLanguage()
  }

}
