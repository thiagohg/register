import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-details',
  templateUrl: 'register-details.html',
})
export class RegisterDetailsPage {


  private db;
  public name;
  public email;
  public phone;

  private register;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.db = new PouchDB('Contacts');

    console.log('ionViewDidLoad RegisterDetailsPage');

    console.log(this.navParams.get('id'));

    if (this.navParams.get('id') != null) {
      this.db.get(this.navParams.get('id'), (err, result) => {
        if (!err) {
          this.register = result;
          this.name = result.name;
          this.email = result.email;
          this.phone = result.phone;
        }
      });
    }
  }

  save() {
    this.register.name = this.name;
    this.register.email = this.email;
    this.register.phone = this.phone;

    this.db.put(this.register, (err, result) => {
      if (!err) {
        alert('register updated');
        //this.navCtrl.pop();
      }
    });
  }


}
