import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { User } from "../models/user.model";


@Component({
	selector: 'app-new-user',
	templateUrl: './new-user.component.html',
	styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

	userForm: FormGroup; // objet formulaire qui correspondra au formulaire dans le template

	constructor(private formBuilder: FormBuilder,
				private userService: UserService, 
				private router: Router) { }

	ngOnInit() {
		this.initForm();
	}

	// initialisation du formulaire qui contiendra les différents form control listés
	// entre les accolades. chaque form control a un validator
	initForm() {
		this.userForm = this.formBuilder.group( {
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			drinkPreference: ['', Validators.required]
		});
	}

	onSubmitForm() {
		const formValue = this.userForm.value;
		const newUser = new User(
			formValue['firstName'],
			formValue['mastName'],
			formValue['email'], 
			formValue['drinkPreference']
		);
		this.userService.addUser(newUser);
		this.router.navigate(['/users']);
	}
}
