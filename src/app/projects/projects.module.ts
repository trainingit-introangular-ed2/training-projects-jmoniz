import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { NewProjectFormComponent } from './projects/new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
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
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ProjectsModule {}
