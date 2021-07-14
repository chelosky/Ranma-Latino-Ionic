import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { fadeIn } from '../../utils/animations';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
  animations: [
    fadeIn
  ]
})
export class HeaderPageComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('backPath') backPath: string = '/';
  @Input('iconUnselect') iconUnselect: string = '';
  @Input('iconSelect') iconSelect: string = '';

  @Input('iconStatus') iconStatus: boolean = false;

  @Input('flagLoading') flagLoading: boolean = false;
  @Input('flagBack') flagBack: boolean = false;
  @Input('flagIcon') flagIcon: boolean = false;

  @Output() handleStatus: EventEmitter<boolean>;


  constructor() {
    this.handleStatus = new EventEmitter();
  }

  ngOnInit() {
    if(this.iconSelect){
      this.iconUnselect = `${this.iconSelect}-outline`;
    }
  }

  changeStatus(){
    this.iconStatus = !this.iconStatus;
    this.handleStatus.emit(this.iconStatus);
  }
  
}
