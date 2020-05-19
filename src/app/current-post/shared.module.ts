import { CurrentPostComponent } from './current-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Blogs } from './blogs';

@NgModule({
  declarations: [CurrentPostComponent],
  exports: [CurrentPostComponent],
  imports: [CommonModule, RouterModule],
  providers: [{
    provide: Blogs,
    useClass: Blogs
  }]
})
export class SharedModule {}
