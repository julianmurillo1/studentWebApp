import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';




//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducers } from './app.reducers';

//Enviroment variables
import { environment } from 'src/environments/environment';

//Components
import { AppComponent } from './app.component';
import { StudentsComponent } from './pages/students/students.component';
import { DetailStudentComponent } from './pages/students/detail/detail.component';
import { CreateStudentComponent } from './pages/students/create/create.component';
import { UpdateStudentComponent } from './pages/students/update/update.component';
import { StudentFormComponent } from './pages/students/student-form/student-form.component';
import { ErrorComponent } from './components/error/error.component';
import { SortPipe } from './pipes/sort.pipe';
import { SortComponent } from './components/sort/sort.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DetailStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentFormComponent,
    ErrorComponent,
    SortPipe,
    SortComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    }),
    SharedModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
