import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import{GithubService} from './github.service';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
