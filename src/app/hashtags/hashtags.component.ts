import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {

  arraySet: any = new Set();

  constructor(private item: CrudService) { }

  ngOnInit(): void {
    this.item.readData().subscribe(items => {
      for (let i of Object.values(items))
            this.arraySet.add(i)
    })
  }

  createHashtag() {
    let input = (<HTMLInputElement>document.getElementById("inputValue")).value;
    this.item.createData(input);
    //this.arraySet.add(input);
  }

}
