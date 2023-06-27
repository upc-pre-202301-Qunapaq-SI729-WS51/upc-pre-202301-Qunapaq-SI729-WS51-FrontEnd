import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import { Campaign } from '@models/campaign.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environment.prod';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

export interface PaymentData {
  donation: number;
  id: number;
}

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent {
  campaign!: Campaign;
  isFormValid:boolean;

  numeroFormControl = new FormControl('', [Validators.required, Validators.min(100000000000000), Validators.max(999999999999999)]);
  expireFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required,Validators.email]);
  cvvFormControl = new FormControl('', [Validators.required, Validators.min(100), Validators.max(999)]);
  
  constructor(
    public dialogRef: MatDialogRef<VisaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentData,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.campaign = {
      id: 0,
      category: [],
      department: '',
      district: '',
      name: '',
      summary: '',
      description: '',
      headerImage: '',
      bodyImage: '',
      goal: 0,
      collected: 0,
      donors: [],
      deadline: '',
    };
    this.isFormValid=false;
  }
  
    httpOptions = {
  
      headers: new HttpHeaders({
  
        'Content-Type': 'application/json',
  
      })
  
    }

  onExitClick(): void {
    this.dialogRef.close();
  }
  detectValidForm():void{
    this.isFormValid = (!this.numeroFormControl.hasError('required') &&
     !this.numeroFormControl.hasError('min')&&
     !this.numeroFormControl.hasError('max')&&
     !this.expireFormControl.hasError('required')&&
     !this.nameFormControl.hasError('required')&&
     !this.lastnameFormControl.hasError('required')&&
     !this.emailFormControl.hasError('required')&&
     !this.emailFormControl.hasError('email')&&
     !this.cvvFormControl.hasError('required')&&
     !this.cvvFormControl.hasError('min')&&
     !this.cvvFormControl.hasError('max'))
  }
  registerDonation():void{
    console.log(this.isFormValid);
    console.log(this.data.id);
    this.http
        .get<Campaign>(`${environment.apiUrl}/campaigns/${this.data.id}`)
        .subscribe(
          (campaign) => {
            //obtiene la info de la campaña
            this.campaign = campaign;
            console.log(this.campaign.collected); 
            //Añade la donación a la campaña 
            campaign.collected=(this.campaign.collected+this.data.donation);
            this.http.put<Campaign>(`${environment.apiUrl}/campaigns/${this.data.id}`,this.campaign, this.httpOptions);
            // no me funciona aaaaa
            console.log(this.campaign.collected);
          },
          (error) => {
            console.error(error);
          }
        );
    //cierra la tarjeta
    this.onExitClick();
  }
}
