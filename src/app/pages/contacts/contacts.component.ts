import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
public workTime="С 10:00 до 19:00"
 public weekend="Выходной: суббота, воскресенье";
  constructor() { }

  ngOnInit(): void {
  }

}
