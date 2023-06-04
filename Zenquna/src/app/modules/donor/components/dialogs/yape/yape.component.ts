import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

export interface PaymentData {
  donation: number;
  id:number;
}

@Component({
  selector: 'app-yape',
  templateUrl: './yape.component.html',
  styleUrls: ['./yape.component.scss']
})
export class YapeComponent {
  isFormValid:boolean;

  telefonoFormControl = new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]);
  codigoFormControl = new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)]);

  constructor(
    public dialogRef: MatDialogRef<YapeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.isFormValid=false;
  }

  detectValidForm():void{
    this.isFormValid = (
      !this.telefonoFormControl.hasError('required') &&
      !this.telefonoFormControl.hasError('min') &&
      !this.telefonoFormControl.hasError('max') &&
      !this.codigoFormControl.hasError('required') &&
      !this.codigoFormControl.hasError('min') &&
      !this.codigoFormControl.hasError('max')
    )
  }

  onExitClick(): void {
    this.dialogRef.close();
  }
  registerDonation():void{
    //cierra la tarjeta
    this.onExitClick();
  }

}
