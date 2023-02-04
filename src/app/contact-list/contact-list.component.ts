import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
 
  // @Input('contacts') contactList : Contact[] = [];
  // @Output('contactDetails') selectedContact = new EventEmitter<Contact>();

  // contactSelected(contact : Contact){
  //   this.selectedContact.emit(contact);
  // }

  constructor(private contactService : ContactService) {}

contactList : Contact[] = [];

  ngOnInit(): void {
    this.contactList = this.contactService.getContactList();
  }
}
