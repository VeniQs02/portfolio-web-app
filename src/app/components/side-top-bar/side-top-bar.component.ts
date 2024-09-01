import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'side-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './side-top-bar.component.html',
  styleUrl: './side-top-bar.component.css'
})
export class SideTopBarComponent {

}
