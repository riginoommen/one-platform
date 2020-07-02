import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AppService } from 'src/app/app.service';
import { environment } from '../../../environments/environment';

@Component( {
  selector: 'app-manage-handover',
  templateUrl: './manage-handover.component.html',
  styleUrls: [ './manage-handover.component.scss' ]
} )
export class ManageHandoverComponent implements OnInit {
  fetchingAccountName: boolean;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe( res => {
      if ( res.handover_id ) {
        this.handover_id = res.handover_id;
      }
    } );
  }
  handover: any = {};
  cases: Array<any> = [ {} ];
  showSendModal = false;
  refreshStatus = false;
  handover_id: number;
  updationTime: string = moment().format( 'MMMM Do YYYY, h:mm' );
  userData = ( window as any )?.OpAuthHelper?.getUserInfo() || null;
  canEdit: boolean;
  initialNumberOfCases: number;
  buttonAction: String;
  showToast = false;
  toggleModal = false;
  emailRecipient: EmailRecipient = {} as EmailRecipient;
  environment: any = environment;

  ngOnInit(): void {
    if ( this.handover_id ) {
      this.canEdit = true;
      this.buttonAction = 'Update';
      this.appService.getHandoverWithCases( this.handover_id ).then( response => {
        this.handover.handover_id = response.listHandover.handover_id;
        this.handover.date = response.listHandover.date;
        this.handover.handover_notes = response.listHandover.handover_notes;
        this.handover.handover_region = response.listHandover.handover_region;
        this.handover.handover_type = response.listHandover.handover_type;
        this.handover.proactive_cases = response.listHandover.proactive_cases;
        this.handover.sensitive_accounts = response.listHandover.sensitive_accounts;
        this.handover.watchlist = response.listHandover.watchlist;
        this.handover.manager_id = response.listHandover.manager_id;
        this.handover.manager_first_name = response.listHandover.manager_first_name;
        this.handover.manager_last_name = response.listHandover.manager_last_name;
        this.handover.manager_email = response.listHandover.manager_email;
        this.cases = response.listCasesByHandover;
        this.initialNumberOfCases = this.cases.length;
        this.refreshCounts();
      } );
    } else {
      this.buttonAction = 'Create';
      if ( !this.handover.handover_type ) {
        this.handover.handover_type = 'Platform';
      }
      this.refreshCounts();
    }
  }


  // Method to Update the stats count in the form
  setCountsView( data ) {
    this.handover.fts_count = data.fts_count;
    this.handover.rme_count = data.rme_count;
    this.handover.unassigned_count = data.unassigned_count;
    this.handover.worh_count = data.worh_count;
    this.handover.woc_count = data.woc_count;
    this.handover.irt_count = data.irt_count;
    this.handover.unassigned_ncq_sev_1_2_count = data.unassigned_ncq_count;
    this.handover.urgent_severity_1_breaches_count = data.urgent_sev_1_breaches_count;
    this.updationTime = moment( new Date() ).format( 'MMMM Do YYYY, h:mm' );
    this.refreshStatus = false;
  }

  // Method to Update the handover stats based on the Handover Type
  refreshCounts() {
    this.refreshStatus = true;
    if ( this.handover.handover_type === 'Platform' ) {
      this.appService.getAllPlatformCounts().then( ( data ) => {
        this.setCountsView( data );
      } );
    } else if ( this.handover.handover_type === 'Application Platform Support' ) {
      this.appService.getAllAPSCounts().then( ( data ) => {
        this.setCountsView( data );
      } );
    } else if ( this.handover.handover_type === 'Management Product Support' ) {
      this.appService.getAllMPSCounts().then( ( data ) => {
        this.setCountsView( data );
      } );
    } else if ( this.handover.handover_type === 'Enterprise Cloud Support' ) {
      this.appService.getAllETCounts().then( ( data ) => {
        this.setCountsView( data );
      } );
    }
  }

  // Add case to handover
  addCase() {
    this.cases.push( {} );
  }
  // Delete case with the handover.
  deleteCase( caseDetail ) {
    if ( caseDetail.case_id ) {
      this.appService.removeCase( caseDetail.case_id ).subscribe( response => {
        this.cases.splice( this.cases.indexOf( caseDetail ), 1 );
      } );
    } else {
      this.cases.splice( this.cases.indexOf( caseDetail ), 1 );
    }
  }

  // Helper Function to initalize getSBRNames & getAccountName methods
  getCaseDetails( case_no, index ) {
    this.getSBRNames( case_no, index );
    this.getAccountName( case_no, index );
  }

  // Method to fetch the SBR Names associated with the case number
  getSBRNames( case_no, index ) {
    const sbrs = [];
    let sbr_names: String;
    this.appService.getSBRsByCase( case_no ).then( ( data ) => {
      const sbrData: any = data.listCaseSBRs;
      if ( !sbrData ) {
        alert( 'No case Found' );
      } else {
        sbrData.filter( sbrName => {
          if ( sbrName.sbr_group__c !== '' && sbrName.sbr_group__c !== null ) {
            sbrs.push( sbrName.sbr_group__c );
          }
          sbr_names = sbrs.join( ',' );
        } );
        this.cases[ index ].sbr_names = sbr_names;
      }
    } );
  }

  // Method to fetch the Account Name from SFDC
  getAccountName( case_no, index ) {
    this.fetchingAccountName = true;
    if ( isFinite( case_no ) && case_no > 0 ) {
      this.appService.listSFDCCase( case_no ).then( ( data ) => {
        if ( !data.listSFDCCase ) {
          this.fetchingAccountName = false;
          alert( 'No account name found for case number: ' + case_no );
        } else if ( data.listSFDCCase ) {
          this.cases[ index ].account_name = data.listSFDCCase.account_name;
          this.fetchingAccountName = false;
        }
      } );
    } else {
      this.fetchingAccountName = false;
    }
  }

  // Method to create Handover
  createHandover( handover, cases ) {
    handover.handover_id = Number( moment().format( 'YYYYMMDDHHmmss' ) );
    handover.date = moment( new Date() ).format( 'YYYY-MM-DD HH:mm:ss' );
    handover.manager_id = this.userData?.uid || 'roommen';
    handover.manager_email = this.userData?.email || 'roommen';
    handover.manager_first_name = this.userData?.firstName || 'roommen';
    handover.manager_last_name = this.userData?.lastName || 'roommen';
    this.appService.createHandover( handover ).subscribe( response => {
      this.showToast = true;
      cases.filter( caseDetail => {
        caseDetail.handover_id = handover.handover_id;
        caseDetail.date = handover.date;
        this.appService.createCase( caseDetail ).subscribe( _response => {
          // // this.toastr.success('Created Cases Associated with Handover ' + handover.handover_id, 'Success!');
        } );
      } );
      this.router.navigate( [ 'details', handover.handover_id ] );
    } );
  }

  // Method to update Handover
  updateHandover( handover, cases ) {
    const finalNumberOfCases: Number = cases.length;
    handover.date = moment( new Date( handover.date ) ).format( 'YYYY-MM-DD HH:mm:ss' );
    this.appService.updateHandover( handover ).subscribe( response => {
      this.showToast = true;
      if ( this.initialNumberOfCases < finalNumberOfCases ) {
        cases.map( data => {
          if ( data.case_id ) {
            this.appService.updateCase( data ).subscribe( _response => {
            } );
          } else {
            data.handover_id = handover.handover_id;
            data.date = moment( data.date ).format( 'YYYY-MM-DD HH:mm:ss' );
            this.appService.createCase( data ).subscribe( _response => {
            } );
          }
        } );
      } else if ( finalNumberOfCases > 0 ) {
        cases.filter( data => {
          this.appService.updateCase( data ).subscribe( _response => {
          } );
        } );
      }
      this.router.navigate( [ 'details', response.handover_id ] );
    } );
  }

  // Method to delete Handover
  deleteHandover( handover, cases ) {
    this.buttonAction = 'Delete';
    this.appService.removeHandover( handover.handover_id ).subscribe( response => {
      this.showToast = true;
      this.router.navigate( [ '' ] );
    } );
  }

  setRecipents( handover_type ) {
    if ( this.environment.production === true ) {
      if ( handover_type === 'Platform' ) {
        this.emailRecipient.to = 'support-delivery@redhat.com,sd-leadership@redhat.com';
        this.emailRecipient.cc = this.userData?.email || 'roommen@redhat.com';
      } else if ( handover_type === 'Application Platform Support' || handover_type === 'Management Product Support' ) {
        this.emailRecipient.to = '';
        this.emailRecipient.cc = this.userData?.email || 'roommen@redhat.com';
      } else if ( handover_type === 'Enterprise Cloud Support' ) {
        this.emailRecipient.to = 'ecs-sol-list@redhat.com, sd-emerging-leadership@redhat.com,sd-leadership@redhat.com';
        this.emailRecipient.cc = this.userData?.email || 'roommen@redhat.com';
      }
    } else {
      this.emailRecipient.to = '';
      this.emailRecipient.cc = this.userData?.email || 'roommen@redhat.com';
    }
  }

  // Method to initalize the email call
  sendEmailModal( emailRecipient ) {
    this.handover.date = this.handover.date || moment( new Date() ).format( 'YYYY-MM-DD HH:mm:ss' );
    this.handover.manager_id = this.userData?.uid || 'roommen';
    this.handover.manager_email = this.userData?.email || 'roommen@redhat.com';
    this.handover.manager_first_name = this.userData?.firstName || 'roommen';
    this.handover.manager_last_name = this.userData?.lastName || 'roommen';

    const email = {
      handover: this.handover,
      cases: this.cases,
      emailRecipient
    };
    if ( this.canEdit ) {
      this.updateHandover( this.handover, this.cases );
    } else {
      this.createHandover( this.handover, this.cases );
    }
    this.appService.sendHandoverEmail( email ).subscribe( response => {
      this.showToast = true;
    } );
  }

}
