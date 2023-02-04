import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact : any = [];

  // haveRights : boolean = false;

  // @Input('contactDetails') contact : Contact = {
  //   id: 1,
  //   title: "",
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone1: "",
  //   phone2: "",
  //   address: {
  //     line1: "",
  //     line2: "",
  //     city: "",
  //     state: "",
  //     zip: "",
  //     country: "",
  //   },
  //   note: "",
  // } ;

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked1(){
    console.log("Button is clicked...");
  }
  btnClicked2(){
    console.log("Button is clicked...");
  }

}
