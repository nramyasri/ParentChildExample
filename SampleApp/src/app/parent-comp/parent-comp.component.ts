import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  template: `
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  parentMessage = "message from parent";
  constructor() { }

  ngOnInit() {
  }

}
