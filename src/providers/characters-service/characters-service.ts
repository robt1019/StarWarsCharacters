import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Character } from '../../models/character';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class CharactersServiceProvider {

    private apiUrl: string = "http://swapi.co/api/";

    constructor(private http: Http) { }

    private character(characters): Character[] {
        const imageUrls = [
            "http://www.theminifigurestore.co.uk/wp-content/uploads/2014/10/Santa-Hat-Clone-Trooper-Star-Wars-75056.png",
            "https://mi-od-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/star%20wars/new%20full%20body/hansolo-ep7.png?l.r2=1310994804",
            "http://www.lapetitebrique.com/202-1626-thickbox/lego-custom-minifig-star-wars-aayla-secura-jedi.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/59/17/46/591746e74fd8be4bb7f5d56127a2f6b6.jpg",
            "http://i.ebayimg.com/00/s/NjAwWDQ4MA==/z/iywAAOxyUylTWORZ/$_32.JPG"
        ]
        return characters.map(characterResponseObject => {
            // randomly assign different pictures to characters to make ui look a bit less naff
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
    // publishReplay and refCount are to avoid unneccesary api calls 
    // http://www.syntaxsuccess.com/viewarticle/caching-with-rxjs-observables-in-angular-2.0
    public getAll() {
        return this.http.get(this.apiUrl + "people/")
            .map(res => res.json().results)
            .map(characterResponseObject => {
                return this.character(characterResponseObject)
            })
            .publishReplay(1).refCount();
    }

}

