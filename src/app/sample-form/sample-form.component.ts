import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponetCanDeactivate } from '../componet-can-deactivate';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit,ComponetCanDeactivate {
  isDirty=false;
  constructor() { }
  canDeactivate (): boolean{
    return !this.isDirty;
  } 
  ngOnInit(): void {
  }

}
