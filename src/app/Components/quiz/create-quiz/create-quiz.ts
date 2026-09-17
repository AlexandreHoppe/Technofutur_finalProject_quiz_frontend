import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../quiz-Service/quiz.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-create-quiz',
  styleUrl: './create-quiz.css',
  templateUrl: './create-quiz.html',
})
export class CreateQuiz implements OnInit {
  createQuizForm : FormGroup;
  question_categories : unknown[] = [];

  constructor(private formBuilder : FormBuilder, private quizService: QuizService){
    this.createQuizForm = this.formBuilder.group({
      quiz_length : [0, [Validators.required, Validators.max(100)]],
      quiz_category : ['', Validators.required],
      quiz_type : ['', [Validators.required, Validators.maxLength(100)]],
      quiz_name : ['', Validators.max(100)]
    });
  }

  ngOnInit(): void {
    this.quizService.getQuestionCategory().subscribe({
      next: (questions) => {
        this.question_categories = [
          ...new Set(
            questions.data.map(
              (question:any) => question.question_category
            )
          )
        ]
      },
      error: (err: unknown) => {
        console.error('Error loading question: ', err);
      } 
    });
  }
  
  createQuiz(){
    const quizSetting = this.createQuizForm.getRawValue();

    this.quizService.createQuiz(quizSetting).subscribe({
      next: (res) => console.log('Quiz created: ', res),
      error: (err) => console.error('Error: ', err)
    });
  }
}