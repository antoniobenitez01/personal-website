import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title';
import { Iconbar } from './iconbar/iconbar';



@NgModule({
  declarations: [TitleComponent, Iconbar],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent, Iconbar]
})
export class MainModule { }
