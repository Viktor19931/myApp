import { Subject } from 'rxjs/Subject';

import { Item } from '../items/item.model';
import { Comment } from '../comments/comment.model';

export class SharedService {
  itemsChange = new Subject<Item[]>();
  selectedItem = new Subject<number>();
  items: Item[] = [];

  constructor() {}

  getItems() {
    return this.items.slice();
  }

  addItem(item: Item) {
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsChange.next(this.items.slice());
    console.log(this.items);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsChange.next(this.items.slice());
  }

  getComments(index: number) {
    return this.items[index].comments;
  }

  setPost(index: number, comment: string) {
    this.items[index].comments.push(new Comment(comment));
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsChange.next(this.items.slice());
  }
}
