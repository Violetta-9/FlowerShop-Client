import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment.prod";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FloweShop-Client';
  constructor(private translateService: TranslateService) { }
  ngOnInit(): void {

    this.translateService.getDefaultLang();
  }
}
