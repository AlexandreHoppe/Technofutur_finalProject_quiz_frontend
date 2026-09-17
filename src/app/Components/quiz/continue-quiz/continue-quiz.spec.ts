import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinueQuiz } from './continue-quiz';

describe('ContinueQuiz', () => {
  let component: ContinueQuiz;
  let fixture: ComponentFixture<ContinueQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueQuiz],
    }).compileComponents();

    fixture = TestBed.createComponent(ContinueQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
