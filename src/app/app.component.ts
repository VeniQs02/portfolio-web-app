import {Component, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {MainSectionComponent} from "./components/main-section/main-section.component";
import {ProjectTabsComponent} from "./components/project-tabs/project-tabs.component";
import {FlippingCardsComponent} from "./components/flipping-cards/flipping-cards.component";
import {SideTopBarComponent} from "./components/side-top-bar/side-top-bar.component";
import {MoreAboutMeComponent} from "./components/more-about-me/more-about-me.component";
import {NgClass} from "@angular/common";
import {ThemeToggleService} from "./services/theme-toggle.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, MainSectionComponent, ProjectTabsComponent, FlippingCardsComponent, SideTopBarComponent, MoreAboutMeComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  protected isLightTheme: boolean = false;

  constructor(protected themeToggleService: ThemeToggleService) {
    effect(() => {
      this.isLightTheme = this.themeToggleService.isLightTheme();
    });
  }
}
