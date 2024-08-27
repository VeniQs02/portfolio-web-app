import {Component, OnInit} from '@angular/core';
import {SideBarStateService} from "../../services/side-bar-state.service";
import {NgClass, NgOptimizedImage} from "@angular/common";

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

  constructor(private sideBarStateService: SideBarStateService) {}

  ngOnInit(): void {
    this.sideBarStateService.isSidebarVisible$.subscribe(isVisible => {
      this.isSideBarVisible = isVisible;
    });
  }
}
