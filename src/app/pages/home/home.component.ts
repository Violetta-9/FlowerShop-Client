import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textOne="Зачем ждать повода, чтобы кто-то"
  public textTwo=" почувствовал себя особенным?!"

  constructor() { }

  ngOnInit(): void {
  }

}
