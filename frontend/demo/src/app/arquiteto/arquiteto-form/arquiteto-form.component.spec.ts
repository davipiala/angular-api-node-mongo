import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitetoFormComponent } from './arquiteto-form.component';

describe('ArquitetoFormComponent', () => {
  let component: ArquitetoFormComponent;
  let fixture: ComponentFixture<ArquitetoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquitetoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquitetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
