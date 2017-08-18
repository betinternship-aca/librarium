import { TestBed, inject } from '@angular/core/testing';

import { HistoryResolverService } from './history-resolver.service';

describe('HistoryResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryResolverService]
    });
  });

  it('should be created', inject([HistoryResolverService], (service: HistoryResolverService) => {
    expect(service).toBeTruthy();
  }));
});
