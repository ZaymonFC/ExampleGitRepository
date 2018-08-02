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
    if (this.username === 'example@example.com' && this.password === 'test') {
      this.router.navigateByUrl('account')
    } else {
      this.statusMessage = 'Wrong Username or Password Combination'
      this.showError = true
    }
  }
}
