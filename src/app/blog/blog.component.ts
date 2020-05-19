
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router} from '@angular/router';

import { Blog } from '../current-post/current-post.component';
import { Blogs } from './../current-post/blogs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  currentPost: Blog;
  constructor(private routerSvc: Router, private blogsSvc: Blogs) {
  }

  ngOnInit() {
    this.blogsSvc.blogs$.subscribe(
      blogs =>
        (this.currentPost = blogs.filter(
          b => b.route === this.routerSvc.routerState.snapshot.url
        ).pop())
    );
    console.log(this.currentPost);
  }
}
