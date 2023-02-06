import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor() { }
  fname :string = "Ashok";
  first_name : string = "";

  ngOnInit(): void {
  }

  addContact(frmAdd:NgForm){
    console.log(frmAdd);
  }
}
