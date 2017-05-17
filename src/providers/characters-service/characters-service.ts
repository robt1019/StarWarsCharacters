import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character } from '../../models/character';

import 'rxjs/add/operator/map';

@Injectable()
export class CharactersServiceProvider {

    private apiUrl: string = "http://swapi.co/api/";

    private characters: Character[];

    constructor(private http: Http) { }

    private character(characters): Character[] {
        const imageUrls = [
            "http://www.theminifigurestore.co.uk/wp-content/uploads/2014/10/Santa-Hat-Clone-Trooper-Star-Wars-75056.png",
            "https://mi-od-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/star%20wars/new%20full%20body/hansolo-ep7.png?l.r2=1310994804",
            null,
            "https://s-media-cache-ak0.pinimg.com/736x/59/17/46/591746e74fd8be4bb7f5d56127a2f6b6.jpg",
            null
        ]
        return characters.map(characterResponseObject => {
            // randomly assign different pictures to characters
            var imageIndex = Math.floor(Math.random() * 5);
            return {
                name: characterResponseObject.name,
                imageUrl: imageUrls[imageIndex],
                gender: characterResponseObject.gender,
                birthYear: characterResponseObject.birth_year,
                height: characterResponseObject.height,
                planetUrl: characterResponseObject.homeworld
            }
        });
    }

    // at the moment the api defaults to a 10 result limit.    
    public getAll() {
        return this.http.get(this.apiUrl + "people/")
            .map(res => res.json().results)
            .map(characterResponseObject => {
                return this.character(characterResponseObject)
            });
    }

}

