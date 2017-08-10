///<reference path="../../references/references.ts"/>

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TournamentsService {
	constructor(private http: HttpClient){}

	getTournaments(){
		return this.http.get<ITournaments>("https://foosrank.azurewebsites.net/api/tournament/GetTournaments");
	}
}