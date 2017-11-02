import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObscomunicationComponent } from './obscomunication.component';

describe('ObscomunicationComponent', () => {
  let component: ObscomunicationComponent;
  let fixture: ComponentFixture<ObscomunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObscomunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObscomunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
