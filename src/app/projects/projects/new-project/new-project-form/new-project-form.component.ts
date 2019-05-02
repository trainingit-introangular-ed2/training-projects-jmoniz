import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public projectName: string;
  @Output() public saveProject = new EventEmitter<string>();
  @Output() public cancelSave = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.projectName = '';
  }
}
