import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoItemComponent } from './movimentacao-item.component';

describe('MovimentacaoItemComponent', () => {
  let component: MovimentacaoItemComponent;
  let fixture: ComponentFixture<MovimentacaoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentacaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
