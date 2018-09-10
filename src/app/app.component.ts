import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro';

  records = [
  {
  	name: 'Sam',
  	online: true
  },
  {
  	name: 'John',
  	online: false
  },
  {
  	name: 'Ted',
  	online: true
  },
  {
    name: 'Sam',
    online: true
  },
  {
    name: 'John',
    online: false
  },
  {
    name: 'Ted',
    online: true
  }
 ]
}
