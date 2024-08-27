import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {MainSectionComponent} from "./components/main-section/main-section.component";
import {ProjectTabsComponent} from "./components/project-tabs/project-tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, MainSectionComponent, ProjectTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
