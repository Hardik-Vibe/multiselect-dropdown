import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTreeComponent } from './primeng-tree.component';

describe('PrimengTreeComponent', () => {
  let component: PrimengTreeComponent;
  let fixture: ComponentFixture<PrimengTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
