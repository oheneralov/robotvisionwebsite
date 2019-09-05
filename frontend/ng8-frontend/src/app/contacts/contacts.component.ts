import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  public content: string;
  public title: string;
  constructor() {
    this.content = 'Contacts content';
    this.title = 'Title content'
   }

  ngOnInit() {
  }

}
