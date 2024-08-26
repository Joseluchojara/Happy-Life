import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenadorPage } from './entrenador.page';

describe('EntrenadorPage', () => {
  let component: EntrenadorPage;
  let fixture: ComponentFixture<EntrenadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
