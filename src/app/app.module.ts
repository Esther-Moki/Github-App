import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import{ RouterModule, Routes} from '@angular/router';



import{GithubService} from './github.service';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const appRoutes:Routes =[
  {path: '', component:GithubComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes,{ enableTracing:true})
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
