import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { CharactersServiceProvider } from '../../providers/characters-service/characters-service';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
    providers: [CharactersServiceProvider]
})
export class ListPage implements OnInit {

    private characters;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public characterService: CharactersServiceProvider) { }

    private itemTapped(event, character) {
        this.navCtrl.push(ItemDetailsPage, {
            selectedCharacter: character
        });
    }

    ngOnInit() {
        this.characterService.getAll()
            .subscribe(characters => this.characters = characters);
    }
}
