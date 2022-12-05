import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/ioni',
      icono: 'home'
    },

    {
      titulo: 'Autor',
      url: '/menu/autor',
      icono: 'accessibility'
    },
    {
      titulo: 'Industria 4.0',
      url: '/menu/tem1',
      icono: 'battery-charging'
    },
    {
      titulo: 'Tecnologias en 4.0',
      url: '/menu/tem2',
      icono: 'bulb'
    },
    {
      titulo: 'JavaScript',
      url: '/menu/tem3',
      icono: 'code-slash'
    },
    {
      titulo: 'GitHub',
      url: '/menu/tem4',
      icono: 'cellular'
    },
    {
      titulo: 'GitHub Comandos',
      url: '/menu/tem5',
      icono: 'cloud'
    },
    {
      titulo: 'DRY',
      url: '/menu/tem6',
      icono: 'build'
    },
    {
      titulo: 'Figma',
      url: '/menu/tem7',
      icono: 'cube'
    },
    {
      titulo: 'Frontend y Backend',
      url: '/menu/tem8',
      icono: 'globe'
    }

  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i=0){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {

          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

}
