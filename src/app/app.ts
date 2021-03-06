/** To use directives, you must import them first */
/** FORM_DIRECTIVES (ie: ngModel) */
/** CORE_DIREVTIVES (ie: ngIf, ngShow, ngClass) */
/** When importing individually, you must use pascal-case rather than camel-case */
/** ie: `import { NgClass }` */
/** and this must match in the @Component */
/** ie: `directives: [NgClass]` */
/** Don't ask me why. That's f****** bananas! */


import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	templateUrl: 'views/sample.tpl.html',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	styles: [`
		.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
		.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
		.heroes li:hover {color: #369; background-color: #EEE; left: .2em; }
		.heroes .badge {
			font-size: small;
			color: white;
			padding: 0.1em 0.7em;
			background-color: #369;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -1px;
		}
		.selected { background-color: #EEE; color: #369 }
	`]
})

class AppComponent {
	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	public heroes = HEROES;
	
	onSelect(hero: Hero) { this.selectedHero = hero; }

	getSelectedClass(hero: Hero) {
		return { 'selected': hero === this.selectedHero }
	}
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];

bootstrap(AppComponent)