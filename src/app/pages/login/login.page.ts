import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = "";
  contrasena: string = "";

  usuarioPredefinido: string = "usuario123";
  contrasenaPredefinida: string = "123";
  adminUsuario: string = "admin";
  adminContrasena: string = "admin";

  constructor(
    private router: Router, 
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  validarLogin() {
    if (!this.usuario || this.usuario.trim().length === 0) {
      this.presentAlert('Error', 'El campo de usuario es obligatorio.');
      return;
    }

    if (!this.contrasena || this.contrasena.trim().length === 0) {
      this.presentAlert('Error', 'El campo de contraseña es obligatorio.');
      return;
    }

    if (this.usuario === this.usuarioPredefinido && this.contrasena === this.contrasenaPredefinida) {
      this.irPagina('/info');
    } else if (this.usuario === this.adminUsuario && this.contrasena === this.adminContrasena) {
      this.irPagina('/admin');
    } else {
      this.presentAlert('Error', 'Usuario o contraseña incorrectos.');
    }
  }

  irPagina(ruta: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario
      }
    };
    
    this.presentToast('bottom');
    this.router.navigate([ruta], navigationExtras);
  }

  presentToast(position: 'top' | 'middle' | 'bottom') {
    this.toastController.create({
      message: 'Bienvenido a HappyLife!',
      duration: 2000,
      position: position,
      color: 'success'
    }).then(toast => toast.present());
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
