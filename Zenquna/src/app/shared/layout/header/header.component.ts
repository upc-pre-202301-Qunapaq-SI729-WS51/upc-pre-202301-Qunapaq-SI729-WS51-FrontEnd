import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  breadcrumb: { label: string; url: string }[] = [];

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumb();
      });
  }

  generateBreadcrumb() {
    this.breadcrumb = [];

    const urlSegments = this.router.url.split('/');
    let url = '';

    urlSegments.forEach((segment, index) => {
      if (segment !== '') {
        url += `/${segment}`;
        if (index !== 1) {
          // Excluir el primer segmento después de 'd' o 'o'
          this.breadcrumb.push({ label: segment, url });
        }
      }
    });
  }

  getRouterLink(segment: string): string {
    const index = this.breadcrumb.findIndex((bc) => bc.label === segment);
    return this.breadcrumb[index]?.url;
  }
}
