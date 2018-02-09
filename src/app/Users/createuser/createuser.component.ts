import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  username=new FormControl('',[Validators.required]);
  fname= new FormControl('', [Validators.required]);
  lname= new FormControl('', [Validators.required]);
  email=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required]);
  Rpassword=new FormControl('',[Validators.required]);
  form: FormGroup;


  show=false;
  
  options = [
    {value: 'mor', viewValue: 'Head Office'},
    {value: 'kat', viewValue: 'Morogoro Branch'},
    {value: 'blr',viewValue:'Katuba'},
    {value:'322',viewValue:'Loan Officer'},
    
  ];
  staffs = [
    {value: 'mor', viewValue: 'Manager'},
    {value: 'kat', viewValue: 'Teller'},
    {value: 'blr',viewValue:'Cashier'},
    {value:'322',viewValue:'Officer'},
    
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username:[null,Validators.required],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email:[null,Validators.required],
      password:[null,Validators.required],
      Rpassword:[null,Validators.required],
    
      
    })
}
}
