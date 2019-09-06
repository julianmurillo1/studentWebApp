import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';

const components = [
TopbarComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports:[components]
})
export class SharedModule { }
