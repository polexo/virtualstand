import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpPostsService, WpApiBase } from 'src/services/wp-posts/wp-posts.service';
import { Circuit } from '../Models';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  firstCircuit: Circuit = null;
  secondCircuit: Circuit = null;
  constructor(private postService: WpPostsService, private router: Router) { }

  ngOnInit() {
    this.postService.GetParcoursBySlug("parcours-a").subscribe(data => {
      this.firstCircuit = data;
      console.log(this.firstCircuit);
      
    })
    
    this.postService.GetParcoursBySlug("parcours-b").subscribe(data => {
      this.secondCircuit = data;
      console.log(this.secondCircuit);
      
    })
     
  }
  
  btnAClick(){
    this.router.navigateByUrl('/choice');
  }
  btnBClick(){
    this.router.navigateByUrl('/job-search²');
  }
}

