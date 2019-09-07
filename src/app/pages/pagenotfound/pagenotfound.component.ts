import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styles: []
})
export class PagenotfoundComponent   {

  constructor(private router:Router) { }


  goBack(){
      this.router.navigateByUrl('')
  }

}
