import { Component } from '@angular/core';

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.css']
})
export class CourseMainComponent {

  serverElements = [{type: 'server', name: 'Testserver', content: 'Its a test!'}]
  
}
