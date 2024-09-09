import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'more-about-me',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './more-about-me.component.html',
  styleUrl: './more-about-me.component.css'
})
export class MoreAboutMeComponent {

}
