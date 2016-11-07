import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {

  public itemsList: FirebaseListObservable<any[]>;
  public itemsObject: FirebaseObjectObservable<any[]>;

  constructor(af: AngularFire) {
    this.itemsList = af.database.list('/items');
    this.itemsObject = af.database.object('/items');
  }

  addListItem(entry) {
    if(entry != undefined && entry.trim() != "") {
      this.itemsList.push(entry.trim());
      return(entry = "");
    }
    else{
      alert("Sorry!  We cannot save an empty item.");
    }
  }

  addObjectItem(key:any, value:any) {
    if(key != undefined) {
      var newObject = {};
      newObject[key] = value;
      this.itemsObject.update(newObject);
    }
    else{
      alert("A key and value are required");
    }
  }
}