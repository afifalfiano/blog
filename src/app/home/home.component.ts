import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Blogs } from './../current-post/blogs';
import { Component, OnInit, ViewEncapsulation, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../current-post/current-post.component';
import { map } from 'rxjs/operators';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  @Input() blogs: any = [];
  blogPosts: any = [];
  returnedArray: string[];

  constructor(private blogsSvc: Blogs, private routerSvc: Router,
              private scullySvc: ScullyRoutesService) {
              }

  private getData(){
    this.blogPosts = this.scullySvc.available$.pipe(
      map(routes =>
        routes.filter(
          route =>
            route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md'),
        )
      )
    );

    this.scullySvc.available$.subscribe(data => {
      data.forEach((n) => this.blogs.push(n));
      this.returnedArray = this.blogs.slice(2, 7);
    });
  }

  ngOnInit(): void{
    this.getData();
    console.log(this.blogs);
    console.log(this.returnedArray);

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.blogs.slice(startItem, endItem);
  }

  goto(blog: Blog) {
    this.routerSvc.navigateByUrl(blog.route);
  }
}
