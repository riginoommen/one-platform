import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-manage-handover',
  templateUrl: './manage-handover.component.html',
  styleUrls: [ './manage-handover.component.scss' ]
} )
export class ManageHandoverComponent implements OnInit {

  constructor () { }
  handover: any = {};
  ngOnInit (): void {
  }

}
