import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  currentUser: User = new User();
  signedInUser: User = new User();

  constructor(
    private tweeterService: TweeterService,
    private userService: UserService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllTweets();
    this.getCurrentUser();
  }

  getAllTweets() {
    this.tweeterService.getTweets().subscribe((result) => {
      this.tweets = result;
    });
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      console.log(`Profile current user is: ${this.currentUser.username}`);
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