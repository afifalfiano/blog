
import { Injectable } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Blog } from './current-post.component';

const dataFormat = /(\d\d?-\d\d?-\d\d\d\d)/;

@Injectable()
export class Blogs {
  constructor(private scullySvc: ScullyRoutesService) {}

  blogs$ = this.scullySvc.available$.pipe(
    map(routeList => {
      routeList = routeList
        .filter(r => dataFormat.test(r.route))
        .sort((a, b) => {
          const adate = dataFormat.exec(a.route)[0];
          const bdate = dataFormat.exec(b.route)[0];
          return new Date(bdate).getTime() - new Date(adate).getTime();
        });
      return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/current-post/`))
        .map((e, idx) => ({ ...e, number: routeList.length - idx }));
    })
  ) as Observable<Blog[]>;
}
