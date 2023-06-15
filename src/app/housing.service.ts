import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConnectableObservable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //url = 'http://localhost:3000/locations';
  url = 'http://localhost:8080/';
  postsURL = 'http://localhost:8080/authenticate';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url + "hello");
    const temp = await data.json() ?? [];
    console.log(temp);
    return temp;
  }

  async getAllHousingLocationsWithConfidence(query: String): Promise<HousingLocation[]> {
    const data = await fetch(`${this.url}uci?${query}`);
    const temp = await data.json() ?? [];
    console.log(temp);
    //this.getData();
    return temp;
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}users/${id}`);
    const temp = await data.json() ?? [];
    return temp;
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    this.getAuthenticatedData();
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  getAuthenticatedData() {
    let username = "user";
    let password = "password";
    let authorizationData = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2ODYwOTI1NTUsImlhdCI6MTY4NjA3NDU1NX0.U9CbjknV2Zom6gFoXbMAZtYtJry_kfWrQDmLYcQ3yPqQSy64GpONVosSB9t4H8IVewFegf-DdSo-YiBccO_wkw';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
      })
    };

    //return this.http.get<HousingLocation[]>(this.postsURL, httpOptions);

  }

  /*
    public getData() {
      this.http.get<any[]>(this.postsURL)
        .subscribe(data => {
          console.log("Here");
        },
          error => {
          }
        );
    }
  */
  //constructor(public http: HttpClient) { }

  constructor() { }

}
