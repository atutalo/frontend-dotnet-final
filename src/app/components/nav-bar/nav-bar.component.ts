import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  currentUser: User = new User;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  signOut() {
    this.userService.signout();
    window.alert('User Signed Out');
    this.router.navigate(['signin']).then(() => {
      window.location.reload();
    });
  }
  getCurrentUser() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }
}
