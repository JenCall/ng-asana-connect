import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLanguageChanged: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.get('profile').subscribe((res) => {
      console.log(res);
    });
  }

  changeLocale(locale: string) {
    this.translate.use(locale);
  }

  chooseLocale() {
    this.isLanguageChanged = !this.isLanguageChanged;
  }
}
