import { Component,Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createntitydata-dialog',
  templateUrl: './createntitydata-dialog.component.html',
  styleUrls: ['./createntitydata-dialog.component.css']
})
export class CreatentitydataDialogComponent implements OnInit{

  show2=false;
Onshow(){
  this.show2=true;
}
Onshow1(){
  this.show2=false;
}

form:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreatentitydataDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
     public data: any,private formBuilder: FormBuilder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmCreate(){
  this.dialogRef.close();
 }

 ngOnInit() {
  this.form = this.formBuilder.group({
    entity: [null, Validators.required],
    status:[null,Validators.required],
    data:[null,Validators.required],
    
  })
}

}
