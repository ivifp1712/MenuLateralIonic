import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcardComponent } from './ncard/ncard.component';
import { AcardComponent } from './acard/acard.component';

@NgModule({
  declarations: [NcardComponent, AcardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ NcardComponent, AcardComponent]
})
export class CardsModule { }
