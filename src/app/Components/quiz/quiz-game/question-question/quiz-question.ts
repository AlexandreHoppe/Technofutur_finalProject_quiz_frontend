import { Component, OnInit, signal } from '@angular/core';
import { QuestionService } from '../question-service/question.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvalidSubmission } from '../../../regulation/invalid-submission/invalid-submission';
import { QuizAnswer } from '../quiz-answer/quiz-answer';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, InvalidSubmission, QuizAnswer],
  selector: 'app-quiz-question',
  styleUrl: './quiz-question.css',
  templateUrl: './quiz-question.html',
})
export class QuizQuestion implements OnInit {
  quizName = signal<string | null>(null)

  question_Question = signal<string | undefined>(undefined)
  answerForm : FormGroup;
  submissionValidation = signal<boolean>(false);
  submissionError = signal<string []>([]);
  answerSubmitted = signal<boolean>(false);
  answerText = signal<string | undefined>(undefined)

  constructor(private questionService : QuestionService, private formBuilder : FormBuilder, private route: ActivatedRoute){
    this.answerForm = this.formBuilder.group({
      answerFormText: ["", Validators.required]
    })
  }


  ngOnInit(): void {
    this.quizName.set(this.route.snapshot.paramMap.get('quizName'));
    this.loadAnswer();
  }

  submitAnswer(): void {
    if (this.answerForm.invalid){
      this.answerForm.markAllAsTouched();

      this.submissionError.set(
        Object.keys(this.answerForm.controls).filter((controlName) =>
          this.answerForm.get(controlName)?.invalid
        )
      );

      this.submissionValidation.set(true);
      return;
    }
    this.answerSubmitted.set(true)
    this.answerText.set(this.answerForm.get('answerFormText')?.value);
  }

  loadAnswer():void{
    const quizName = this.quizName();
    if (!quizName) {
      console.error('Missing quizName route parameter');
      return;
    }

    this.questionService.getQuestion(quizName).subscribe({
      next: (question) => this.question_Question.set(question?.question),
      error: (err) => console.error('Error: ', err)
    });
  }

  errorNoticed(newSubmissionValidation : boolean){
    this.submissionValidation.set(newSubmissionValidation);
  }

  nextQuestion(nextQuestionConfirm : boolean){

    this.answerSubmitted.set(nextQuestionConfirm);
    this.loadAnswer();
    this.answerForm.get('answerFormText')?.reset();
  }
}
