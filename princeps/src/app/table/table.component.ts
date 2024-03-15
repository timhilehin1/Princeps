import { Component } from '@angular/core';
import { LoanDataService } from '../loan-data.service';
interface LoanData {
  name?: string;
  email?: string;
  telephone?: string;
  tenor?: string;
  ippisnumber?: string;
  amount?: string;
  mode?: string;
  mdaName?: string;
  created_at?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  tableData: any = [];
  cols: any[] = [];
  startingCount: any;
  endCount: any;
  constructor(private loanDataService: LoanDataService) {}
  ngOnInit() {
    this.loanDataService.getLoanData().subscribe((data) => {
      this.startingCount = data?.loans?.from;
      this.endCount = data.loans?.to;
      this.tableData = data.loans?.data;
    });


    this.cols = [
      {},
      {
        field: 'name',
        header: 'First Name',
      },

      {
        field: 'email',
        header: 'Email',
      },

      {
        field: 'telephone',
        header: 'Phone Number',
      },

      {
        field: 'ippisnumber',
        header: 'IPPIS No',
      },

      {
        field: 'loan_amount',
        header: 'Amount',
      },

      {
        field: 'tenor',
        header: 'Tenor',
      },

      {
        field: 'created_at',
        header: 'Date',
      },

      {
        field: 'mode',
        header: 'Mode',
      },
      {
        field: 'mdaName',
        header: 'MDA',
      },
    ];
  }

  
    getNextPage(){
       //inrement count and send to api
    };
}
