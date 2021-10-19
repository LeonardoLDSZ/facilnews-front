import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlumenaunewsComponent } from './blumenaunews.component';

describe('BlumenaunewsComponent', () => {
  let component: BlumenaunewsComponent;
  let fixture: ComponentFixture<BlumenaunewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlumenaunewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlumenaunewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
