import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


// 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
// 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

// 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
// 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
@Injectable({
  providedIn: 'root'
})
export class GithubService {

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





    
                                                                 