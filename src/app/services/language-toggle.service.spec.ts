import { TestBed } from '@angular/core/testing';

import { LanguageToggleService } from './language-toggle.service';

describe('LanguageToggleService', () => {
  let service: LanguageToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
