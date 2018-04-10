import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: `
      Say {{message}}
  `,
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
