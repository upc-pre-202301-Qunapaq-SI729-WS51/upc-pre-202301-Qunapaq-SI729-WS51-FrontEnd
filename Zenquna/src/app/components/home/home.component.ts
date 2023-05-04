import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.prod';
import { Campaign } from 'src/app/models/campaign.model';
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

  campaigns: Campaign[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Campaign[]>(`${environment.apiUrl}/campaigns`).subscribe(
      (campaigns) => {
        this.campaigns = campaigns;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onScroll(event: any) {
    const scrollOffset = event.target.scrollLeft;
    const visibleWidth = event.target.clientWidth;
    const totalWidth = event.target.scrollWidth;
    const lastTileWidth = totalWidth % (visibleWidth / 3);

    if (scrollOffset > totalWidth - visibleWidth - lastTileWidth) {
      event.target.scrollLeft = 0;
    }
  }
}
