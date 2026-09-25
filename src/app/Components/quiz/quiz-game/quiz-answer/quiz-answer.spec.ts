import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizAnswer } from './quiz-answer';

describe('QuizAnswer', () => {
  let component: QuizAnswer;
  let fixture: ComponentFixture<QuizAnswer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAnswer],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizAnswer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
