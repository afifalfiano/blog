import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

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
export class CurrentPostComponent {
  @Input() blog: Blog;

  constructor(
    private routerSvc: Router
  ) { }

  get detailPost() {
    return this.routerSvc.routerState.snapshot.url !== this.blog.route;
  }
}
