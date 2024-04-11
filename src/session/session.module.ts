import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { SearchComponent } from '../session/components/search/search.component';

@NgModule({
  declarations: [SessionComponent, SearchComponent],
  imports: [CommonModule],
  exports: [SessionComponent],
})
export class SessionModule {}
