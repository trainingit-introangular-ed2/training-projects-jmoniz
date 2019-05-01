import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  public OnFilterProjects(searchText: string) {
    if (searchText.trim().length > 0) {
      this.projectService.filter(searchText).subscribe(r => (this.projects = r));
    } else {
      this.getProjects();
    }
  }

  private getProjects() {
    this.projectService.getProjects().subscribe(r => (this.projects = r));
  }
}
