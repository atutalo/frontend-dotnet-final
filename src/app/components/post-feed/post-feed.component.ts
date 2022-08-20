import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css'],
})
export class PostFeedComponent implements OnInit {
  tweets: Tweet[] = [];
  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {
    //on navigating to this component, subscribe to the method getMovies() to get the list of movies
    this.tweeterService.getTweets().subscribe((result) => {
      this.tweets = result;
    });
  }
}
