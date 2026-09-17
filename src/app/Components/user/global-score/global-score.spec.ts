import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalScore } from './global-score';

describe('GlobalScore', () => {
  let component: GlobalScore;
  let fixture: ComponentFixture<GlobalScore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalScore],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalScore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
