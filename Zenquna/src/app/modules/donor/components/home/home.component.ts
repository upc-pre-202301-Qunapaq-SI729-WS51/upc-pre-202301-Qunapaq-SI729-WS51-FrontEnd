import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { Campaign } from 'src/app/core/models/campaign.model';

interface Trend {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    const apiUrl = 'https:localhost:8080/api/zq/v1/campaigns';
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    this.http.get<any[]>(apiUrl, { headers }).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }
}
