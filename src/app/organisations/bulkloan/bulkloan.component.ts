import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-bulkloan',
  templateUrl: './bulkloan.component.html',
  styleUrls: ['./bulkloan.component.css']
})
export class BulkloanComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  options = [
    {value: 'mor', viewValue: 'Head Office'},
    {value: 'kat', viewValue: 'Morogoro brnach'},
    {value: 'blr',viewValue:'Loan officer'},
    {value:'322',viewValue:'dla'},
    
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: [null, Validators.required],
  })

}
}
