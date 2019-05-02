import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project: Project;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.project = {
      id: 0,
      name: ''
    };
  }

  public onSaveProject(projectName: string) {
    this.project.name = projectName;
    this.projectService.addProject(this.project);

    this.router.navigate(['/projects']);
  }

  public onCancelSave() {
    this.router.navigate(['/projects']);
  }
}
