import { Component, OnInit } from '@angular/core';
import { AppareilService } from "../services/appareil.service";
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'app-appareil-view',
	templateUrl: './appareil-view.component.html',
	styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

	isAuth = false;


	// yo, c'est comme ça qu'on fait une promesse en JS
	lastUpdate = new Promise(
		(resolve, reject) => { // la callback est une fonction anonyme qui va renvoyer une Date en resolve au bout de 2 secondes
			const date = new Date();
			setTimeout(
				() => {
					resolve(date);
				}, 2000
				);
		}
		);

	appareils: any[];
  appareilSubscription: Subscription;

  /*appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';*/

  // injection du service AppareilService dans le constructeur:
  // pour celà, il suffit de créer une variable du type défini par le service
  constructor(private appareilService: AppareilService) {
  	setTimeout(
  		() => {
  			this.isAuth = true;
  		}, 4000
  		);
  }

  ngOnInit() {
  	this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      // next:
      (appareils: any[]) => {
        this.appareils = appareils;
      });
      this.appareilService.emitAppareilSubject();
    
  }

  // appel de la méthode switchOnAll du service AppareilService
  onAllumer() {
  	this.appareilService.switchOnAll();
  }

  onEteindre() {
  	this.appareilService.switchOffAll();
  }
}
