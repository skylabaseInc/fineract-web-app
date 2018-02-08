import { Component,Inject } from '@angular/core';
import { DeleteprovisioningDialogComponent} from 
'../deleteprovisioning-dialog/deleteprovisioning-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-viewprovisioning',
  templateUrl: './viewprovisioning.component.html',
  styleUrls: ['./viewprovisioning.component.css']
})
export class ViewprovisioningComponent {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteprovisioningDialogComponent,{
      width:'500px',
    });
  
  dialogRef.afterClosed().subscribe(result => {
  });

}
  
}
