import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-gl',
  templateUrl: './create-gl.component.html',
  styleUrls: ['./create-gl.component.css']
})
export class CreateGlComponent implements OnInit {

  options = [
    {value: 'det', viewValue: 'Details'},
    {value: 'hea', viewValue: 'Header'}
  ];
  tags= [
    {value:'mov',viewValue:'Movable Asset'},
    {value:'test',viewValue:'Test'},
    {value:'non',viewValue:'Non Movable Asset'}
  ]


  form: FormGroup;                    
  constructor(
    private fb: FormBuilder,   
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      code: ['', Validators.required],
      name:['',Validators.required],
    });
  }

}
