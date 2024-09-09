import {Component, effect, OnInit} from '@angular/core';
import {SideBarStateService} from "../../services/side-bar-state.service";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ThemeToggleService} from "../../services/theme-toggle.service";

@Component({
  selector: 'main-section',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent implements OnInit{
  protected isSideBarVisible: boolean = true;
  protected isLightTheme: boolean = false;

  constructor(private sideBarStateService: SideBarStateService, protected service: ThemeToggleService) {
    effect(() => {
      this.isLightTheme = this.service.isLightTheme();
    });
  }

  ngOnInit(): void {
    this.sideBarStateService.isSidebarVisible$.subscribe(isVisible => {
      this.isSideBarVisible = isVisible;
    });

  }
}
