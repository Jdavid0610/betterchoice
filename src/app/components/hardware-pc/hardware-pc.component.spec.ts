import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarePCComponent } from './hardware-pc.component';

describe('HardwarePCComponent', () => {
  let component: HardwarePCComponent;
  let fixture: ComponentFixture<HardwarePCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwarePCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwarePCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
