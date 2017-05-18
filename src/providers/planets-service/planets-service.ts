import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlanetsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlanetsServiceProvider {

  constructor(private http: Http) {}

  public getPlanetByUrl(planetUrl) {
      return this.http.get(planetUrl).map(res => res.json().getResults);
  }

}
