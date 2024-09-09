import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  public isLightTheme = signal<boolean>(false);

  constructor() { }

  public toggleTheme() {
    this.isLightTheme.update(value => !value);
    // alert(this.isLightTheme)
  }
}
