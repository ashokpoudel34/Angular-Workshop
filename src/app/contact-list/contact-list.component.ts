import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
 
  @Input('contacts') contactList : Contact[] = [];
  @Output('contactDetails') selectedContact = new EventEmitter<Contact>();

  constructor() {}

  contactSelected(contact : Contact){
    this.selectedContact.emit(contact);
  }

  ngOnInit(): void {}
}
