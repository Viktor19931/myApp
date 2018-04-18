import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SharedService } from '../shared/shared.service';
import { Comment } from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  subscriptionSelectedIndex: Subscription;
  selectedIndex: number;
  comments: Comment[];
  post: string;

  constructor(private service: SharedService) {
  }

  ngOnInit() {
    this.subscriptionSelectedIndex = this.service.selectedItem
      .subscribe(
        (index: number) => {
          this.selectedIndex = index;
          this.comments = this.service.getComments(index);
        }
      );
  }

  postComment(e) {
    if (e.ctrlKey && e.keyCode === 13) {
      if (this.post) {
        this.service.setPost(this.selectedIndex, this.post);
      }
      this.post = null;
    }
  }

  ngOnDestroy() {
    this.subscriptionSelectedIndex.unsubscribe();
  }

}
