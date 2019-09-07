import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string = "http://localhost:8000/api/students"
  headers;
  constructor(private http:HttpClient) {
        this.headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'http:localhost:8000/*',
          'Access-Control-Allow-Methods':'POST,PUT,GET,DELETE'
        })
   }

   getAllStudents():Observable<any>{
     return this.http.get(`${this.baseUrl}`)
   }

   saveStudent(student:Student):Observable<any>{
     console.log(student)
     return this.http.post(`${this.baseUrl}`, student, {headers:this.headers})
   }

   updateStudent(student:Student, id:number):Observable<any>{
       student.id = id
     student.age   = parseInt(student.age.toString());
    return this.http.put(`${this.baseUrl}/${id}`, student)
   }

   deleteStudent(id:number):Observable<any>{
     return this.http.delete(`${this.baseUrl}/${id}`)
   }

   getStudent(id:number):Observable<any>{
     return this.http.get(`${this.baseUrl}/${id}`)
   }

    swalModal(title, text, type, confirmButtonText): void{
        Swal.fire({
          title:title,
          text: text,
          type: type,
          confirmButtonText: "Ok",
        });
  }

}
