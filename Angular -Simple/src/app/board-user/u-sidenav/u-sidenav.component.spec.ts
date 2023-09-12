import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USidenavComponent } from './u-sidenav.component';

describe('USidenavComponent', () => {
  let component: USidenavComponent;
  let fixture: ComponentFixture<USidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
