import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSagaComponent } from './listado-saga.component';

describe('ListadoSagaComponent', () => {
  let component: ListadoSagaComponent;
  let fixture: ComponentFixture<ListadoSagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoSagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoSagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
