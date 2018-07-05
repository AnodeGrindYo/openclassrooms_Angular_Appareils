export class User {
	
	constructor(public firstName: string, 
				public lastName: string, 
				public email: string,  
				public drinkPreference: string, 
				public hobbies?: string[]) // le ? dans hobbies?: rend le paramètre optionnel
	{}
}