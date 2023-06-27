import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@donor-components/home/home.component';
import { NewsComponent } from '@shared/news/news.component';
import { CampaignComponent } from '@shared/campaign/campaign.component';
import { CreateCampaignComponent } from './modules/create-campaign/components/create-campaign/create-campaign.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RetrieveAccountComponent } from './components/retrieve-account/retrieve-account.component';
import { MakeDonationComponent } from './modules/make-donation/make-donation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'campaign/:id', component: CampaignComponent },
  { path: 'createcampaign', component: CreateCampaignComponent },
  { path: 'makedonation', component: MakeDonationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'retrieve-account', component: RetrieveAccountComponent },
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: '**', pathMatch: 'full', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
