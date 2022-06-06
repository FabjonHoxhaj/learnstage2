import { Component, OnInit, Injectable } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})

export class HashtagsComponent implements OnInit {

  arraySet: any = new Set();
  arrayFiles: any = new Set();

  constructor(private item: CrudService) { }

  ngOnInit(): void {
    this.item.readHashtags().subscribe(items => {
      for (let i of Object.values(items))
            this.arraySet.add(i)
    })
  }

  createHashtag() {
    let input = (<HTMLInputElement>document.getElementById("inputValue")).value;
    this.item.createHashtags(input);
  }

  loadHashtagFiles(hashtagString: any) {
    const fileName = this.item.readFiles(hashtagString).subscribe(data => console.log(data),
    error => console.error(error));
    this.arrayFiles.add(fileName);
    console.log(fileName);
  }

}
