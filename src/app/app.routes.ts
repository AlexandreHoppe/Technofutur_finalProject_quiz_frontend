import { Routes } from '@angular/router';
import { GlobalScore } from './Components/user/global-score/global-score';
import { HomePage } from './Components/home-page/home-page';
import { PersonalScore } from './Components/user/personal-score/personal-score';
import { Profile } from './Components/user/profile/profile';
import { CreateQuiz } from './Components/quiz/quiz-homepage/create-quiz/create-quiz';
import { RandomQuiz } from './Components/quiz/quiz-homepage/random-quiz/random-quiz';
import { FindQuiz } from './Components/quiz/quiz-homepage/find-quiz/find-quiz';
import { ContinueQuiz } from './Components/quiz/quiz-homepage/continue-quiz/continue-quiz';
import { ApplicationConfig } from '@angular/core';
import { QuizQuestion } from './Components/quiz/quiz-game/quiz-question/quiz-question';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'GlobalScore', component: GlobalScore },
    { path: 'PersonalScore', component: PersonalScore },
    { path: 'Profile', component: Profile },
    { path: 'CreateQuiz', component: CreateQuiz },
    { path: 'RandomQuiz', component: RandomQuiz },
    { path: 'FindQuiz', component: FindQuiz },
    { path: 'ContinueQuiz', component: ContinueQuiz },
    { path: 'QuizQuestion', component: QuizQuestion },
];
