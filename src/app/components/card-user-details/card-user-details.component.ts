import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card-user-details',
  templateUrl: './card-user-details.component.html',
  styleUrls: ['./card-user-details.component.css'],
})
export class CardUserDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.user = this.userMockup;
  }

  constructor() {}

  @Input()
  user: User;

  userMockup: User = {
    login: 'github',
    id: 0,
    node_id: '',
    avatar_url:
      'https://s3.amazonaws.com/media.eremedia.com/uploads/2017/01/23143044/github4.jpg',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: 'Git Hub User',
    company: 'Not Available',
    blog: 'Not Available',
    location: 'Not Available',
    email: 'Not Available',
    hireable: false,
    bio: 'Millions of developers and companies build, ship, and maintain their software on GitHub the largest and most advanced development platform in the world.',
    twitter_username: 'Not Available',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: new Date().toJSON(),
    updated_at: '',
  };
}
