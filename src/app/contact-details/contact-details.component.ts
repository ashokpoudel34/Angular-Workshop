import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  haveRights : boolean = false;

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
