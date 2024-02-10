import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShppingComponent } from './shpping.component';

describe('ShppingComponent', () => {
  let component: ShppingComponent;
  let fixture: ComponentFixture<ShppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
