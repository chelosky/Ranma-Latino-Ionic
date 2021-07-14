import { NgModule } from '@angular/core';
import { ChapterNamePipe } from './chapter-name.pipe';
import { FilterChapterPipe } from './filter-chapter.pipe';

@NgModule({
  declarations: [
    ChapterNamePipe,
    FilterChapterPipe
  ],
  exports: [
    ChapterNamePipe,
    FilterChapterPipe
  ]
})
export class PipesModule { }
