import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleForm2Component } from './sample-form2.component';

describe('SampleForm2Component', () => {
  let component: SampleForm2Component;
  let fixture: ComponentFixture<SampleForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
