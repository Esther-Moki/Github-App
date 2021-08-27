import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from './User';
// import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl ='https://api.github.com/users'

  private username!:string;
  // private clientid = '2986e944918aa9f513f6';
  // private clientsecret = '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';


  constructor( private http:HttpClient) { 
    console.log('service is now ready')
    this.username ='Esther-Moki';

  }
  getGithubInfo():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);

  }


  // getGithubInfo():Observable<>{
  
      // return this.http.get<username>("https://api.github.com/users/");
     


                                                                 
  // }
}




// return this.http.get("https://api.github.com/users/" + this.username)
                                                                 