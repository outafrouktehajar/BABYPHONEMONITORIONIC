import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinPage } from '../fin/fin';

/**
 * Generated class for the HoomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoome',
  templateUrl: 'hoome.html',
})
export class HoomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoomePage');
  }
   
  goFin(){
    this.navCtrl.push(FinPage);
  }
}
