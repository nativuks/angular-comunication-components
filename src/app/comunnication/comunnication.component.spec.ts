import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunnicationComponent } from './comunnication.component';

describe('ComunnicationComponent', () => {
  let component: ComunnicationComponent;
  let fixture: ComponentFixture<ComunnicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunnicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunnicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
