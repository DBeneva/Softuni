import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  users = [
    {
      name: 'Ivan 2',
      age: 21
    },
    {
      name: 'Ivan 3',
      age: 23,
      courses: [3, 4]
    }
  ];
  name = 'Ben';
  username = 'adam';
  sayHi = (event: string) => alert(`Hi ${event}`);

  visible = true;
  toggleText = () => this.visible = !this.visible;
  classes = ['red', 'fancy'];
  isSpecial = true;

  addNewUserHandler(newUser: IUser): void {
    this.users = this.users.concat(newUser);
  }
}
