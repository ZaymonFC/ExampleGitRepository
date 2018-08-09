import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  statusMessage = ''
  showError: boolean

  constructor(private router: Router, private form: FormsModule) {
    this.showError = false
  }

  ngOnInit() {
  }

  loginUser(event: Event) {
    event.preventDefault()
    // Query the express Server


    if (this.username === 'test' && this.password === 'test') {
      // Set a user object in local storage
      if (window.localStorage) {
        console.log('storage ready')

        const userObj = {
          'id': 1,
          'username': 'General Kenobi',
          'birthdate': new Date('July 1, 1997'),
        }

        console.log(userObj)

        localStorage.setItem('userInfo', JSON.stringify(userObj))
      }

      this.router.navigateByUrl('account')
    } else {
      this.statusMessage = 'Wrong Username or Password Combination'
      this.showError = true
    }
  }
}
