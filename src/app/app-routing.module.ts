import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
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
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'edit',
    component: EditProfileComponent,
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
