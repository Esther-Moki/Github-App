import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

// import 'rxjs/add/operator/map';

//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


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // private apiUrl ='https://api.github.com/users'
  // public githubUserInfo!:any;
  // public githubRepoInfo!:any;

  private username!:string;
  private clientid = '2986e944918aa9f513f6';
  private clientsecret = 'abd91a7b6bf3070247a12a9d6a8ebac365f11e20 ';


  constructor( private http:HttpClient) { 
    console.log('service is now ready');
    this.username ='Esther-Moki';
  } 
  getGithubInfo():Observable<any>{
  return this.http.get<any>("https://api.github.com/users/" +  this.username + "?client_id=" + this.clientid +
  "&client_secret=" + this.clientsecret);
   }

   getGithubRepos():Observable<any>{
    return this.http.get<any>("https://api.github.com/users/" +  this.username + "/repos?client_id=" + this.clientid +
    "&client_secret=" + this.clientsecret);
     }
  
     updateGithub(username:string){
       this.username = username;

     }

}







  //  public  searchUser():Observable<any>{
    //  let apiUrl = 'https://api.github.com/users'+this.searchUser;
    // return this.http.get<any>(this.apiUrl)
    

    // public  getRepo():Observable<any[]>{
    //   let apiUrl = `https://api.github.com/users${this.searchUser}/repos`;
    //  return this.http.get<any[]>(this.apiUrl)
    //  }

    // public handleErrors(error:HttpErrorResponse){

    // };
    // https://api.github.com/users/USERNAME/repos


  // getGithubInfo():Observable<>{
  
      // return this.http.get<username>("https://api.github.com/users/");
     


                                                                 
  // }





// return this.http.get("https://api.github.com/users/" + this.username)
                                                                 