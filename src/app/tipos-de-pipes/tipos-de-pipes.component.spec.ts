import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDePipesComponent } from './tipos-de-pipes.component';

describe('TiposDePipesComponent', () => {
  let component: TiposDePipesComponent;
  let fixture: ComponentFixture<TiposDePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
