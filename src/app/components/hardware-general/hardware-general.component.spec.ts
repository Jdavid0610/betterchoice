import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareGeneralComponent } from './hardware-general.component';

describe('HardwareGeneralComponent', () => {
  let component: HardwareGeneralComponent;
  let fixture: ComponentFixture<HardwareGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
