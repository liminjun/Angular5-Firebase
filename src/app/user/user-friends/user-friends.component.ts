import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FriendService } from '../../services/friend.service';
import { Friend } from '../../services/friend';
import { User } from '../../services/user';
import { DomSanitizer } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {
  friends: Friend[];
  totalCount: number;
  pageSize = 3;
  currentCount = 0;
  previousCount = 0;
  isLeftVisible = false;

  isRightVisible = true;

  user: User;

  constructor(private userService: UserService,
    private friendService: FriendService,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getSavedUser().getValue();
    this.totalCount = this.user.friendcount;
    var that = this;
    this.friendService.getFirstPage(this.user.uid, this.pageSize)
      .subscribe(friends => {
        this.friends = friends;
        friends.forEach(function (item, index) {

          item["safeImage"] = that.sanitizer.bypassSecurityTrustResourceUrl(item.image);
        });

        let count: number = this.friends.length;
        this.currentCount = count;
        this.leftArrowVisible();
        this.rightArrowVisible();
      });
  }
  onLeft(): void {
    this.previous();
  }
  onRight(): void {
    this.next();
  }
  previous() {
    this.friendService.loadPreviousPage(this.user.uid,
      this.friends[0].uid,
      this.pageSize
    ).subscribe(friends => {
      this.friends = friends;
      const count: number = this.friends.length;
      this.currentCount -= this.previousCount;
      this.leftArrowVisible();
      this.rightArrowVisible();
    });
  }
  next() {
    this.friendService.loadNextPage(this.user.uid,
      this.friends[this.friends.length - 1].uid,
      this.pageSize
    ).subscribe(friends => {
      this.friends = friends;
      const count: number = this.friends.length;
      this.previousCount = count - 1;
      this.currentCount += this.previousCount;
      this.leftArrowVisible();
      this.rightArrowVisible();
    });
  }
  leftArrowVisible(): void {
    this.isLeftVisible = this.currentCount > this.pageSize;
  }
  rightArrowVisible(): void {
    this.isRightVisible = this.totalCount > this.currentCount;
  }

  onChat(id: string): void {
    this.router.navigate(['/chat', id]);
  }


}
