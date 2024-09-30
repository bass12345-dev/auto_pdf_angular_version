import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPdfFormComponent } from './auto-pdf-form.component';

describe('AutoPdfFormComponent', () => {
  let component: AutoPdfFormComponent;
  let fixture: ComponentFixture<AutoPdfFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoPdfFormComponent]
    });
    fixture = TestBed.createComponent(AutoPdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
