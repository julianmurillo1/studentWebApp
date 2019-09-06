import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string = " http://demo5974247.mockable.io/students"
  constructor(private http:HttpClient) {

   }

   getAllStudents():Observable<any>{
     return this.http.get(`${this.baseUrl}`)
   }

   saveStudent(student:Student){
     return this.http.post(`${this.baseUrl}`, student)
   }

   updateStudent(student:Student, id:number){
    return this.http.put(`${this.baseUrl}/${id}`, student)
   }

   deleteStudent(id:number){
     return this.http.delete(`${this.baseUrl}/${id}`)
   }

   getStudent(id:number){
     return this.http.get(`${this.baseUrl}/${id}`)
   }

    swalModal(title, text, type, confirmButtonText){
        Swal.fire({
          title:title,
          text: text,
          type: type,
          confirmButtonText: "Ok",
        });
  }

}
