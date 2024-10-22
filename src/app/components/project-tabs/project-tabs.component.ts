import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ProjectInfoComponent} from "../project-info/project-info.component";
import {BehaviorSubject} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'project-tabs',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProjectInfoComponent,
    NgClass,
    TranslateModule
  ],
  templateUrl: './project-tabs.component.html',
  styleUrl: './project-tabs.component.css'
})
export class ProjectTabsComponent {

  selectedTab = new BehaviorSubject<string>('pepnet');

  switchSelectedTab(tab: string) {
    this.selectedTab.next(tab);
  }
}

