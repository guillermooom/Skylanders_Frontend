import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoDetalleComponent } from './elemento-detalle.component';

describe('ElementoDetalleComponent', () => {
  let component: ElementoDetalleComponent;
  let fixture: ComponentFixture<ElementoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
