import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServoceService } from '../../services/ui-servoce.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  

 
  loginUser = {
    email: 'test1@test.com',
    password: '12345'
  };

  registerUser: Usuario = {
    email: 'roger.motogp@hotmail.com',
    password: '12345',
    nombre: 'Roger',
    avatar: 'av-1.png'
  };

  constructor(private usuarioService: UsuarioService,
              private navCrtl: NavController,
              private uiService: UiServoceService) { }

  ngOnInit() {

    this.slides.lockSwipes(true);

  }

  async login( fLogin: NgForm ){

    if(fLogin.invalid){ return; }

    const valido = await  this.usuarioService.login( this.loginUser.email, this.loginUser.password );
    
    if( valido ){

      //Dirige al tabs
      this.navCrtl.navigateForward( '/main/tabs/tab1', {animated: true} );

    } else{

      //alert de error
      this.uiService.alertaInformativa('Usuario/Contraseña incorrectos');

    }

  }

  async registro( fRegistro: NgForm ){

    if( fRegistro.invalid ){ return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if( valido ) {

      this.navCrtl.navigateForward( '/main/tabs/tab1', {animated: true} );

    } else {

      this.uiService.alertaInformativa( 'Ese correo eletrónico ya existe' );

    }

  } 


  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
