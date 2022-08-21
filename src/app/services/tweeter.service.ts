import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';


@Injectable({
  providedIn: 'root',
})
export class TweeterService {
  baseUrl: string = 'https://localhost:5001/tweets';
  tokenKey: string = 'myFinalToken';

  constructor(private http: HttpClient) {}

  //get all tweets
  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl);
  }

  //get tweets by URL username
  getTweetsByUsername(username: string): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl + '/' + username);
  }

  //get tweets of current signed in user
  getMyTweets(): Observable<Tweet[]> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`,
    };
    return this.http.get<Tweet[]>(`${this.baseUrl}/myTweets`, {
      headers: reqHeaders,
    });
  }

  createTweet(tweet: Tweet) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`,
    };

    return this.http.post(this.baseUrl, tweet, { headers: reqHeaders });
  }

  updateTweet(tweet: Tweet) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`,
    };
    return this.http.put(this.baseUrl + '/' + tweet.tweetId, tweet, { headers: reqHeaders });
  }

  deleteTweet(tweetId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`,
    };
    return this.http.delete(this.baseUrl + '/' + tweetId, {
      headers: reqHeaders,
    });
  }
}
