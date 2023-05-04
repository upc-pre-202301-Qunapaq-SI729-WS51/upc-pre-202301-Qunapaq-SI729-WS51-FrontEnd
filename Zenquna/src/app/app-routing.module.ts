import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CampaignComponent } from './components/campaign/campaign.component';
//import { HomeComponent } from './components/home/home.component';
//import { NewsComponent } from './news/news.component';

const routes: Routes = [
  /*{path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},*/
  { path: 'news', component: NewsComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: '', pathMatch: 'full', redirectTo: 'campaign' }, //
  { path: '**', pathMatch: 'full', redirectTo: 'campaign' }, //
];
const routes: Routes = [{ path: 'news', component: NewsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
