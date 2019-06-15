import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerComponent } from './cutomer.component';

describe('CutomerComponent', () => {
  let component: CutomerComponent;
  let fixture: ComponentFixture<CutomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
