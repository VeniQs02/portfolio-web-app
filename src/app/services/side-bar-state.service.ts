import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideBarStateService {
  private isSidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  isSidebarVisible$ = this.isSidebarVisibleSubject.asObservable();

  constructor() {}

  getIsSidebarVisible(): boolean {
    return this.isSidebarVisibleSubject.value;
  }

  setIsSidebarVisible(isSidebarVisible: boolean): void {
    this.isSidebarVisibleSubject.next(isSidebarVisible);
  }
}
