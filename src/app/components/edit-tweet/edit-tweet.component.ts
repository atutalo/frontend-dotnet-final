import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/models/tweet';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css'],
})
export class EditTweetComponent implements OnInit {
  tweet: Tweet = new Tweet();
  description: string = '';
  
  constructor(private tweeterService: TweeterService, private router: Router) {}
  ngOnInit(): void {}

  editTweet() {
    this.tweet.description = this.description;
    this.tweeterService.createTweet(this.tweet).subscribe(
      (result) => {
        this.tweet = result;
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
