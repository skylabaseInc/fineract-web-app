import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-deleteprovisioning-dialog',
  templateUrl: './deleteprovisioning-dialog.component.html',
  styleUrls: ['./deleteprovisioning-dialog.component.css']
})
export class DeleteprovisioningDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteprovisioningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 confirmDelete(){
   
 }

}
