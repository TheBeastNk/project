import { Component,OnInit } from '@angular/core';
import { ContactListService } from '../services/contact-list.service';


@Component({
	selector: 'app-contact-list',
	templateUrl: 'contact-list.component.html',
	styleUrls: ['contact-list.component.css']
})


export class ContactListComponent{

	contactsList: any;
	selectedContact: any;
	loading: boolean = false;
	searchKeyword: string;
	constructor(private _contactListService: ContactListService){}

	getContactList(){
		this._contactListService.getContactList()
		.subscribe(res => this.contactsList = res)

	}

	ngOnInit(){
		this.getContactList();
	}

	getDetails(data: any){
		this.selectedContact = data;
	}

	searchContact(){
     this._contactListService.searchContactList(this.searchKeyword)
     .subscribe(res => this.contactsList = res);


	}
	
}