import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserJourneyComponent } from './user-journey/user-journey.component';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { JobSearchComponent } from './job-search/job-search.component';


const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'choice', component:UserJourneyComponent  },
  { path: 'job-search', component:JobSearchComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
