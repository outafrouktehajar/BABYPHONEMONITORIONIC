import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HoomePage} from '../hoome/hoome';





/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {
 
  @ViewChild('username') user;
	@ViewChild('password') password;


  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth, public navCtrl : NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentPage');
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
      this.navCtrl.setRoot(HoomePage);
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
  
  
 goHoome(){
   this.navCtrl.push(HoomePage);
 }
 
}
