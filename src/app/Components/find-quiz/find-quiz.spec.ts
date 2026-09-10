import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindQuiz } from './find-quiz';

describe('FindQuiz', () => {
  let component: FindQuiz;
  let fixture: ComponentFixture<FindQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindQuiz],
    }).compileComponents();

    fixture = TestBed.createComponent(FindQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
