import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { PythonComponent } from './python/python.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'services',component: ServicesComponent},
  {path:'courses',component: CoursesComponent},

  {
    path:'java',component:JavaComponent
  },
  {
    path:'angular',component:AngularComponent
  },
  {
    path:'python',component:PythonComponent
  }
  
,
  {path:'contact',component: ContactComponent},
  {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
