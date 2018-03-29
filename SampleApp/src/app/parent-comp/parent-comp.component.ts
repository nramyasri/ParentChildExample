import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css'] ,
  template: `<div class="parent">
 
  <h1>{{name}}</h1>

  <child-component></child-component>

</div>`,
  
})
export class ParentCompComponent implements OnInit {
   
  directives : [ChildComponent]

  constructor() { }


  ngOnInit() {
  }

}
