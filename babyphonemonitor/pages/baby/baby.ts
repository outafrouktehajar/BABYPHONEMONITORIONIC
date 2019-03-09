import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth' ;
import { RegisterPage } from '../register/register';



/**
 * Generated class for the BabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baby',
  templateUrl: 'baby.html',
})
export class BabyPage {

  @ViewChild('username') user;
	@ViewChild('password') password;


  constructor(
    private alertCtrl: AlertController,
    private fire: AngularFireAuth, 
    public navCtrl : NavController,
    public navParams: NavParams
    ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BabyPage');
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got some data ',this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( BabyPage );
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
      
    });
  	console.log('Would sign in  with ', this.user.value, this.password.value);
  }


  goRegister(){
    this.navCtrl.push(RegisterPage);
  } 


  
}
