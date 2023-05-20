import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  breadcrumb: string[] = [];
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumb();
      }
    });
  }

  generateBreadcrumb() {
    this.breadcrumb = [];

    const urlSegments = this.router.url.split('/');
    urlSegments.forEach((segment) => {
      if (segment !== '') {
        this.breadcrumb.push(segment);
      }
    });
  }

  getRouterLink(segment: string): string[] {
    return [`/${segment}`];
  }
}
