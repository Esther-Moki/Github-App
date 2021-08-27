import { Component, OnInit } from '@angular/core';

import { User } from '../../User';
import { USERS} from '../../mock-users';
import { GithubService }  from  '../../github.service';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users:User[] = [];

  constructor( private githubService:GithubService) {
  //  this.githubService.getGithubInfo().subscribe(github =>{
    
  //  });
    
  }

  ngOnInit(): void {
    this.githubService.getGithubInfo().subscribe((users) => (this.users= users));
  }

}
