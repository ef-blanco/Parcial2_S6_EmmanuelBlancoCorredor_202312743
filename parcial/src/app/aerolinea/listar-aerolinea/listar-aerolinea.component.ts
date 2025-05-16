import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-aerolinea',
  templateUrl: './listar-aerolinea.component.html',
  styleUrls: ['./listar-aerolinea.component.css'],
  standalone: false
})
export class ListarAerolineaComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];
  constructor(private aerolineaService: AerolineaService, private router:Router) { }

  getAerolineas()
  {
    this.aerolineaService.getAerolineas().subscribe(aeros=>{
      this.aerolineas = aeros;
    });
  }

  ngOnInit() {
    this.getAerolineas()
  }

}
