import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css'],
})
export class FirebaseComponent implements OnInit {

  //set items as a firebase list observable
  items: any;  
  itemsLoaded: boolean;
  numberOfItems: number;

  constructor(private fbs: FirebaseService) { 
    
    // get data from Firebase as a list and add it to this.items
    this.items = fbs.itemsList;

    // subscribe to the list observable and watch for it to be loaded.
    this.items.subscribe(result => {
      this.itemsLoaded = true;
      this.numberOfItems = result.length;
    });
  }

  removeItem(key) {
    //alert(key);
    this.items.remove(key);
  }

  ngOnInit() {
  }

}