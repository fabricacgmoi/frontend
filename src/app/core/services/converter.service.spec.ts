import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';

xdescribe('ConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConverterService = TestBed.get(ConverterService);
    expect(service).toBeTruthy();
  });
});
