import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderPageComponent } from './header-page/header-page.component';
import { ChapterItemComponent } from './chapter-item/chapter-item.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderPageComponent,
    ChapterItemComponent,
    ChapterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    HeaderPageComponent,
    ChapterListComponent,
    ChapterItemComponent
  ]
})
export class ComponentsModule { }
