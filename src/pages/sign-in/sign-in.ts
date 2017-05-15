import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

   userDetails = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(username, password) {
    this.navCtrl.push(ItemDetailsPage, {
      
    })
  }
}
