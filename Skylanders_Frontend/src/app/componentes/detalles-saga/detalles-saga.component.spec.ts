import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSagaComponent } from './detalles-saga.component';

describe('DetallesSagaComponent', () => {
  let component: DetallesSagaComponent;
  let fixture: ComponentFixture<DetallesSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesSagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
