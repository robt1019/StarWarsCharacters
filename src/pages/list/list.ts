import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { CharactersServiceProvider } from '../../providers/characters-service/characters-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [CharactersServiceProvider]
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  characters;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public characterService: CharactersServiceProvider) {
    characterService.getAll().subscribe(data => this.characters = data.results);
  }

  itemTapped(event, character) {
    this.navCtrl.push(ItemDetailsPage, {
      selectedCharacter: character
    });
  }
}
