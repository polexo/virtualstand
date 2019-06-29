import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserJourneyComponent } from './user-journey/user-journey.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { JobSearchComponent } from './job-search/job-search.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { SlideshowModule } from 'ng-simple-slideshow';


import { WpPostsService } from 'src/services/wp-posts/wp-posts.service';
import { WpTagsService } from 'src/services/wp-tags/wp-tags.service';
@NgModule({

  declarations: [
    AppComponent,
    UserJourneyComponent,
    WelcomePageComponent,
    SearchPageComponent,
    JobSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    GalleriaModule,
    SlideshowModule
  ],
  providers: [WpPostsService, WpTagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
