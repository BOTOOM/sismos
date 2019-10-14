import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposDeInteresComponent } from './grupos-de-interes.component';

describe('GruposDeInteresComponent', () => {
  let component: GruposDeInteresComponent;
  let fixture: ComponentFixture<GruposDeInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposDeInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
