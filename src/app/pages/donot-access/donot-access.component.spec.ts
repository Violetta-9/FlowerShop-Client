import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonotAccessComponent } from './donot-access.component';

describe('DonotAccessComponent', () => {
  let component: DonotAccessComponent;
  let fixture: ComponentFixture<DonotAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonotAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonotAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
