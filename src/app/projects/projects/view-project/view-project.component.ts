import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  projectId: string;
  project$: Observable<Project>;

  constructor(activateRoute: ActivatedRoute, private projectService: ProjectService, private location: Location) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project$ = this.projectService.getProject(this.projectId);
  }

  public goBack(): void {
    this.location.back();
  }
}
