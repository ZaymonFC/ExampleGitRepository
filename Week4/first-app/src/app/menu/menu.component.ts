import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showLogoutButton: boolean

  constructor(private router: Router) {
    this.showLogoutButton = false
  }

  ngOnInit() {
    if (window.localStorage) {
      if (localStorage.getItem('userInfo') != null) {
        this.showLogoutButton = true
      }
    }
  }

  logOut() {
    if (window.localStorage) {
      localStorage.removeItem('userInfo')
      console.log('removing user data from local storage')
      this.router.navigateByUrl('login')
    }
  }

}
