import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	secondes: number;
	counterSubscription: Subscription;

	constructor() {}

	ngOnInit() {
		const counter = Observable.interval(1000); // crée une observable qui émettra un chiffre toutes les secondes... reste à observer cette observable
		/*counter.subscribe( // remplacé par le bloc qui suit juste après pour éviter un compteur infini
			// next: 
			(value: number) => {
				this.secondes = value;
			},
			// error:
			(error: any) => {
				console.log('une erreur a été rencontrée');
			},
			// complete:
			() => {
				console.log('Observable complétée');
			}
		);*/
		this.counterSubscription = counter.subscribe( // en stockant la souscription dans un objet Subscription, on peut la détruire au moment venu
			// next: 
			(value: number) => {
				this.secondes = value;
			},
			// error:
			(error: any) => {
				console.error('une erreur a été rencontrée !');
			},
			// complete:
			() => {
				console.log("Observable complétée !");
			}
		);
	}

	ngOnDestroy() {
		this.counterSubscription.unsubscribe(); // la fonction unsubscribe va détruire la souscription à la fin de la vie du component
	}
}
