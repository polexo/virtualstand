import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { WpPostsService } from 'src/services/wp-posts/wp-posts.service';
import { IImage } from 'ng-simple-slideshow';



@Component({
  selector: 'app-user-journey',
  templateUrl: './user-journey.component.html',
  styleUrls: ['./user-journey.component.scss']
})
export class UserJourneyComponent implements OnInit {
  private images: IImage[] = [];
  constructor(private postService: WpPostsService, private router: Router) { }

  ngOnInit() {

    this.postService.GetSliders().subscribe(data => {
      this.images = data.map(d => {
        return { url: d.image, caption: d.description, title:d.title, href: '#config' };
      });
      console.log(this.images);

    })
  }
  btnAClick() {
    this.router.navigateByUrl('/choice');
  }
  btnBClick() {
    this.router.navigateByUrl('/search');
  }
}

