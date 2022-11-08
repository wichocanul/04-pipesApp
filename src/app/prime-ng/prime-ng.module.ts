import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
