import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  //standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages'
      }
    },
  ];

  constructor(@Inject(LOCALE_ID) localeId: string) {
    console.log(localeId);
  }
}

