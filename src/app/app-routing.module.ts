import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { AdminLibrarianComponent } from './dashboard/admin/admin-librarian/admin-librarian.component';
import { AdminStudentComponent } from './dashboard/admin/admin-student/admin-student.component';
import { AdminTeacherComponent } from './dashboard/admin/admin-teacher/admin-teacher.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ApplicationComponent } from './dashboard/admin/application/application.component';
import { ClassComponent } from './dashboard/admin/class/class.component';
import { FeeComponent } from './dashboard/admin/fee/fee.component';
import { NotificationComponent } from './dashboard/admin/notification/notification.component';
import { ParentComponent } from './dashboard/admin/parent/parent.component';
import { SalaryComponent } from './dashboard/admin/salary/salary.component';
import { StaffComponent } from './dashboard/admin/staff/staff.component';
import { SubjectComponent } from './dashboard/admin/subject/subject.component';
import { LibrApplicationComponent } from './dashboard/librarian/libr-application/libr-application.component';
import { LibrBooksComponent } from './dashboard/librarian/libr-books/libr-books.component';
import { LibrDashboardComponent } from './dashboard/librarian/libr-dashboard/libr-dashboard.component';
import { LibrLibrarydetailsComponent } from './dashboard/librarian/libr-librarydetails/libr-librarydetails.component';
import { LibrNotificationComponent } from './dashboard/librarian/libr-notification/libr-notification.component';
import { LibrSalarydetailsComponent } from './dashboard/librarian/libr-salarydetails/libr-salarydetails.component';
import { LibrarianComponent } from './dashboard/librarian/librarian.component';
import { StdApplicationComponent } from './dashboard/student/std-application/std-application.component';
import { StdDashboardComponent } from './dashboard/student/std-dashboard/std-dashboard.component';
import { StdExamComponent } from './dashboard/student/std-exam/std-exam.component';
import { StdFeedetailsComponent } from './dashboard/student/std-feedetails/std-feedetails.component';
import { StdLibrarydetailsComponent } from './dashboard/student/std-librarydetails/std-librarydetails.component';
import { StdNotificationComponent } from './dashboard/student/std-notification/std-notification.component';
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
      {path:'admin-student',component:AdminStudentComponent},
      {path:'admin-teacher',component:AdminTeacherComponent},
      {path:'admin-librarian',component:AdminLibrarianComponent},
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
  {path:"librarian",component:LibrarianComponent,
    children:[
      {path:'',redirectTo:'libr-dashboard',pathMatch:'full'},
      {path:'libr-dashboard',component:LibrDashboardComponent},
      {path:'libr-salarydetails',component:LibrSalarydetailsComponent},
      {path:'libr-library-details',component:LibrLibrarydetailsComponent},
      {path:'libr-books',component:LibrBooksComponent},
      {path:'libr-application',component:LibrApplicationComponent},
      {path:'libr-notification',component:LibrNotificationComponent},


    ]
    
},
  {path:"student",component:StudentComponent,
    children:[
      {path:'',redirectTo:'std-dashboard',pathMatch:'full'},
      {path:'std-dashboard',component:StdDashboardComponent},
      {path:'std-feedetails',component:StdFeedetailsComponent},
      {path:'std-librarydetails',component:StdLibrarydetailsComponent},
      {path:'std-application',component:StdApplicationComponent},
      {path:'std-notification',component:StdNotificationComponent},
      {path:'std-exam',component:StdExamComponent},
    ]
},
  {path:'teacher',component:TeacherComponent},
  {path:'**',component:PagenotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
