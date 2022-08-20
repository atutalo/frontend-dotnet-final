import { DatePipe } from "@angular/common";

export class User {
  userId?: string = '';
  username?: string = '';
  password?: string = '';
  firstName?: string = '';
  lastName?: string = '';
  location?: string = '';
  createdDate?: string = '';

  constructor(userId?: string, username?: string, password?: string, firstName?: string, lastName?: string, location?: string, createdDate?: string)
  {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.createdDate = DatePipe.toString();
  }
}
