import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingAnimComponent } from './loding-anim.component';

describe('LodingAnimComponent', () => {
  let component: LodingAnimComponent;
  let fixture: ComponentFixture<LodingAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodingAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodingAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
