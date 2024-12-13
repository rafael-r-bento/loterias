import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaCardComponent } from './loteria-card.component';

describe('LoteriaCardComponent', () => {
  let component: LoteriaCardComponent;
  let fixture: ComponentFixture<LoteriaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteriaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
