import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  usuario: string = "";
  email: string = "";
  contrasena: string = "";

  constructor(
    private router: Router, 
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  crearCuenta() {
    if (!this.usuario || this.usuario.trim().length === 0) {
      this.presentAlert('Error', 'El campo de usuario es obligatorio.');
      return;
    }

    if (!this.email || this.email.trim().length === 0) {
      this.presentAlert('Error', 'El campo de correo electrónico es obligatorio.');
      return;
    }

    if (!this.email.includes('@')) { // Validar que el correo contiene '@'
      this.presentAlert('Error', 'El correo electrónico debe contener un "@"');
      return;
    }

    if (!this.contrasena || this.contrasena.trim().length === 0) {
      this.presentAlert('Error', 'El campo de contraseña es obligatorio.');
      return;
    }



    this.presentToast('bottom');
    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  presentToast(position: 'top' | 'middle' | 'bottom') {
    this.toastController.create({
      message: 'Cuenta creada exitosamente!',
      duration: 2000,
      position: position,
      color: 'success'
    }).then(toast => toast.present());
  }
}
