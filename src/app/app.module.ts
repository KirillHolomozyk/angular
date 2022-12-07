import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { LastPageComponent } from './components/last-page/last-page.component';
import { FirstTableComponent } from './components/first-table/first-table.component';
import { SecondTableComponent } from './components/second-table/second-table.component';
import { ThirdTableComponent } from './components/third-table/third-table.component';
import { First2TableComponent } from './components/first2-table/first2-table.component';
import { Second2TableComponent } from './components/second2-table/second2-table.component';
import { First12TableComponent } from './components/first1.2-table/first1.2-table.component';
import { First13TableComponent } from './components/first1.3-table/first1.3-table.component';
import { Second12TableComponent } from './components/second12-table/second12-table.component';
import { Second13TableComponent } from './components/second13-table/second13-table.component';
import { Third12TableComponent } from './components/third12-table/third12-table.component';
import { Third13TableComponent } from './components/third13-table/third13-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    LastPageComponent,
    FirstTableComponent,
    SecondTableComponent,
    ThirdTableComponent,
    First2TableComponent,
    Second2TableComponent,
    First12TableComponent,
    First13TableComponent,
    Second12TableComponent,
    Second13TableComponent,
    Third12TableComponent,
    Third13TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
