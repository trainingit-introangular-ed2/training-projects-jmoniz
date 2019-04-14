import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  public projectId: number;
  public project;

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = parseInt(activateRoute.snapshot.params['id'], 10);
    const projects = environment.projects;

    this.project = projects.find(i => i.id === this.projectId);
  }

  ngOnInit() {}
}
