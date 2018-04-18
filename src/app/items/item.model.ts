import { Comment } from '../comments/comment.model';

export class Item {
  constructor(public name: string,
              public comments: Comment[]) {}
}
