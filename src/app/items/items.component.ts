import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Item } from './item.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: Item[];
  item: string;
  subscriptionToItems: Subscription;
  selectedIndex: number;

  constructor(public service: SharedService) {
  }

  ngOnInit() {
    this.items = this.service.getItems();
    this.service.items = JSON.parse(localStorage.getItem('items'));
    this.items = JSON.parse(localStorage.getItem('items'));
    this.subscriptionToItems = this.service.itemsChange
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
  }

  addNewItem() {
    const newItem = new Item(
      this.item,
      []
    );
    if (this.item) {
      this.service.items = this.service.items || [];
      this.service.addItem(newItem);
      this.item = null;
    }
  }

  selectedItem(index: number) {
    this.selectedIndex = index;
    this.service.selectedItem.next(index);
  }

  deleteItem(index: number) {
    this.service.deleteItem(index);
  }

  ngOnDestroy() {
    this.subscriptionToItems.unsubscribe();
  }
}
