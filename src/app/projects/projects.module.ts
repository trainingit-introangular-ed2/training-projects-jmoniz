import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewProjectComponent } from './projects/view-project/view-project.component';
import { ViewerProjectFormComponent } from './projects/view-project/viewer-project-form/viewer-project-form.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewProjectComponent,
    NewProjectComponent,
    ProjectsListComponent,
    FilterProjectsFormComponent,
    ViewerProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
