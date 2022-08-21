import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  currentUsername: string = '';
  currentUserProfile: User = new User();

  signedInUser: User = new User();
  currentUser: User = new User();

  constructor(
    private tweeterService: TweeterService,
    private userService: UserService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllTweetsByUsername();
    this.getSignedInUser();
    this.getUserByUsername();
  }

  //get all tweets by the username in the URL
  getAllTweetsByUsername() {
    this.currentUsername = this.actRoute.snapshot.paramMap.get('userId') ?? '';
    console.log(this.currentUsername);
    this.tweeterService
      .getTweetsByUsername(this.currentUsername)
      .subscribe((result) => {
        this.userTweets = result;
        console.log(this.userTweets);
      });
  }

  //get current profile of signed in user
  getSignedInUser() {
    this.userService.getCurrentUser().subscribe((result) => {
      this.signedInUser = result;
    });
  }
  //get profile of username in the URL
  getUserByUsername() {
    this.currentUsername = this.actRoute.snapshot.paramMap.get('userId') ?? '';
    this.userService
      .getUserByUsername(this.currentUsername)
      .subscribe((result) => {
        this.currentUser = result;
      });
  }

}
