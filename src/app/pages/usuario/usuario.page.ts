import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  Apellido: string = "";
  Edad!: number;
  usuario: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Recuperar el estado de navegación si existe
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['user'] || '';
      this.Edad = navigation.extras.state['ed'] || null;
      this.Apellido = navigation.extras.state['ape'] || '';
    }
  }
}
