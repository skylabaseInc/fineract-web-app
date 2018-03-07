import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-entity-to-entity-mapping',
  templateUrl: './entity-to-entity-mapping.component.html',
  styleUrls: ['./entity-to-entity-mapping.component.css']
})
export class EntityToEntityMappingComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  displayedColumns = ['office', 'product', 'startdate', 'enddate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  submit = false;
  display= false;
  office= false;

  onClick(){
    this.submit = true;
    this.display= false;

  }

  onAdd(){
    this.submit= false;
    this.display= true;

  }

  callOffice(){
    this.office= true;
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  office: string;
  product: string;
  startdate: Date;
  enddate:string;
}

const ELEMENT_DATA: Element[] = [
  
];

