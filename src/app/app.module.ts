import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '@shared/components/header/header.module';//IMPORTA, PODEMOS USAR EL ALIAS DE LA RUTA
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule,//IMPORTAR PARA USAR
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule //TAMBIEN NECESARIO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
