import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.prod';
import { News } from '../models/news.model';
import { Campaign } from '../models/campaign.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  posts: News[] = [];
  latestNews: News[] = [];
  campaigns: Campaign[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<News[]>(`${environment.apiUrl}/news`)
      .pipe(
        map((posts) =>
          posts.map((post) => ({
            ...post,
            fecha: new Date(post.date),
          }))
        )
      )
      .subscribe((posts) => {
        // Asignar la imagen de avatar para cada post
        this.posts = posts.map((post) => ({
          ...post,
          avatar: this.campaigns.find(
            (campaign) => campaign.id === post.campaignId
          )?.imageMini,
        }));
      });

    this.http.get<News[]>(`${environment.apiUrl}/news`).subscribe((news) => {
      this.latestNews = news;
    });

    this.http
      .get<Campaign[]>(`${environment.apiUrl}/campaigns`)
      .subscribe((campaigns) => {
        this.campaigns = campaigns;
      });
  }
}
