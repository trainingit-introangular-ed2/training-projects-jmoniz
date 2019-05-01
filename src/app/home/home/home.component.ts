import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects: number;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.countAll().subscribe(cnt => (this.numProjects = cnt));
  }
}
