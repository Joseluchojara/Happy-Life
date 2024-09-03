import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nombre: string = "";
  altura: number | null = null;
  peso: number | null = null;
  sexo: string = "";
  nivelActividad: string = "";
  lugarEntrenamiento: string = "";

  constructor(private router: Router, private activerouter: ActivatedRoute) { 
  
    this.activerouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombre'];
        this.altura = this.router.getCurrentNavigation()?.extras?.state?.['altura'];
        this.peso = this.router.getCurrentNavigation()?.extras?.state?.['peso'];
        this.sexo = this.router.getCurrentNavigation()?.extras?.state?.['sexo'];
        this.nivelActividad = this.router.getCurrentNavigation()?.extras?.state?.['nivelActividad'];
        this.lugarEntrenamiento = this.router.getCurrentNavigation()?.extras?.state?.['lugarEntrenamiento'];
      }
    });
  }

  ngOnInit() {}
}
