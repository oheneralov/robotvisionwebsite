import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PageService } from './page.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,  private readonly pageService: PageService) {}

  @Get()
  getHomePage(): string {
    return this.appService.getHomePage();
  }
  
  @Get('/page/:name')
  getPage(@Param('name') name: string): string {
    return this.pageService.getPage(name);
  }
}
