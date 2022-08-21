import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css'],
})
export class EditTweetComponent implements OnInit {
  tweet: Tweet = new Tweet();
  newTweet: Tweet = new Tweet();

  description: string = '';
  currentTweetId: string = '';
  userService: any;

  constructor(
    private tweeterService: TweeterService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  editTweet() {
    this.tweet.tweetId = this.actRoute.snapshot.paramMap.get('tweetId')?.toString();
    
    this.newTweet.tweetId = this.tweet.tweetId;
    this.newTweet.description = this.description;
    this.tweeterService.updateTweet(this.newTweet).subscribe(
      (result) => {
        this.newTweet = result;
        this.router.navigate(['']);
      },
      (error) => {
        console.log('Error: ', error);
        if (error.status === 401 || error.status === 403) {
          this.router.navigate(['signin']);
        }
      }
    );
  }
}
