import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaComponent } from './aerolinea.component';
import { AerolineaRouting } from './aerolinea-routing';
import { RouterModule } from '@angular/router';
import { ListarAerolineaComponent } from './listar-aerolinea/listar-aerolinea.component';
import { DetalleAerolineaComponent } from './detalle-aerolinea/detalle-aerolinea.component';
import { SimpleAerolineaComponent } from './simple-aerolinea/simple-aerolinea.component';

@NgModule({
  imports: [
    CommonModule,
    AerolineaRouting,
    RouterModule
  ],
  declarations: [AerolineaComponent,ListarAerolineaComponent,DetalleAerolineaComponent,SimpleAerolineaComponent],
  exports: [AerolineaComponent]
})
export class AerolineaModule { }
