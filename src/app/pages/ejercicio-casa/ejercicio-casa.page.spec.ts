import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioCasaPage } from './ejercicio-casa.page';

describe('EjercicioCasaPage', () => {
  let component: EjercicioCasaPage;
  let fixture: ComponentFixture<EjercicioCasaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
