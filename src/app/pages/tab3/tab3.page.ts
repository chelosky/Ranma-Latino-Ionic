import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import * as CONSTANTS from '../../constants';
import { FOLDER_MOVIES } from '../../constants';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: any = {
    folder: CONSTANTS.FOLDER_MOVIES,
    confirmText: CONSTANTS.MESSAGE_DOWNLOAD_MODAL_MOVIE
  }

  constructor(
    public chapterService: ChapterService
    ) { }

  ngOnInit(): void {
  }

}
