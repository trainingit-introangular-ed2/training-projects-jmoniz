import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: Project;

  constructor(private router: Router) {}

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }

  public saveProject() {
    this.project.id = environment.projects.length;
    environment.projects.push({ ...this.project });
    this.router.navigate(['/projects']);
  }
}
