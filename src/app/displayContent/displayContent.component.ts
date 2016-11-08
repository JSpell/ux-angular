import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './displayContent.component.html',
  styleUrls: ['./displayContent.component.css'],
})
export class DisplayContentComponent implements OnInit {

  //set items as a firebase list observable
  items: any;  
  itemsLoaded: boolean;
  numberOfItems: number;

  constructor(private fbs: FirebaseService) { 
    
    // get data from Firebase as a list and add it to this.items
    this.items = fbs.itemsList;
    fbs.childDataPath = "items";

    // subscribe to the list observable and watch for it to be loaded.
    this.items.subscribe(result => {
      this.itemsLoaded = true;
      this.numberOfItems = result.length;
    });
  }

  removeItem(key) {
    this.items.remove(key);
  }

  ngOnInit() {
  }

}