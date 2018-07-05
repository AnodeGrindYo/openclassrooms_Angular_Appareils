import { Subject } from 'rxjs/Subject';

export class AppareilService {

	appareilSubject = new Subject<any[]>();

	// en private pour empêcher les accès directs
	private appareils = [
		{
			id: 1,
			name: 'Machine à laver',
			status: 'éteint'
		},
		{
			id: 2,
			name: 'Télévision',
			status: 'allumé'
		},
		{
			id: 3,
			name: 'Ordinateur',
			status: 'éteint'
		}
	];

	emitAppareilSubject() {
		this.appareilSubject.next(this.appareils.slice());
	}

	getAppareilById(id: number) {
		const appareil = this.appareils.find(
			(appareilObject) => {
				return appareilObject.id === id;
			}
		);
		return appareil;
	}

	switchOnAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'allumé';
		}
		this.emitAppareilSubject();
	}

	switchOffAll() {
		for(let appareil of this.appareils) {
			appareil.status = 'éteint';
		}
		this.emitAppareilSubject();
	}

	switchOnOne(index: number) {
		this.appareils[index].status = 'allumé';
		this.emitAppareilSubject();
	}

	switchOffOne(index: number) {
		this.appareils[index].status = 'éteint';
		this.emitAppareilSubject();
	}

	addAppareil(name: string, status: string) {
		const appareilObject = {
			id: 0,
			name: '',
			status: ''
		};
		appareilObject.name = name;
		appareilObject.status = status;
		appareilObject.id = this.appareils[(this.appareils.length - 1)].id +1 // on récupère l'id du dernier élément de la liste et on rajoute 1
		this.appareils.push(appareilObject); // rajoute le nouvel appareil
		this.emitAppareilSubject();
	}
}