import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaComponent } from './saga.component';

describe('SagaComponent', () => {
  let component: SagaComponent;
  let fixture: ComponentFixture<SagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
