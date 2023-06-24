import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPullRequestComponent } from './accept-pull-request.component';

describe('AcceptPullRequestComponent', () => {
  let component: AcceptPullRequestComponent;
  let fixture: ComponentFixture<AcceptPullRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptPullRequestComponent]
    });
    fixture = TestBed.createComponent(AcceptPullRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
