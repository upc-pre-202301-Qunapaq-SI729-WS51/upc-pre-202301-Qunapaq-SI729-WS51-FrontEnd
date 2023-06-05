import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveAccountComponent } from './retrieve-account.component';

describe('RetrieveAccountComponent', () => {
  let component: RetrieveAccountComponent;
  let fixture: ComponentFixture<RetrieveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
