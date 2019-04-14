import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScFormComponent } from './sc-form.component';

describe('ScFormComponent', () => {
  let component: ScFormComponent;
  let fixture: ComponentFixture<ScFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
