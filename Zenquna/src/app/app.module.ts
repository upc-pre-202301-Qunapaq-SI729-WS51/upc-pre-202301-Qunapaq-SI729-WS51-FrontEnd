import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CampaignComponent } from './components/campaign/campaign.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { PaymentComponent } from './components/dialogs/payment/payment.component';
import { VisaComponent } from './components/dialogs/visa/visa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidevarComponent,
    CampaignComponent,
    PaymentComponent,
    VisaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PaymentComponent, VisaComponent],
})
export class AppModule {}
