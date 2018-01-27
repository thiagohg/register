import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private db;
  public name;
  public email;
  public phone;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.createDB();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad RegisterPage');
    this.name = "";
    this.email = "";
    this.phone = "";
  }

  createDB() {
    this.db = new PouchDB('Contacts');
  }

  save() {
    this.db.post({
      name: this.name,
      email: this.email,
      phone: this.phone
    }, (err, result) => {
      if (!err) {
        alert('criado!');
      }
    }
    )
  }

}
