import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantacatarinanewsComponent } from './santacatarinanews.component';

describe('SantacatarinanewsComponent', () => {
  let component: SantacatarinanewsComponent;
  let fixture: ComponentFixture<SantacatarinanewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SantacatarinanewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SantacatarinanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
