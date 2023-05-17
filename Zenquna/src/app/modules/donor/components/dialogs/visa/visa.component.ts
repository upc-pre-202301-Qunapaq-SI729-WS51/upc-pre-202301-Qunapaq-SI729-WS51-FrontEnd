import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface PaymentData {
  donation: number;
}

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent {

  constructor(
    public dialogRef: MatDialogRef<VisaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData
  ) {  }
  

  onExitClick(): void {
    this.dialogRef.close();
  }
}
