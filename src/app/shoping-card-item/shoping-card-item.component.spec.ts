import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCardItemComponent } from './shoping-card-item.component';

describe('ShopingCardItemComponent', () => {
  let component: ShopingCardItemComponent;
  let fixture: ComponentFixture<ShopingCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
