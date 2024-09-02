import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjercicioCalisteniaPage } from './ejercicio-calistenia.page';

describe('EjercicioCalisteniaPage', () => {
  let component: EjercicioCalisteniaPage;
  let fixture: ComponentFixture<EjercicioCalisteniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioCalisteniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
