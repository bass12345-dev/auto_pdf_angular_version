import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPdfComponent } from './all-pdf.component';

describe('AllPdfComponent', () => {
  let component: AllPdfComponent;
  let fixture: ComponentFixture<AllPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPdfComponent]
    });
    fixture = TestBed.createComponent(AllPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
