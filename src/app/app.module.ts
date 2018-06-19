import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AclDirective } from './acl.directive';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AclDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
