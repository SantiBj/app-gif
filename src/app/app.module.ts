import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GridComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
