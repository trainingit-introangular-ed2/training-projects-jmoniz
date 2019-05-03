import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public countProjects(): Observable<any> {
    const url = `${this.apiUrl}/count`;
    return this.httpClient.get(url);
  }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiUrl).pipe(tap(p => console.log(p)));
  }

  public filter(searchText: string): Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(this.apiUrl)
      .pipe(map((projects: any) => projects.filter(project => project.name.toLowerCase().includes(searchText.toLowerCase()))));
  }

  public getProject(id: string): Observable<Project> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Project>(url);
  }

  public addProject(project: Project): void {
    this.httpClient.post(this.apiUrl, project).subscribe();
  }
}
