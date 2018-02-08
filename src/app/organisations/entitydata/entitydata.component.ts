import { Component, Inject} from '@angular/core';
import { DeleteEntitydataDialogComponent} from 
'../delete-entitydata-dialog/delete-entitydata-dialog.component';
import { CreatentitydataDialogComponent} from 
'../createntitydata-dialog/createntitydata-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-entitydata',
  templateUrl: './entitydata.component.html',
  styleUrls: ['./entitydata.component.css']
})
export class EntitydataComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteEntitydataDialogComponent,{
      width:'500px',
    });
  
  dialogRef.afterClosed().subscribe(result => {
  });
}

openDialogCreate(): void {
  let dialogRef = this.dialog.open(CreatentitydataDialogComponent,{
    width:'500px',
  });

dialogRef.afterClosed().subscribe(result => {
});
}
  
}