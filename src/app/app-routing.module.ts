import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ApplicationComponent } from './dashboard/admin/application/application.component';
import { ClassComponent } from './dashboard/admin/class/class.component';
import { FeeComponent } from './dashboard/admin/fee/fee.component';
import { NotificationComponent } from './dashboard/admin/notification/notification.component';
import { ParentComponent } from './dashboard/admin/parent/parent.component';
import { SalaryComponent } from './dashboard/admin/salary/salary.component';
import { StaffComponent } from './dashboard/admin/staff/staff.component';
import { SubjectComponent } from './dashboard/admin/subject/subject.component';
import { LibrarianComponent } from './dashboard/librarian/librarian.component';
import { StudentComponent } from './dashboard/student/student.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'admin',component:AdminComponent,
    children:[
      {path:'',redirectTo:'admin-dashboard',pathMatch:'full'},
      {path:'admin-dashboard',component:AdminDashboardComponent},
      {path:'parent',component:ParentComponent},
      {path:'student',component:StudentComponent},
      {path:'teacher',component:TeacherComponent},
      {path:'librarian',component:LibrarianComponent},
      {path:'staff',component:StaffComponent},
      {path:'class',component:ClassComponent},
      {path:'subject',component:SubjectComponent},
      {path:'fee',component:FeeComponent},
      {path:'salary',component:SalaryComponent},
      {path:'notification',component:NotificationComponent},
      {path:'application',component:ApplicationComponent},
      {path:'logout',component:AdminDashboardComponent},
    ]
  },
  {path:'**',component:PagenotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
