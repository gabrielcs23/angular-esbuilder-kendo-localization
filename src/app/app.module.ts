import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {GridModule} from "@progress/kendo-angular-grid";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  // declarations: [AppComponent],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule
  ],
  // bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
