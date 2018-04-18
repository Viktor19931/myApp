import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ItemsComponent } from './items/items.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedService } from './shared/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ItemsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
