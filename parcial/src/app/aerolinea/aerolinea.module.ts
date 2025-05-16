import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaComponent } from './aerolinea.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AerolineaComponent],
  exports: [AerolineaComponent]
})
export class AerolineaModule { }
