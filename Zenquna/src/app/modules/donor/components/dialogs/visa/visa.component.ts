import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

export interface PaymentData {
  donation: number;
}

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent {
  cardNumber:number;
  cardDate:string;
  cvv:number;
  nombre:string;
  apellido:string;
  email:string;
  numeroFormControl = new FormControl('', [Validators.required, Validators.min(100000000000000), Validators.max(999999999999999)]);
  requiredFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required,Validators.email]);
  cvvFormControl = new FormControl('', [Validators.required, Validators.min(100), Validators.max(999)]);
  
  constructor(
    public dialogRef: MatDialogRef<VisaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData
  ) {
    this.cardNumber=0;
    this.cardDate="";
    this.cvv=0;
    this.nombre="";
    this.apellido="";
    this.email="";
    }
  

  onExitClick(): void {
    this.dialogRef.close();
  }
  detectValidForm():boolean{
    return (this.numeroFormControl.hasError('required') &&
     this.numeroFormControl.hasError('min')&&
     this.numeroFormControl.hasError('max')&&
     this.requiredFormControl.hasError('required')&&
     this.emailFormControl.hasError('required')&&
     this.emailFormControl.hasError('email')&&
     this.cvvFormControl.hasError('required')&&
     this.cvvFormControl.hasError('min')&&
     this.cvvFormControl.hasError('max'))
  }
}
