import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioGymPage } from './ejercicio-gym.page';

describe('EjercicioGymPage', () => {
  let component: EjercicioGymPage;
  let fixture: ComponentFixture<EjercicioGymPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioGymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
