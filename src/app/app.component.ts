import { Observable } from 'rxjs/Observable';
import { UserService } from './user-list/user.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angularpruebas';
  private users$: Observable<any[]>;

  constructor(private userService: UserService) { }

  OnInit() {
    this.users$ = this.userService.getUsers();
    this.userService.loadDummyData();
  }

  createUser(user) {
    this.userService.createNewUser(user);
  }

  approveAll() {
    this.userService.approveAll();
  }
}
