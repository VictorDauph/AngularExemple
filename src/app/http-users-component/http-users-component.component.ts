import { Component } from '@angular/core';
import { HttpClientUsersService } from '../services/http-client-users.service';

@Component({
  selector: 'app-http-users-component',
  imports: [],
  templateUrl: './http-users-component.component.html',
  styleUrl: './http-users-component.component.css'
})
export class HttpUsersComponentComponent {

  constructor(private httpClientUsersService: HttpClientUsersService) { }

  ngOnInit() {
    this.httpClientUsersService.getUsers()
      .subscribe(users => console.log(users))
  }
}
