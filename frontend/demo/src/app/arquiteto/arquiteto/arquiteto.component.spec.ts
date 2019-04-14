import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitetoComponent } from './arquiteto.component';

describe('ArquitetoComponent', () => {
  let component: ArquitetoComponent;
  let fixture: ComponentFixture<ArquitetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquitetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquitetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
