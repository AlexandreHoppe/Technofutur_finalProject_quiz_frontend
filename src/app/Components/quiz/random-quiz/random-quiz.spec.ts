import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomQuiz } from './random-quiz';

describe('RandomQuiz', () => {
  let component: RandomQuiz;
  let fixture: ComponentFixture<RandomQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomQuiz],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
