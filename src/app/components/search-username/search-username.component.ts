import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-username',
  templateUrl: './search-username.component.html',
  styleUrls: ['./search-username.component.css'],
})
export class SearchUsernameComponent {
  @Output() onSearch = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  getUser(userName: string) {
    this.userService.getUser(userName).subscribe((user) => {
      this.onSearch.emit(user);
    });
  }
}
