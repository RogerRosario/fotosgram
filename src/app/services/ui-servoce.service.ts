import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServoceService {

  constructor(private alertCrtl: AlertController,
              private toastCtrl: ToastController) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alertCrtl.create({
      message,
      buttons: ['OK']
    });

    await alert.present();

  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      position: 'top',
      color: 'tertiary',
      message,
      duration: 900 
    });
    toast.present();
  }

}
