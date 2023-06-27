import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { Campaign } from 'src/app/core/models/campaign.model';
import { Observable } from 'rxjs';

interface Trend {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class HomeComponent implements OnInit {
  trends: Trend[] = [
    {
      title: 'Tendencia 1',
      imageUrl: 'assets/trend1.jpg',
    },
    {
      title: 'Tendencia 2',
      imageUrl: 'assets/trend2.jpg',
    },
    {
      title: 'Tendencia 3',
      imageUrl: 'assets/trend3.jpg',
    },
    {
      title: 'Tendencia 4',
      imageUrl: 'assets/trend4.jpg',
    },
    {
      title: 'Tendencia 5',
      imageUrl: 'assets/trend5.jpg',
    },
    {
      title: 'Tendencia 6',
      imageUrl: 'assets/trend6.jpg',
    },
  ];
  campaign1: Campaign | undefined;
  campaigns!: any[];

  constructor(private http: HttpClient) {}

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  ngOnInit() {
    this.fetchCampaigns();
  }

  fetchCampaigns() {
    const apiUrl = 'https://zenquna.uc.r.appspot.com/api/zq/v1/campaigns';
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    this.http.get<any[]>(apiUrl, { headers }).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
        this.campaign1 = campaigns[0];
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }
}
