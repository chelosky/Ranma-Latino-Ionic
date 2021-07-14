import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import * as CONSTANTS from '../../constants';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  data: any = {
    folder: CONSTANTS.FOLDER_OVAS,
    confirmText: CONSTANTS.MESSAGE_DOWNLOAD_MODAL_OVAS
  }

  constructor(
    public chapterService: ChapterService
    ) { }

  ngOnInit(): void {
  }

}
