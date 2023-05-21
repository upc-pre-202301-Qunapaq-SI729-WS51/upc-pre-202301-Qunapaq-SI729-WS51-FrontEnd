import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YapeComponent } from './yape.component';

describe('YapeComponent', () => {
  let component: YapeComponent;
  let fixture: ComponentFixture<YapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
