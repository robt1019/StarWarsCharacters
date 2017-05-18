import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { CharactersServiceProvider } from '../../providers/characters-service/characters-service';
import { PlanetsServiceProvider } from '../../providers/planets-service/planets-service';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
    providers: [CharactersServiceProvider]
})
export class ListPage implements OnInit {

    private characters;

    constructor(private navCtrl: NavController, private navParams: NavParams,
        private characterService: CharactersServiceProvider,
        private planetsService: PlanetsServiceProvider) { }

    private itemTapped(event, character) {
        this.navCtrl.push(ItemDetailsPage, {
            selectedCharacter: character
        });
    }

    ngOnInit() {
        this.characterService.getAll()
            .subscribe(characters => {
                this.characters = characters
                characters.forEach(character => {
                    this.planetsService.getPlanetByUrl(character.planetUrl)
                        .subscribe(planet => character.planet = planet)
                })
            }, err => window.alert('problem getting characters :( Please try again later'));
    }
}
