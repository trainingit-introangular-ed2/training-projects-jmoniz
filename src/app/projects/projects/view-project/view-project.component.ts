import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  projectId: number;
  project: Project;

  constructor(activateRoute: ActivatedRoute, private projectService: ProjectService, private location: Location) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    this.projectService.getProject(this.projectId).subscribe(project => (this.project = project));
  }

  public goBack(): void {
    this.location.back();
  }
}
