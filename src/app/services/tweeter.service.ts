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

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl);
  }

  getTweetsByUsername(username: string): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.baseUrl + '/' + username);
  }

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
    return this.http.put(this.baseUrl, tweet, { headers: reqHeaders });
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
