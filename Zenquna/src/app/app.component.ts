import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zenquna';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/campaign').subscribe((data) => {
      console.log('Campaigns:', data);
    });

    this.http.get('http://localhost:3000/news').subscribe((data) => {
      console.log('News:', data);
    });

    this.http.get('http://localhost:3000/comments').subscribe((data) => {
      console.log('Comments:', data);
    });
  }
}
