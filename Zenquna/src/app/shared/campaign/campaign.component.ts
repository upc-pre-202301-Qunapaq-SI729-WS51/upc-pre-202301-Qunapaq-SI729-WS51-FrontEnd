import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.prod';
import { Campaign } from '@models/campaign.model';
import {
  PaymentComponent,
  PaymentData,
} from '@donor-components/dialogs/payment/payment.component';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class CampaignComponent implements OnInit {
  campaign: Campaign;
  donation: number;
  id:number;
  plans: string[] = ['Una vez', 'Mensual'];
  selectedPlan: string="";
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
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
    this.donation = 0;
    this.id=0;
  }

  ngOnInit(): void {
    this.updateDonationText();
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.id=params['id'];//esto es para pasarle el ID al dialog
      this.http
        .get<Campaign>(`${environment.apiUrl}/campaigns/${id}`)
        .subscribe(
          (campaign) => {
            this.campaign = campaign;
          },
          (error) => {
            console.error(error);
          }
        );
    });
  }
  updateDonationValue(event: any) {
    this.donation = Number(event.target.value);
    this.updateDonationText();
  }

  getDonationPercentage(){
    return ((this.campaign.collected) / (this.campaign.goal))*100
    //(campaign?.collected / campaign?.goal) * 100
  }

  updateDonationText() {
    if (this.donation < 5) {
      return ' ';
    } else {
      return `Usted estaria donando S/.${this.donation}`;
    }
  }

  openPayment(): void {
    if (this.donation>=5 && this.selectedPlan!=""){
    const dialogRef = this.dialog.open(PaymentComponent, {
      data: { donation: this.donation , id: this.id},
    });
  }
  }
}
