import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../models/mock-projects';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}

  public getAll(): Observable<Project[]> {
    return of(PROJECTS);
  }

  public countAll(): Observable<number> {
    return of(PROJECTS.length);
  }

  public filter(searchText: string): Observable<Project[]> {
    return of(PROJECTS.filter(project => project.name.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())));
  }
}
