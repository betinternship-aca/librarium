import {Component} from '@angular/core';
import {IUser} from '../../defines/IUser';
import {UserService} from '../../services/user.service';
import {MdDialogRef} from '@angular/material';
import {ILoginData} from '../../defines/ILoginData';

@Component({
  selector: 'app-user-create-account',
  templateUrl: './user-create-account.component.html',
  styleUrls: ['./user-create-account.component.scss']
})
export class UserCreateAccountComponent {
  data = {} as IUser;
  genders = ['female', 'male'];

  constructor(private userService: UserService,
              private dialogRef: MdDialogRef<ILoginData>) {
  }

  createUser() {
    this.userService.createUser(this.data)
      .subscribe(() => this.dialogRef.close());
  }
}
