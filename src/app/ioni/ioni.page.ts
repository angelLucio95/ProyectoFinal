import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-ioni',
  templateUrl: './ioni.page.html',
  styleUrls: ['./ioni.page.scss'],
})
export class IoniPage implements OnInit {

  fecha: string;

  entradas!: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  entradaActual!:{
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(public toastController: ToastController) {
    moment.locale('es-mx')
    this.fecha = moment().format();
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  cargarEntradas(){
    var fecha = moment(this.fecha).format('MM-DD-YY');

    this.entradas = JSON.parse(localStorage.getItem('entradas')|| '{}');
    if(this.entradas){
      var entradaActual = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada(){
    var fecha = moment(this.fecha).format('MM-DD-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' +  year,
      fecha: fecha,
      texto: ''
    }
  }

  async guardar(entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('MM-DD-YY');

    if(this.entradas){
      var item = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('entradas',JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }

    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(entrada:{fecha: string,fechaTexto: string,texto: string }){
    this.entradas.push(entrada);
    localStorage.setItem('entradas',JSON.stringify(this.entradas));
  }


}
