import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public fg: FormGroup;

  @Output() public saveProject = new EventEmitter<string>();
  @Output() public cancelSave = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  public onSaveProject() {
    if (this.fg.valid) {
      const model = this.fg.value;
      this.saveProject.emit(model.projectName);
    }
  }

  private buildForm() {
    this.fg = this.formBuilder.group({
      projectName: ['', [Validators.required]]
    });
  }
}
