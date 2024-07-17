import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaDetallesComponent } from './saga-detalles.component';

describe('SagaDetallesComponent', () => {
  let component: SagaDetallesComponent;
  let fixture: ComponentFixture<SagaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagaDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
