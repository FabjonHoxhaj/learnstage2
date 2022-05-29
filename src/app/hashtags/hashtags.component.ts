import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {

  array: any = [];

  constructor(private item: CrudService) { }

  ngOnInit(): void {
    this.item.readData().subscribe(items => {
      for (let i of Object.values(items))
            this.array.push(i)
    })
  }

}
