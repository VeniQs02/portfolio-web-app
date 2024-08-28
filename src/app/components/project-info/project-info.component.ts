import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'project-info',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
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
