import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from '@shared/news/news.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from '@donor-components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CampaignComponent } from './shared/campaign/campaign.component';
import { FooterComponent } from '@shared/layout/footer/footer.component';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { SidevarComponent } from '@donor-components/sidevar/sidevar.component';
import { PaymentComponent } from '@donor-components/dialogs/payment/payment.component';
import { VisaComponent } from '@donor-components/dialogs/visa/visa.component';
import { YapeComponent } from './modules/donor/components/dialogs/yape/yape.component';
import { CreateCampaignComponent } from '@create-campaign-components/create-campaign/create-campaign.component';
import { MakeDonationComponent } from './modules/make-donation/make-donation.component';
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
    VisaComponent,
    PaymentComponent,
    CreateCampaignComponent,
    MakeDonationComponent,
    YapeComponent,
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
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PaymentComponent, VisaComponent],
})
export class AppModule {}
