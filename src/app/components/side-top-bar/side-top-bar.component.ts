import {Component, effect} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SideBarStateService} from "../../services/side-bar-state.service";
import {ThemeToggleService} from "../../services/theme-toggle.service";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageToggleService} from "../../services/language-toggle.service";

@Component({
  selector: 'side-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './side-top-bar.component.html',
  styleUrl: './side-top-bar.component.css'
})
export class SideTopBarComponent {
  protected isLightTheme: boolean = false;


  constructor(private sideBarStateService: SideBarStateService,
              protected themeToggleService: ThemeToggleService,
              protected languageToggleService: LanguageToggleService) {
    effect(() => {
      this.isLightTheme = this.themeToggleService.isLightTheme();
    });
  }

  protected toggleThemeButtonAction(){
    this.themeToggleService.toggleTheme();
  }

  protected toggleLanguageSelection(){
    this.languageToggleService.switchLanguage()
  }
}
