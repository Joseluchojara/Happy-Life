import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  nombre: string = "";
  altura: number | null = null;
  peso: number | null = null;
  sexo: string = "";
  nivelActividad: string = "";
  lugarEntrenamiento: string = "";

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  validarDatos() {
    if (!this.nombre.trim()) {
      this.presentAlert('Error', 'El nombre es obligatorio.');
      return;
    }

    if (this.altura === null || this.altura <= 0) {
      this.presentAlert('Error', 'La altura debe ser un número positivo.');
      return;
    }

    if (this.peso === null || this.peso <= 0) {
      this.presentAlert('Error', 'El peso debe ser un número positivo.');
      return;
    }

    if (!this.sexo) {
      this.presentAlert('Error', 'Debes seleccionar tu sexo.');
      return;
    }

    if (!this.nivelActividad) {
      this.presentAlert('Error', 'Debes seleccionar un nivel de actividad.');
      return;
    }

    if (!this.lugarEntrenamiento) {
      this.presentAlert('Error', 'Debes seleccionar una opción de entrenamiento.');
      return;
    }

    // Usamos NavigationExtras para pasar los datos
    let navigationExtras: NavigationExtras = {
      state: {
        nombre: this.nombre,
        altura: this.altura,
        peso: this.peso,
        sexo: this.sexo,
        nivelActividad: this.nivelActividad,
        lugarEntrenamiento: this.lugarEntrenamiento
      }
    };

    // Navegamos a la página destino
    this.router.navigate(['/usuario'], navigationExtras);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
