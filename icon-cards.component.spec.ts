import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardsComponent } from './icon-cards.component';

describe('IconCardsComponent', () => {
  let component: IconCardsComponent;
  let fixture: ComponentFixture<IconCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
