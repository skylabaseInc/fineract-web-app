import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-entitydata-dialog',
  templateUrl: './delete-entitydata-dialog.component.html',
  styleUrls: ['./delete-entitydata-dialog.component.css']
})
export class DeleteEntitydataDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DeleteEntitydataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmDelete(){
  this.dialogRef.close();
 }

}