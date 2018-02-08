import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createsmscampaign',
  templateUrl: './createsmscampaign.component.html',
  styleUrls: ['./createsmscampaign.component.css']
})
export class CreatesmscampaignComponent implements OnInit {

   form:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      campaign: [null, Validators.required],
      sms:[null,Validators.required],
      type:[null,Validators.required],
      business:[null,Validators.required],
      
    })
  }

}
