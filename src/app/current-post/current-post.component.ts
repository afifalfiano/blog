import { HomeComponent } from './../home/home.component';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

export interface Blog {
  title: string;
  description: string;
  route: string;
  number: number;
}

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  @ViewChild(HomeComponent) dataBlogs;
  @Input() blog: Blog;


  constructor(
    private routerSvc: Router
  ) {
    console.log(this.blog);
    console.log(this.dataBlogs);
  }
  ngOnInit(){
  }

  get detailPost() {
    return this.routerSvc.routerState.snapshot.url !== this.blog.route;
  }
}
