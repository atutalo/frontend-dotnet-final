import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    private actRoute: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUsername = this.actRoute.snapshot.paramMap.get('userId') ?? '';
    this.getAllTweetsByUsername();
    this.getSignedInUser();
    this.getUserByUsername();
  }

  //get all tweets by the username in the URL
  getAllTweetsByUsername() {
    this.tweeterService
      .getTweetsByUsername(this.currentUsername)
      .subscribe((result) => {
        this.userTweets = result;
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
    this.userService
      .getUserByUsername(this.currentUsername)
      .subscribe((result) => {
        this.currentUser = result;
      });
  }

  deleteButton(tweetId: any) {
    this.tweeterService.deleteTweet(tweetId).subscribe((result) => {
     window.location.reload();
    }, error => {
      console.log("Error: ", error);
      if (error.status === 401) {
        this.router.navigate(['signin']);
      }
    });
  }
}
