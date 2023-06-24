import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullCodeComponent } from './pull-code.component';

describe('PullCodeComponent', () => {
  let component: PullCodeComponent;
  let fixture: ComponentFixture<PullCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullCodeComponent]
    });
    fixture = TestBed.createComponent(PullCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
