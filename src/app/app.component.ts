import { Component } from '@angular/core';
// import {NgFor, NgIf} from '@angular/common';

import { UserComponent } from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  // selectedUserId = 'u1';
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id:string){
    // console.log('Selected user with id: ' + id);
    this.selectedUserId = id;
  }
}
