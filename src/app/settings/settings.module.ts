import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
