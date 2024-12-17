import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListBackComponent } from './top-list-back.component';

describe('TopListBackComponent', () => {
  let component: TopListBackComponent;
  let fixture: ComponentFixture<TopListBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopListBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopListBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
