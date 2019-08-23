import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(name: string): string {
    return `Mockup of page ${name}`;
  }
}
