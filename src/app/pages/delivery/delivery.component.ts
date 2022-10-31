import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  titleForText="Доставка"
textAboutDelivary="Режим работы с 10:00 до 19:00, приём заказов с 10:00 до 19:00\n" +
  "\n" +
  "Мы осуществляем бесплатную доставку цветов в Витебске.\n" +
  "\n" +
  "За наличный и безналичный расчет.\n" +
  "\n" +
  "Мы гарантируем, что ваши цветы или букет будут свежими и вовремя."
  constructor() { }

  ngOnInit(): void {
  }

}
