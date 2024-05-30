import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { ProjectsComponent } from './Views/projects/projects.component';
import { MembersComponent } from './Views/members/members.component';
import { ProjectComponent } from './Components/project/project.component';
import { CreateProjectComponent } from './Views/create-project/create-project.component';
import { ProjectDetailComponent } from './Views/project-detail/project-detail.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, children: [
    {path: "projects", component: ProjectsComponent},
    {path: "members", component: MembersComponent},
    {path: "create-Project", component: CreateProjectComponent},
    {path: "project-detail", component: ProjectDetailComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
