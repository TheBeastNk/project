import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-contact-detail',
	templateUrl: 'contact-detail.component.html'
})

export class ContactDetailComponent{

	@Input() selectedContact
}