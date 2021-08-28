import { Component } from '@angular/core';
import { GithubService }  from  './github.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GithubService],
})
export class AppComponent {
  title = 'Github';
}
