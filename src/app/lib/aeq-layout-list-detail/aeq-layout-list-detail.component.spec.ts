import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeqLayoutListDetailComponent } from './aeq-layout-list-detail.component';

describe('AeqLayoutListDetailComponent', () => {
  let component: AeqLayoutListDetailComponent;
  let fixture: ComponentFixture<AeqLayoutListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeqLayoutListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeqLayoutListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
