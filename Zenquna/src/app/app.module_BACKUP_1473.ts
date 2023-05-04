import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatRadioModule } from '@angular/material/radio';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent, SidevarComponent],
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
>>>>>>> features/News
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatRadioModule,
    // MatCarouselModule.forRoot(),
=======
    MatCardModule,
    MatIconModule,
    MatButtonModule
>>>>>>> features/News
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
