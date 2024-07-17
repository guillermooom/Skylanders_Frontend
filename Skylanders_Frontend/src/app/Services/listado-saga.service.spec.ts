import { TestBed } from '@angular/core/testing';

import { ListadoSagaService } from './listado-saga.service';

describe('ListadoSagaService', () => {
  let service: ListadoSagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoSagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
