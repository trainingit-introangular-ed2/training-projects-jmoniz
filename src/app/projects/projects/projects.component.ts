import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  public OnFilterProjects(searchText: string) {
    if (searchText.trim().length > 0) {
      this.projects = this.projectService.filter(searchText);
    } else {
      this.getProjects();
    }
  }

  private getProjects() {
    this.projects = this.projectService.getProjects();
  }
}
