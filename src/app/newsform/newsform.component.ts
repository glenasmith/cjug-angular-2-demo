import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-newsform',
  templateUrl: 'newsform.component.html',
  styleUrls: ['newsform.component.css']
})
export class NewsformComponent implements OnInit {

  public myUrl = 'http://winning.com/'

  constructor() { }

  ngOnInit() {
  }

  OnFormSubmit(theForm) {
    console.log(theForm);
  }

}
