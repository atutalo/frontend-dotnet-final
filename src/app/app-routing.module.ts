import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTweetComponent } from './components/edit-tweet/edit-tweet.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    //an empty home page should go to the post-feed component
    path: '',
    pathMatch: 'full',
    component: PostFeedComponent,
  },
  {
    path: 'tweets',
    component: PostFeedComponent,
  },
  { path: 'signin', component: SignInComponent },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile/:userId',
    component: UserProfileComponent,
  },
  {
    path: 'edit',
    component: EditTweetComponent,
  },
  {
    path: 'edit/:tweetId',
    component: EditTweetComponent,
  },
  {
    path: 'search',
    component: SearchUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
