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
import { AuthGuard } from "./services/auth-guard-service";

// création de routes
import { RouterModule, Routes } from "@angular/router";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';


// contient la liste des routes
// note: il faut toujours mettre le path avec la wildcard à la fin
// canActivate:[AuthGuard] fait référence au service AuthGuard et interdit l'accès au path si l'user n'est pas connecté
const appRoutes: Routes = [
  { path: 'appareils',     canActivate:[AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent },
  { path: 'edit',          canActivate:[AuthGuard], component: EditAppareilComponent},
  { path: 'auth',          component: AuthComponent },
  { path: '',              canActivate:[AuthGuard], component: AppareilViewComponent },
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
    FourOFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // import des routes
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
