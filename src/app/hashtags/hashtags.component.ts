import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {

  constructor(private item: OrdersService) { }

  ngOnInit(): void {
    this.item.getData().subscribe(items => {
      console.log(items);
    })
  }

}
