import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

export interface UserInformation {
  username: string,
  birthdate: string,
  id: number
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userInformation: UserInformation
  username: string
  age: number
  dateOfBirth: Date

  constructor(private router: Router) {
    if (window.localStorage) {
      this.userInformation = JSON.parse(localStorage.getItem('userInfo'))

      if (this.userInformation == null) {
        this.router.navigateByUrl('login')
        return
      }
    }
  }

  ngOnInit() {
    if (window.localStorage) {

      this.dateOfBirth = new Date(this.userInformation.birthdate)
      this.username = this.userInformation.username
      // Calculate age from date of birth
      const ageDiff = Date.now() - Date.parse(this.userInformation.birthdate)
      const ageDate = new Date(ageDiff)

      this.age = Math.abs(ageDate.getUTCFullYear() - 1970)
      }
  }

}
