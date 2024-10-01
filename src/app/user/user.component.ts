import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// import {DUMMY_USERS} from "../dummy-users";
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //  using signals
  //  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //  imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar)
   //  onSelectUser(){
   //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);  
   //   this.selectedUser.set(DUMMY_USERS[randomIndex])  
   //  } 

  //  using input signal
  // avatar = input<string>();
  //  avatar = input.required<string>();
  //  name = input.required<string>();
  //  imagePath = computed( ()=>{
  //    return 'assets/users/'+ this.avatar();
  //  });
  //  onSelectUser() {
  //   // it can't be set becase it is read only.
  //   // this.avatar.set(); 
  //  }



  //   end using signals


  //  select = output<string>(); this is replacement of Output decorator function.
  // onSelectUser() {
  //   this.select.emit(this.id);
  // }
   

  //  selectedUser = DUMMY_USERS[randomIndex];
  //  get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  //  }

   
  //  onSelectUser() {
  //   // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  //   // console.log('Clicked!');
  //  }

  
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string;

  //  replacement of this tree Input is this Input user object.

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); 
  

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
