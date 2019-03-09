import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BabyPage } from '../baby/baby' ;
import { ParentPage } from '../parent/parent' ;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController) {

  }
  
  
  goParent(){
    this.navCtrl.push(ParentPage);
  }

  goBaby(){
    this.navCtrl.push(BabyPage);
  }
  
  
}

