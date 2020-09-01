import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMultiselectComponent } from './primeng-multiselect.component';

describe('PrimengMultiselectComponent', () => {
  let component: PrimengMultiselectComponent;
  let fixture: ComponentFixture<PrimengMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
