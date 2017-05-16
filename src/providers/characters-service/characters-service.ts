import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character } from '../../models/character';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersServiceProvider {

    private apiUrl: string = "http://swapi.co/api/";

    private characters: Character[];

    constructor(private http: Http) { }

    private character(characterResponseObject): Character {
        return {
            name: characterResponseObject.name,
            imageUrl: 'http://www.theminifigurestore.co.uk/wp-content/uploads/2014/10/Santa-Hat-Clone-Trooper-Star-Wars-75056.png',
            detailsMinimal: [],
            detailsExpanded: []
        }
    }

    public getAll() {
        return this.http.get(this.apiUrl + "people/")
            .map(res => res.json().results)
            .map(characters => characters.map(character => this.character(character)))
    }

}
