import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()

export class ContactListService{

	private _apiUrl = "../../assets/contactList.json";
	constructor(private _contactsService: HttpClient){}

	getContactList(): Observable<any>{
		return this._contactsService.get(this._apiUrl);
	}


	searchContactList(param: string): Observable<any>{
		return this._contactsService.get(this._apiUrl);
	}


}