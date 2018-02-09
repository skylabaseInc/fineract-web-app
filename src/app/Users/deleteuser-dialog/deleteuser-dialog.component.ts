import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-deleteuser-dialog',
  templateUrl: './deleteuser-dialog.component.html',
  styleUrls: ['./deleteuser-dialog.component.css']
})
export class DeleteuserDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<DeleteuserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmDelete(){
  this.dialogRef.close();
 }

}
