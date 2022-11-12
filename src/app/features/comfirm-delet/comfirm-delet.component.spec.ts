import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmDeletComponent } from './comfirm-delet.component';

describe('ComfirmDeletComponent', () => {
  let component: ComfirmDeletComponent;
  let fixture: ComponentFixture<ComfirmDeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmDeletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirmDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
