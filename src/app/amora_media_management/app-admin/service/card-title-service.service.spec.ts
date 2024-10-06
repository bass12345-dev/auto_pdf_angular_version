import { TestBed } from '@angular/core/testing';

import { CardTitleServiceService } from './card-title-service.service';

describe('CardTitleServiceService', () => {
  let service: CardTitleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTitleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
