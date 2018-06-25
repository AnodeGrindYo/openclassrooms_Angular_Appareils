import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { MonPremierComponentComponent } from './mon-premier-component/mon-premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

// services
import { AppareilService } from "./services/appareil.service"; // fournit les méthodes switchOnAll/switchOffAll/switchOnOne/switchOffOne
import { AuthService } from "./services/auth.service"; // service d'authentification de l'utilisateur

// création de routes
import { RouterModule, Routes } from "@angular/router";


// contient la liste des routes
// note: il faut toujours mettre le path avec la wildcard à la fin
const appRoutes: Routes = [
  { path: 'appareils',     component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth',          component: AuthComponent },
  { path: '',              component: AppareilViewComponent },
  { path: 'not-found',     component: FourOFourComponent }, 
  { path: '**',            redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // import des routes
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
