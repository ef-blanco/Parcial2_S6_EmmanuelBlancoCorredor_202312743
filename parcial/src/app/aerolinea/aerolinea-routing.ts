import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListarAerolineaComponent } from './listar-aerolinea/listar-aerolinea.component';
import { SimpleAerolineaComponent } from './simple-aerolinea/simple-aerolinea.component';
import { DetalleAerolineaComponent } from './detalle-aerolinea/detalle-aerolinea.component';
const routes: Routes = [
  { path: '', component: ListarAerolineaComponent },
  { path: 'basic/:id', component: SimpleAerolineaComponent},
  { path: 'detail/:id', component: DetalleAerolineaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AerolineaRouting {
}
