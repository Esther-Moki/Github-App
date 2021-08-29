import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GithubService }  from  '../../github.service';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github!:any;
  repos!:any;
  username!:string;
  // public githubUser!:string;

  // public githubUserInfo!:any;
  // public githubRepoInfo!:any;

  constructor(private githubService: GithubService){}

  public searchUser(){
    this.githubService.updateGithub(this.username);
    this.githubService.getGithubInfo().subscribe(github =>{
      console.log(github)
      this.github = github;
    });
    
    this.githubService.getGithubRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;

    });

  }

    
  
  
    ngOnInit(): void {}

  }



    


  

    


  


