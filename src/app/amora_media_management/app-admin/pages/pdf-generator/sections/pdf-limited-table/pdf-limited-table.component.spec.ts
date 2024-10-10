import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLimitedTableComponent } from './pdf-limited-table.component';

describe('PdfLimitedTableComponent', () => {
  let component: PdfLimitedTableComponent;
  let fixture: ComponentFixture<PdfLimitedTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfLimitedTableComponent]
    });
    fixture = TestBed.createComponent(PdfLimitedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
