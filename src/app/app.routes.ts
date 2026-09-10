import { Routes } from '@angular/router';
import { GlobalScore } from './Components/global-score/global-score';
import { HomePage } from './Components/home-page/home-page';
import { PersonalScore } from './Components/personal-score/personal-score';
import { Profile } from './Components/profile/profile';
import { CreateQuiz } from './Components/create-quiz/create-quiz';
import { RandomQuiz } from './Components/random-quiz/random-quiz';
import { FindQuiz } from './Components/find-quiz/find-quiz';
import { ContinueQuiz } from './Components/continue-quiz/continue-quiz';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'GlobalScore', component: GlobalScore },
    { path: 'PersonalScore', component: PersonalScore },
    { path: 'Profile', component: Profile },
    { path: 'CreateQuiz', component: CreateQuiz },
    { path: 'RandomQuiz', component: RandomQuiz },
    { path: 'FindQuiz', component: FindQuiz },
    { path: 'ContinueQuiz', component: ContinueQuiz },
];
