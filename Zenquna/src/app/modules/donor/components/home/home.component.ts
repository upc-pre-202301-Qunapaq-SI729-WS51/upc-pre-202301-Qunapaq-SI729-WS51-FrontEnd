import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { Campaign } from 'src/app/core/models/campaign.model';
import { Observable } from 'rxjs';
import { UserService } from '@services/User.service';
import { DonorService } from '@services/Donor.service';

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

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private donorService: DonorService
  ) {}

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  ngOnInit() {
    //console.log(this.userService.getDonor().username);
    //const username = this.userService.getDonor().username;
    // console.log(this.donorService.getDonorByUsername(username));
    // console.log(this.userService.getDonor());
    //this.donorService.setDonorByUsername(this.userService.getDonor().username);
    //console.log(this.donorService.getDonor());
    this.fetchCampaigns();
  }

  fetchCampaigns() {
    const apiUrl = 'https://zenquna.uc.r.appspot.com/api/zq/v1/campaigns';
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    this.http.get<Campaign[]>(apiUrl, { headers }).subscribe(
      (campaigns) => {
        this.campaign1 = campaigns[0];
        this.campaigns = campaigns.slice(1); // empezamos la lista a partir de la segunda campaña
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }
}
