import { Component, Inject,OnInit } from '@angular/core';
import { DeleteuserDialogComponent} from 
'../deleteuser-dialog/deleteuser-dialog.component';
import { ChangepasswordDialogComponent} from 
'../changepassword-dialog/changepassword-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-clickuser',
  templateUrl: './clickuser.component.html',
  styleUrls: ['./clickuser.component.css']
})
export class ClickuserComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteuserDialogComponent,{
      width:'500px',
    });
  
  dialogRef.afterClosed().subscribe(result => {
  });
}

openDialog2(): void {
  let dialogRef = this.dialog.open(ChangepasswordDialogComponent,{
    width:'500px',
  });

dialogRef.afterClosed().subscribe(result => {
});
}
ngOnInit() {
}
}
