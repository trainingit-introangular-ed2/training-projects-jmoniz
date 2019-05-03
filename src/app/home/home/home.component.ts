import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public numProjects = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjectsInfo();
  }

  private getProjectsInfo() {
    this.projectService.countProjects().subscribe(res => (this.numProjects = res.count));
  }
}
