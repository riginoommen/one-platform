import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AppService } from 'src/app/app.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {
  currentDate: Date = new Date();
  tabs: string[] = [];
  modTabsExpansion: any[] = [
    { acronym: 'Platform', fullName: 'Platform' },
    { acronym: 'ECS', fullName: 'Enterprise Cloud Support' },
    { acronym: 'APS', fullName: 'Application Platform Support' },
  ];
  loading: Boolean = true;
  allHandoversByDate: any = [];
  allHandovers: any = [];
  handoverList: any = [];
  handoverStats: HandoverStat[];
  activeTab: string;
  currentYearCount: Number = 0;
  activeTeamCount: Number = 0;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.tabs = this.modTabsExpansion.map( tab => tab.acronym );
    this.activeTab = this.tabs[ 0 ];
    this.getHandoversByDate( this.tabs[ 0 ], this.currentDate );
  }

  // Helper Function to format the Date to the 'MM-DD-YYYY'
  formatDate( date: any ) {
    return moment( date ).format( 'MM-DD-YYYY' );
  }

  // Function to Fetch the Handovers By Date
  getHandoversByDate( activeTab: any, date: any ) {
    date = this.formatDate( date );
    this.appService.getHandoversByDate( date ).then( handovers => {
      this.allHandoversByDate = handovers.listHandoverByDate;
      this.allHandovers = handovers.listTotalHandoverCount;
      this.handoverList = handovers.listHandoverByDate;
      this.filterHandover( activeTab );
    } );
    this.loading = false;
  }
  // Percentage calculator helper method
  percentCalculator( count, total ) {
    return Math.round( ( count / total ) * 100 ).toString();
  }

  // Filter Handover by the selected type and generate the statistics
  filterHandover( tab ) {
    this.activeTab = tab;
    this.currentYearCount = this.allHandovers.count;
    this.allHandoversByDate = this.handoverList.filter( ( item ) => {
      if ( item.handover_type === this.modTabsExpansion.find( mod => mod.acronym === tab ).fullName ) {
        return item;
      }
    } );
    this.modTabsExpansion.map( ( item, index ) => {
      if ( item.acronym === tab ) {
        this.activeTeamCount = this.handoverList.filter( handover => handover.handover_type === this.modTabsExpansion[ index ].fullName ).length;
      }
    } );
    this.handoverStats = [
      {
        label: `Handovers of ${ moment().year() }`,
        count: `${ this.currentYearCount ? this.currentYearCount : 0 }`,
        color: '#c15151',
        total: `${ this.currentYearCount }`
      },
      {
        label: `${ tab }`,
        count: `${ this.activeTeamCount }`,
        color: '#ff9800',
        total: `${ this.handoverList.length }`
      },
      {
        label: `Total Handovers`,
        count: `${ this.handoverList.length }`,
        color: '#c15151',
        total: `${ this.handoverList.length }`
      }
    ];
  }
}
