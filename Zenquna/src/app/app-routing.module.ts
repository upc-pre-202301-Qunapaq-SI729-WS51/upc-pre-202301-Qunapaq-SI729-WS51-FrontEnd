import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './news/news.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RetrieveAccountComponent } from './components/retrieve-account/retrieve-account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  { path: 'campaign', component: CampaignComponent },
  { path: 'campaign/:id', component: CampaignComponent },
  { path: 'createcampaign', component: CreateCampaignComponent },
  {path: 'sign-in', component: SignInComponent},
  {path:'create-account', component:CreateAccountComponent},
  {path: 'retrieve-account', component:RetrieveAccountComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
