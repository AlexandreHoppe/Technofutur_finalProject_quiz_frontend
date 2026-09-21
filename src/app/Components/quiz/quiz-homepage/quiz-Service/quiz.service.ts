import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {
    constructor(private http: HttpClient){}

    createQuiz(data:any): Observable<any>{
        return this.http.post<any>('/api/quizzes/', data);
    }

    getQuestionCategory() : Observable<any>{
        return this.http.get<any>('/api/questions/');
    }
}
