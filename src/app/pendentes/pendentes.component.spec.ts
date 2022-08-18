import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendentesComponent } from './pendentes.component';

describe('PendentesComponent', () => {
  let component: PendentesComponent;
  let fixture: ComponentFixture<PendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
