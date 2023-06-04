import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { VisaComponent } from '../visa/visa.component';
import { YapeComponent } from '../yape/yape.component';

export interface PaymentData {
  donation: number;
  id:number;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  selectedMethod: string="";
  methods: string[] = ['TARJETA', 'YAPE'];

  constructor(
    public dialogRef: MatDialogRef<PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData, public dialog: MatDialog
  ) {  }
  

  onExitClick(): void {
    this.dialogRef.close();
  }

  openMethod(): void {
    switch (this.selectedMethod) {
      case 'TARJETA':
        const dialogRef = this.dialog.open(VisaComponent, {data: {donation: this.data.donation, id:this.data.id},});
        this.onExitClick();
        break;
      default:
        const dialogRef2 = this.dialog.open(YapeComponent, {data: {donation: this.data.donation, id:this.data.id},});
        this.onExitClick();
        break;
        break;
    }
  }
}
