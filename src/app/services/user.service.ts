import { User } from "../models/user.model";
import { Subject } from "rxjs/Subject";

export class UserService {
	private users: User[] = [new User('john', 'smith', 'john@smith.com', 'coca', ['coder', 'dégustation de café'])];
	userSubject = new Subject<User[]>();

	emitUsers() {
		this.userSubject.next(this.users.slice());
	}

	addUser(user: User) {
		this.users.push(user);
		this.emitUsers();
	}
}