import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PaymentComponent } from '../dialogs/payment/payment.component';


export interface PaymentData {
  donation: number;
}
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent {
  donation!: number;

  constructor(public dialog: MatDialog) {}

  openPayment(): void {
    //if (this.donation>10) {
      const dialogRef = this.dialog.open(PaymentComponent, {data: {donation: this.donation},});
    //}
  }
}