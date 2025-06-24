import {Component, Inject, LOCALE_ID} from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    KENDO_GRID
  ]
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

