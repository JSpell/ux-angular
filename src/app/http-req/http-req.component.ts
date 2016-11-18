import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.scss']
})
export class HttpReqComponent implements OnInit {

  constructor(private http: Http) { 
    var jsonph = "https://jsonplaceholder.typicode.com";
    var scdev = "http://localhost.com/sitecore/-/item/v1/?sc_itemid={754AE32E-1082-4167-B5CA-F3A996D06420}";
    this.http.get(scdev).subscribe(res => {
      // console.log(res);
    });

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  ngOnInit() {
  }

}
