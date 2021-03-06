import { SharedModule } from './../current-post/shared.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';
@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScullyLibModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: BlogComponent,
      }
    ])
  ]
})
export class BlogModule {}
