import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../quiz-Service/quiz.service';
import { InvalidSubmission } from '../../../regulation/invalid-submission/invalid-submission';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, InvalidSubmission],
  selector: 'app-create-quiz',
  styleUrl: './create-quiz.css',
  templateUrl: './create-quiz.html',
})
export class CreateQuiz implements OnInit {
  createQuizForm : FormGroup;
  question_categories : unknown[] = [];

  quizTypeIs : boolean = true;
  quizCategoryIs : boolean = true;

  quizValidation : string [] = [];

  submissionValidation : boolean = false;
  @Output() newSubmissionValidation = new EventEmitter<boolean>()

  constructor(private formBuilder : FormBuilder, private quizService: QuizService, private router:Router){
    this.createQuizForm = this.formBuilder.group({
      quiz_length : [0, [Validators.required, Validators.min(5), Validators.max(100)]],
      quiz_category : ['', Validators.required],
      quiz_type : ['', [Validators.required, Validators.maxLength(100)]],
      quiz_name : ['', [Validators.required, Validators.max(100)]]
    });
  }

  ngOnInit(): void {
    this.quizService.getQuestionCategory().subscribe({
      next: (question_categories) => {
        this.question_categories = [
          ...new Set(
            question_categories.data.map(
              (question:any) => question.question_category
            )
          )
        ]
      },
      error: (err: unknown) => {
        console.error('Error loading question: ', err);
      }
    });

    this.createQuizForm.get('quiz_type')?.valueChanges.subscribe((selectedType) => {this.quizTypeIs = selectedType === '';});
    this.createQuizForm.get('quiz_category')?.valueChanges.subscribe((selectedType) => {this.quizCategoryIs = selectedType === '';});
  }
  
  createQuiz(){
    if (this.createQuizForm.invalid){
      this.createQuizForm.markAllAsTouched();

      this.quizValidation = Object.keys(this.createQuizForm.controls).filter((controlName) => {
        return this.createQuizForm.get(controlName)?.invalid;
      });
      this.submissionValidation = true;
      return;
    }

    const quizSetting = this.createQuizForm.getRawValue();

    this.quizService.createQuiz(quizSetting).subscribe({
      next: (res) => console.log('Quiz created: ', res),
      error: (err) => console.error('Error: ', err)
    }); 
    const quizName = this.createQuizForm.get('quiz_name')?.value;
    console.log(quizName);

    this.router.navigate(['/QuizQuestion', quizName]);
  }

  errorNoticed(newSubmissionValidation : boolean){
    this.submissionValidation = newSubmissionValidation;
  }
}