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
  currentUser: User = new User();
  constructor(
    private tweeterService: TweeterService,
    private userService: UserService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllTweetsByUsername();
    this.getUserByUsername();
    //this.getUserProfile();
  }

  getAllTweetsByUsername() {
    this.currentUsername = this.actRoute.snapshot.paramMap.get('userId') ?? '';
    console.log(this.currentUsername);
    this.tweeterService.getTweetsByUsername(this.currentUsername).subscribe((result) => {
    this.userTweets = result;
    console.log(this.userTweets);
    });
  }
  getUserProfile() {
    this.userService.getCurrentUser().subscribe((result) => {
      this.currentUser = result;
      console.log(this.currentUser.createdDate);
    });
  }
  getUserByUsername() {
    this.currentUsername = this.actRoute.snapshot.paramMap.get('userId') ?? '';
    this.userService.getUserByUsername(this.currentUsername).subscribe((result) => {
      this.currentUser = result;
  });
  }
}
