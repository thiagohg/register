import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import PouchDB from 'pouchdb';
import { RegisterDetailsPage } from '../register-details/register-details';
import { PouchProvider } from '../../providers/pouch/pouch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PouchProvider]
})
export class HomePage {

  // private db;
  public name;
  public email;
  public phone;
  public registers;

  public db = new PouchDB('Contacts');
  public remoteCouch = 'http://127.0.0.1:5984/test1';
  public remoteDB = new PouchDB('http://localhost:5984/test1');

  constructor(
    public navCtrl: NavController,
    public pouch_provider: PouchProvider
  ) {

  }

  ionViewDidEnter() {

    this.pouch_provider.getAdress().subscribe(data => {
      
      console.log("dentro: "+data);
    });

    this.refresh();
    this.sync();
  }

  sync() {
    this.db.replicate.to(this.remoteDB).on('complete', function () {
      // yay, we're done!
      console.log("sync was done");
    }).on('error', function (err) {
      // boo, something went wrong!
    });
  }



  edit(register) {
    this.navCtrl.push(RegisterDetailsPage, { id: register._id });
    console.log(register.id);
  }

  delete(register) {
    this.db.remove(register, (err, result) => {
      if (!err) {
        alert('register deleted');
        this.refresh();
      }

    });
  }

  refresh() {
    this.db = new PouchDB('Contacts');
    this.registers = [];

    this.db.allDocs({ include_docs: true }, (err, result) => {
      if (!err) {
        let rows = result.rows;
        console.log(rows);

        for (let i = 0; i < rows.length; i++) {
          this.registers.push(rows[i].doc);
          console.log(this.registers[i]);
        }
      }
    });
  }
}



