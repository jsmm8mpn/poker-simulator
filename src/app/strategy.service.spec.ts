import {
  TestBed,
  inject
} from '@angular/core/testing';

import { StrategyService } from './strategy-service.service';

describe('StrategyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrategyService]
    });
  });

  it('should be created', inject([StrategyService], (service: StrategyService) => {
    expect(service).toBeTruthy();
  }));
});
