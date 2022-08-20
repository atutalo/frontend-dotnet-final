import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/app/models/tweet';
import { User } from 'src/app/models/user';
import { TweeterService } from 'src/app/services/tweeter.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css'],
})
export class PostFeedComponent implements OnInit {
  tweets: Tweet[] = [];
  currentUser: User = new User;

  constructor(
    private tweeterService: TweeterService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllTweets();
    //this.isLoggedIn();
  }

  getAllTweets() {
    this.tweeterService.getTweets().subscribe((result) => {
      this.tweets = result;
    });
  }
  // isLoggedIn() {
  //   this.userService.getCurrentUser().subscribe((result) => {
  //     if (result != undefined) {
  //         this.currentUser.isSignedIn = true;
  //       }
      
  //   });
  // }
}