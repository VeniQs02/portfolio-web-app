import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {ImageCarouselComponent} from "../image-carousel/image-carousel.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'project-info',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    ImageCarouselComponent,
    TranslateModule,
  ],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent implements OnInit{

  @Input() selectedTabSubject!: BehaviorSubject<string>;
  selectedTab: string = '';

  ngOnInit() {
    this.selectedTabSubject.subscribe(tab => {
      this.selectedTab = tab;
    });
  }
}
