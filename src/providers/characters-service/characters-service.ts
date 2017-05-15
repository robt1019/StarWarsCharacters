import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CharactersServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CharactersServiceProvider {

  private apiUrl: string = "http://swapi.co/api/";

  constructor(public http: Http) {
  }

  public getAll() {
    return this.http.get(this.apiUrl + "people/")
    .map(res => res.json())
    .subscribe(data => console.log(data));
  }

}
