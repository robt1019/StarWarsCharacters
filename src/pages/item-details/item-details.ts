import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedCharacter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCharacter = navParams.get('selectedCharacter');
  }
}
