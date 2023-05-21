import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampaignComponent } from './modules/create-campaign/components/create-campaign/create-campaign.component';
import { NewsComponent } from '@shared/news/news.component';
import { CampaignComponent } from '@shared/campaign/campaign.component';
import { HomeComponent as DonorHomeComponent } from '@donor-components/home/home.component';
import { HomeComponent as OrganizationHomeComponent } from '@organization-components/home/home.component';

const routes: Routes = [
  {
    path: 'd',
    children: [
      { path: 'home', component: DonorHomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'campaign', component: CampaignComponent },
      { path: 'campaign/:id', component: CampaignComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
  {
    path: 'o',
    children: [
      { path: 'home', component: OrganizationHomeComponent },
      // aquí van las demás rutas para la organización
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/d/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/d/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
