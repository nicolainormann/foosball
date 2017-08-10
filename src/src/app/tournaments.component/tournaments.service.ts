///<reference path="../../references/references.ts"/>

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TournamentsService {
	constructor(private http: HttpClient){}

	getTournaments(){
		return [{"id": "c9278b09-53dd-4924-ae79-54b1d5803c03", "name": "Vinter 17"}, {"id": "c9278b09-53dd-4924-ae79-54b1d5803c12", "name": "Sommer 18"}];
		// this.http.get("https://foosrank.azurewebsites.net/api/tournament/GetTournaments").subscribe(data => {
		// 	console.log(data);
		// });
	}
}