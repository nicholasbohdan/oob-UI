import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './component/table/table.component';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('tableView', {static: false}) tableView!: TableComponent;
  constructor(private service: ServiceService) { }
  selectedPartner: string = '';
  selectedFeature: string = '';
  partnerList: any[] = [];
  featureList: any[] = [];

  displayedColumns: string[] = ['fitur', 'isWF', 'isKBBIS', 'isCustomNotifFile', 'isEncrypt'];
  
  dataSourceList = [];

  ngOnInit() {
    this.service.getListPartner().subscribe({
      next: (ress) => {
        if(ress){
          this.partnerList = ress.data
        }
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })
    this.service.getListFeature().subscribe({
      next: (ress) => {
        if(ress){
          this.featureList = ress.data
        }
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })
    
  }
  
  handleCari(){
    this.service.getListPartnerFeature(this.selectedPartner).subscribe({
      next: (ress) => {
        if(ress){
          console.log(ress)
          this.dataSourceList = ress.data
          // this.partnerList = ress.data
        }
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })
    console.log(this.selectedPartner ,'cari')
  }
}
