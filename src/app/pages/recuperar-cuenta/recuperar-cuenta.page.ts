import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})
export class RecuperarCuentaPage implements OnInit {
  email: string = "";

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  async enviarEnlace() {
    if (!this.email || this.email.trim().length === 0) {
      this.presentAlert('Error', 'El campo de correo electrónico es obligatorio.');
      return;
    }

    if (!this.email.includes('@')) {
      this.presentAlert('Error', 'El correo electrónico debe contener un "@"');
      return;
    }

    // Aquí puedes agregar lógica para enviar el enlace de recuperación a la dirección de correo electrónico proporcionada

    this.presentToast('bottom');
    this.email = ''; // Limpiar el campo después de enviar el enlace
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
      message: 'Enlace de recuperación enviado exitosamente!',
      duration: 2000,
      position: position,
      color: 'success'
    }).then(toast => toast.present());
  }
}
