import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrailerComponent } from './trailer/trailer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainBodyComponent } from './mainBody/mainBody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrailerComponent,
    NavbarComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
