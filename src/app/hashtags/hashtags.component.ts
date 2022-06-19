import { Component, OnInit, Injectable } from '@angular/core';
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
    this.item.readHashtags().subscribe(items => {
      this.arraySet= new Set();
      for (let i of Object.values(items))
            this.arraySet.add(i)
    })
  }

  createHashtag() {
    let input = (<HTMLInputElement>document.getElementById("inputValue")).value;
    const hashtag = input;
    if(hashtag.startsWith("#")) {
      this.item.createHashtags(input);
    }
   else {
    this.item.createHashtags("#" + input);
   }
   
  }

  loadHashtagFiles(hashtagString: any) {
    this.item.readFiles(hashtagString);
    this.item.saveHashtag(hashtagString);
  }

}
