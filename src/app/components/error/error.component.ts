import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input('control') control:FormControl
  @Input('hasSubmitted') hasSubmitted:boolean ;
  constructor() { 
    
  }

  ngOnInit() {
   }

}
