import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweeterService } from 'src/app/services/tweeter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  tweet: Tweet = new Tweet();
  description: string = '';
  constructor(private tweeterService: TweeterService, private router: Router) {}

  ngOnInit(): void {}

  createTweet() {
    this.tweet.description = this.description;
    this.tweeterService.createTweet(this.tweet).subscribe(
      (result) => {
        this.tweet = result;
        this.router.navigate(['']);
        this.router.navigate(['tweets']);
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
