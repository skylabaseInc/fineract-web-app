import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-changepassword-dialog',
  templateUrl: './changepassword-dialog.component.html',
  styleUrls: ['./changepassword-dialog.component.css']
})
export class ChangepasswordDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<ChangepasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmChange(){
  this.dialogRef.close();
 }

}
