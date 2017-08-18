import { TestBed, inject } from '@angular/core/testing';

import { ReservationsResolverService } from './reservations-resolver.service';

describe('ReservationsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationsResolverService]
    });
  });

  it('should be created', inject([ReservationsResolverService], (service: ReservationsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
