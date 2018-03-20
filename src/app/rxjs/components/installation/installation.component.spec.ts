import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationComponent } from './installation.component';

describe('InstallationComponent', () => {
  let component: InstallationComponent;
  let fixture: ComponentFixture<InstallationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InstallationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the installation instructions', () => {
    const header = fixture.nativeElement.querySelector('h2');
    expect(header.textContent).toMatch('Installation instructions');
  });
});
