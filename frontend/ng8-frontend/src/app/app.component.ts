import { Component } from '@angular/core';
import {BackendService} from './backend.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Robot vision';
  constructor(private readonly backendService: BackendService){
	  
  }
}
