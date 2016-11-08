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
      return true;
    }
    else{
      return false;
    }
  }

  addObjectItem(key:any, value:any) {
    if(key != undefined && key.trim() != "" && value != undefined && value.trim() != "") {
      var newObject = {};
      newObject[key] = value;
      this.itemsObject.update(newObject);
      return true;
    }
    else{
      return false;
    }
  }
}