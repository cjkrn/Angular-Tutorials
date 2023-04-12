import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Course Udemy';

  selectedAssignment: string | null = '';
  selectedSection: string | null ='';
  toggleSection(section: string) {
    if (this.selectedSection === section) {
      this.selectedSection = null;
    } else {
      this.selectedSection = section;
    }
  }

  toggleAssignment(assignment: string) {
    if (this.selectedAssignment === assignment) {
      this.selectedAssignment = null;
    } else {
      this.selectedAssignment = assignment;
    }
  }

}

