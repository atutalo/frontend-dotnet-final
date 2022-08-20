import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweeterService } from 'src/app/services/tweeter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userTweets: Tweet[] = [];
  currentUser: User = new User;
    
  constructor(private tweeterService: TweeterService, private userService: UserService) {}

  ngOnInit(): void {
  this.getUserData();
  this.getUserProfile();

  }

  getUserData() {
    this.tweeterService.getUserTweets().subscribe((result) => {
      this.userTweets = result;
    });
  }
  getUserProfile() {
    this.userService.getCurrentUser().subscribe((result) => {
      this.currentUser = result;
    });
  }
}
