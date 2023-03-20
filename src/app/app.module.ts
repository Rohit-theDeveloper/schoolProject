import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewportComponent } from './viewport/viewport.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { StudentComponent } from './dashboard/student/student.component';
import { TeacherComponent } from './dashboard/teacher/teacher.component';
import { LibrarianComponent } from './dashboard/librarian/librarian.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ParentComponent } from './dashboard/admin/parent/parent.component';
import { StaffComponent } from './dashboard/admin/staff/staff.component';
import { AdminDashboardComponent } from './dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ClassComponent } from './dashboard/admin/class/class.component';
import { SubjectComponent } from './dashboard/admin/subject/subject.component';
import { FeeComponent } from './dashboard/admin/fee/fee.component';
import { SalaryComponent } from './dashboard/admin/salary/salary.component';
import { NotificationComponent } from './dashboard/admin/notification/notification.component';
import { LogoutComponent } from './dashboard/admin/logout/logout.component';
import { ApplicationComponent } from './dashboard/admin/application/application.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewportComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    SliderComponent,
    PagenotfoundComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    LibrarianComponent,
    ParentComponent,
    StaffComponent,
    AdminDashboardComponent,
    ClassComponent,
    SubjectComponent,
    FeeComponent,
    SalaryComponent,
    NotificationComponent,
    LogoutComponent,
    ApplicationComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
