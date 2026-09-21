import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-invalid-submission',
  styleUrl: './invalid-submission.css',
  templateUrl: './invalid-submission.html',
})
export class InvalidSubmission {
  @Input() missingRequirement : any;
  @Output() newSubmissionValidation = new EventEmitter<boolean>()

  missingMessages : string [] = [];

  ngOnInit() : void {
    console.log(this.missingRequirement)
    for(const missing in this.missingRequirement){
      console.log(missing)
      switch (this.missingRequirement[missing]){
        case "quiz_length" :
          this.missingMessages.push("The quiz must have at least 5 question, and maximum 100.");
          break;
        case "quiz_category" :
          this.missingMessages.push("The quiz require a category.");
          break;
        case "quiz_type" :
          this.missingMessages.push("The quiz require a type.");
          break;
        case "quiz_name" :
          this.missingMessages.push("The quiz require a name.");
          break;
      }
    }
  }

  errorNoticed(): void{

    this.missingRequirement = 'Test succeed '
    this.newSubmissionValidation.emit(false); 
  }
}
