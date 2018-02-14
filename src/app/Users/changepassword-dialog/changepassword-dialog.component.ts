import { Component, Inject,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-changepassword-dialog',
  templateUrl: './changepassword-dialog.component.html',
  styleUrls: ['./changepassword-dialog.component.css']
})
export class ChangepasswordDialogComponent implements OnInit{
  form: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<ChangepasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private formBuilder:FormBuilder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmChange(){
  this.dialogRef.close();
 }


 ngOnInit() {
  this.form = this.formBuilder.group({
    password: [null, Validators.required],
    repeatPassword:[null,Validators.required]
  })
}

}
