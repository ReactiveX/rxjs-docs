import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedGuideComponent } from './getting-started-guide.component';

describe('GettingStartedGuideComponent', () => {
  let component: GettingStartedGuideComponent;
  let fixture: ComponentFixture<GettingStartedGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
