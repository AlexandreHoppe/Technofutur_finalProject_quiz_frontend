import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { QuestionService } from '../question-service/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-quiz-answer',
  styleUrl: './quiz-answer.css',
  templateUrl: './quiz-answer.html',
})
export class QuizAnswer implements OnInit {
  @Input() answeredQuestion: string | undefined;
  @Input() quizName: string | null = null;
  @Output() nextQuestionConfirm = new EventEmitter<boolean>()

  questionAnswers = signal<string | undefined>(undefined);
  questionAnswered = signal<number>(0);
  quizLength = signal<number>(0);
  quizType = signal<string | undefined>(undefined);

  resultQuestion = signal<string | undefined>(undefined);
  scoreQuestion = signal<number>(1000);

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {    
    this.loadAnswer();
  }

  loadAnswer(): void{
    const quizName = this.quizName;
    if (!quizName) {
      console.error('Missing quizName');
      return;
    }

    this.questionService.getAnswer(quizName).subscribe({
      next: (answers) => { 
        this.questionAnswers.set(answers?.answers[0]);
        this.questionAnswered.set(answers?.answers[1]);
        this.quizLength.set(answers?.answers[2]);
        this.quizType.set(answers?.answers[3]);

        console.log(this.questionAnswers)
        console.log(this.questionAnswered)
        console.log(this.quizLength)
        console.log(this.quizType)

        this.questionAnswered.update(question => question + 1);

        console.log(this.answeredQuestion)
        console.log(this.questionAnswers())

        if(this.answeredQuestion?.toLowerCase() === this.questionAnswers()?.toLowerCase()){
          this.resultQuestion.set("Correct !");
          switch (this.quizType()){
            case "text" : 
              this.scoreQuestion.update(score => score * 2);
              break;
        }
        } else {
          this.resultQuestion.set("Wrong !");
          this.scoreQuestion.set(0);
        }

      },
      error: (err) => console.error('Error: ', err)
    });
  }

  nextQuestion(): void {
    const quizName = this.quizName;
    if (!quizName) {
      console.error('Missing quizName');
      return;
    }

    this.questionService.updateResponded(this.questionAnswered(), quizName).subscribe({
      next: (res) => {
        if(this.questionAnswered() < this.quizLength()){
          this.loadAnswer();
          this.nextQuestionConfirm.emit(false);
        } else {
          this.router.navigate(['/quizresult'])
      }
    },
      error: (err) => console.error('Error: ', err)
    });
  }  
} 
