import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
})
export class CreateCampaignComponent {
  selectedFiles?: FileList;
  preview: string = '';
  ngOnInit(): void {}
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;

    this.preview = '';
    if (this.selectedFiles && this.selectedFiles[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        //console.log(e.target.result);
        this.preview = e.target.result;
      };
      reader.readAsDataURL(this.selectedFiles[0]);
    }
  }
}
