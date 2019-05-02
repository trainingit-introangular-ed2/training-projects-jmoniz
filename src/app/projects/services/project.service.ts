import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../models/mock-projects';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  public getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  public countAll(): Observable<number> {
    return of(PROJECTS.length);
  }

  public filter(searchText: string): Observable<Project[]> {
    return of(PROJECTS.filter(project => project.name.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())));
  }

  public getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }

  public addProject(project: Project): void {
    project.id = PROJECTS.length;
    PROJECTS.push({ ...project });
  }
}
