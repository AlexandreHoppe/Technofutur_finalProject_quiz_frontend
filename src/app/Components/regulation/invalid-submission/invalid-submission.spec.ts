import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvalidSubmission } from './invalid-submission';

describe('InvalidSubmission', () => {
  let component: InvalidSubmission;
  let fixture: ComponentFixture<InvalidSubmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidSubmission],
    }).compileComponents();

    fixture = TestBed.createComponent(InvalidSubmission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
