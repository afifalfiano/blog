import { Blogs } from './../current-post/blogs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../current-post/current-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  blogs = [];

  constructor(private blogsSvc: Blogs, private routerSvc: Router) {}

  ngOnInit() {
    this.blogsSvc.blogs$.subscribe(blogs => (this.blogs = blogs));
    console.log(this.blogs);
  }

  goto(blog: Blog) {
    this.routerSvc.navigateByUrl(blog.route);
  }
}
