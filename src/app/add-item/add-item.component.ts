import { Component, OnInit, Input, Inject} from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  @Input() currentKeyValue:number = 0;

  items: any;
  itemsObject: any;
  public newName: string;
  public newKey: any;
  public customItem: any;

  constructor(public fbs: FirebaseService) {
    this.items = fbs.itemsList;
    this.itemsObject = fbs.itemsObject;
  }

  addItem() {
    this.newName = this.fbs.addListItem(this.newName);
  }

  addObject() {
    this.fbs.addObjectItem(this.newKey, this.newName);
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.addItem();
    }
  }

  ngOnInit() {
  }

}
