import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnewsTarjetaComponent } from './topnews-tarjeta.component';

describe('TopnewsTarjetaComponent', () => {
  let component: TopnewsTarjetaComponent;
  let fixture: ComponentFixture<TopnewsTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnewsTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnewsTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
