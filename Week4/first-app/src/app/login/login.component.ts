import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

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

  constructor(private router: Router, private form: FormsModule, private http: HttpClient) {
    this.showError = false
  }

  ngOnInit() {
  }

  loginUser(event: Event) {
    event.preventDefault()
    // Query the express Server
    const url = '/login'
    const body = {
      'username': this.username,
      'password': this.password,
    }
    this.http.post(url, body)
      .subscribe(response => {
        console.log('Response Received')
        if (response != null) {
          if (response.auth) {
            // Set a user object in local storage
            if (window.localStorage) {
              console.log('storage ready')
              localStorage.setItem('userInfo', JSON.stringify(response.userObj))
            }

            this.router.navigateByUrl('account')
          }
        } else {
          this.statusMessage = 'Wrong Username or Password Combination'
          this.showError = true
        }
      },
      err => {
        console.log(err)
      })


    // if (this.username === 'test' && this.password === 'test') { 
  }
}
