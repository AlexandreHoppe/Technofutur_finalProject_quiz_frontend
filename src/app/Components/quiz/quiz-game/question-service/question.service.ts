import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuestionService {
    constructor(private http:HttpClient){}
    quizName = signal<string | null>(null)

    getQuestion(quizName: string): Observable<any>{
        return this.http.get<string>(`/api/questions/${encodeURIComponent(quizName)}/question`);
    }
    
    getAnswer(quizName: string): Observable<any>{
        return this.http.get<any>(`/api/questions/${encodeURIComponent(quizName)}/answer`);
    }

    updateResponded(quizResponded: number, quizName: string): Observable<any>{
        return this.http.put<any>(`/api/quizzes/${encodeURIComponent(quizName)}/responded`, {
            quizResponded: quizResponded + 1
        });
    }

}
