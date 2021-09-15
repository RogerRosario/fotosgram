import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { Camera } from "@ionic-native/camera/ngx";
import { PipesModule } from './pipes/pipes.module';

import { FileTransfer } from "@ionic-native/file-transfer/ngx";


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    PipesModule
  ],
  providers: [
    Geolocation,
    Camera,
    FileTransfer,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy,
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
