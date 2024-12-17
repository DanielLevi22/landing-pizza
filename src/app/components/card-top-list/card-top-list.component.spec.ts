import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopListComponent } from './card-top-list.component';

describe('CardTopListComponent', () => {
  let component: CardTopListComponent;
  let fixture: ComponentFixture<CardTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
