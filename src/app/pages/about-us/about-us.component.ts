import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Почему 90% наших клиентов становятся постоянными"

  titleForFlower="Гарантия свежести цветов"
  textForFlower="Заменим букет или вернем деньги"

  titleForWallet="Удобная оплата"
  textForWallet="Картой, наличными при получении"

  titleForDelivary="Осуществляем доставку"
  textForDelivary="Бесплатная доставка по городу"

}
