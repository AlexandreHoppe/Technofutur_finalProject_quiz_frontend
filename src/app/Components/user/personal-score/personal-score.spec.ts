import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalScore } from './personal-score';

describe('PersonalScore', () => {
  let component: PersonalScore;
  let fixture: ComponentFixture<PersonalScore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalScore],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalScore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
