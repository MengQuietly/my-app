import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowComponent } from './hide-show.component';

describe('HideShowComponent', () => {
  let component: HideShowComponent;
  let fixture: ComponentFixture<HideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
