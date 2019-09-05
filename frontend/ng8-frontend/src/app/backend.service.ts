import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getPage(pageName = '') {
    const pageInfo: object = {
      title: `title for ${pageName}`,
      content: `content info for ${pageName}`
    }

    return pageInfo;
  }
}
