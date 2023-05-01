import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

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
