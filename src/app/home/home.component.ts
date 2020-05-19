import { BlogModule } from './../blog/blog.module';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Blogs } from './../current-post/blogs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../current-post/current-post.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  constructor(private blogsSvc: Blogs, private routerSvc: Router, private scullySvc: ScullyRoutesService) {}
  nowDate = new Date();
  blogs = [];

  $blogPosts = this.scullySvc.available$.pipe(
    map(routes =>
      routes.filter(
        route =>
          route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md')
      )
    )
  );

  ngOnInit() {
    this.scullySvc.available$.subscribe(routes => console.log(routes, this.nowDate));
    // this.blogsSvc.blogs$.subscribe(blogs => (this.blogs = blogs));
    // console.log(this.blogs);
  }

  goto(blog: Blog) {
    this.routerSvc.navigateByUrl(blog.route);
  }
}
