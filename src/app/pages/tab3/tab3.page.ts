import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { UiServoceService } from '../../services/ui-servoce.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  usuario: Usuario = {};


  constructor(private usuarioService: UsuarioService,
              private uiService: UiServoceService,
              private postsService: PostsService) {}
  
  ngOnInit(){
    
    // const nombre = this.usuario.nombre;
    // const email = this.usuario.email;
    // const avatar = this.usuario.avatar;

    this.usuario = this.usuarioService.getUsuario();
    
  }

  async actualizar( fActualizar: HTMLFormElement ){

    if( fActualizar.invalid ){ return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );
    console.log(actualizado);
    if( actualizado ){

      //Confirma actualizado
      this.uiService.presentToast('Usuario Actualizado');

    } else{

      //alert de error
      this.uiService.presentToast('No se pudo actualizar');

    }



  }

  logout(){

    this.postsService.paginaPost = 0;

    this.usuarioService.logout();

  }
}
