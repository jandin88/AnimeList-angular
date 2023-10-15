import { Injectable } from '@angular/core';
import {dataFake} from "./dataFake";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	getAllAnimes() {
		return dataFake;
	}
}
