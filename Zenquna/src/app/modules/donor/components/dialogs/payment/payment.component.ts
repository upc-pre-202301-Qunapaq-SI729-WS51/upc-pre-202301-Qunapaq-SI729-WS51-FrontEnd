import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { VisaComponent } from '../visa/visa.component';

export interface PaymentData {
  donation: number;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData, public dialog: MatDialog
  ) {  }
  

  onExitClick(): void {
    this.dialogRef.close();
  }

  openVisa(): void {
    //if (this.donation>10) {
      const dialogRef = this.dialog.open(VisaComponent, {data: {donation: this.data.donation},});
      this.onExitClick();
    //}
  }
}
