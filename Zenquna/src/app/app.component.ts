import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zenquna';
  isHiddenComponent: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get('https://zenquna.uc.r.appspot.com/api/zq/v1/campaigns')
      .subscribe((data) => {
        console.log('Campaigns:', data);
      });

    this.http
      .get('https://zenquna.uc.r.appspot.com/api/zq/v1/news')
      .subscribe((data) => {
        console.log('News:', data);
      });

    this.http
      .get('https://zenquna.uc.r.appspot.com/api/zq/v1/comments')
      .subscribe((data) => {
        console.log('Comments:', data);
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;

        this.isHiddenComponent =
          route.includes('/sign-in') ||
          route.includes('/create-account') ||
          route.includes('/retrieve-account');
      }
    });
  }
}
