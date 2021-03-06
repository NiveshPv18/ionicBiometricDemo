import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private storage: StorageService) {}

  logout() {
    this.storage.removeItem('loggedIn');
    this.router.navigateByUrl('login')
  }
}
