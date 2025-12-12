import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title';
import { Animations } from './animations/animations';



@NgModule({
  declarations: [TitleComponent,Animations],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent,Animations]
})
export class MainModule { }
