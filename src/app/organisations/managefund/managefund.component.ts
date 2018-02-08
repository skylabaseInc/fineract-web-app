import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-managefund',
  templateUrl: './managefund.component.html',
  styleUrls: ['./managefund.component.css']
})
export class ManagefundComponent implements OnInit {
form:FormGroup;
control:boolean;

toggle() {
  let control = this.form.get('this.num')
  control.disabled ? control.enable() : control.disable();
}
  
num: [{value: '', disabled:true}]
constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this.formBuilder.group({
    num: [null],
    
  })
}

}
