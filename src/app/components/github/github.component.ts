import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  constructor( private githubService: GithubService ) {
   this.githubService.getGithubInfo().subscribe(github =>{
        console.log(github)

   }); 
  // this.users:users = githubService.getGithubInfo()
  
  // this.http.getGithubInfo().subscribe()
  
  }
    

  ngOnInit(): void {
    // this.githubService.getGithubInfo().subscribe((users) => (this.users= users));
    

    
    }

    // this.http.get<ApiResponse>("https://api.github.com/users/").subscribe(data=>{
      // Succesful API request
    



  }


