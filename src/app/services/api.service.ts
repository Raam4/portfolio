import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { Experience } from '../models/experience';
import { Education } from '../models/education';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor( private httpClient: HttpClient) { }

  public listPerson(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.apiUrl + 'person/list');
  }

  public detailPerson(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.apiUrl + `person/detail/${id}`);
  }

  public savePerson(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + 'person/create', person);
  }

  public updatePerson(id:number, body: any): Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `person/update/${id}`, body);
  }

  public deletePerson(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + `person/delete/${id}`);
  }

  public listExperience(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.apiUrl + 'experience/list');
  }

  public detailExperience(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.apiUrl + `experience/detail/${id}`);
  }

  public saveExperience(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + 'experience/create', experience);
  }

  public updateExperience(id:number, body: any): Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `experience/update/${id}`, body);
  }

  public deleteExperience(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + `experience/delete/${id}`);
  }

  public listEducation(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.apiUrl + 'education/list');
  }

  public detailEducation(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.apiUrl + `education/detail/${id}`);
  }

  public saveEducation(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + 'education/create', education);
  }

  public updateEducation(id:number, body: any): Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `education/update/${id}`, body);
  }

  public deleteEducation(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + `education/delete/${id}`);
  }

  public listProject(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.apiUrl + 'project/list');
  }

  public detailProject(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.apiUrl + `project/detail/${id}`);
  }

  public saveProject(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + 'project/create', project);
  }

  public updateProject(id:number, body: any): Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `project/update/${id}`, body);
  }

  public deleteProject(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + `project/delete/${id}`);
  }

  public listSkill(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.apiUrl + 'skill/list');
  }

  public detailSkill(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.apiUrl + `skill/detail/${id}`);
  }

  public saveSkill(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + 'skill/create', skill);
  }

  public updateSkill(id:number, body: any): Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `skill/update/${id}`, body);
  }

  public deleteSkill(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.apiUrl + `skill/delete/${id}`);
  }
}
