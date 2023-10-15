import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data/dataFakeService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@Input()
	animeAll:any[]= []
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
		this.animeAll=this.dataService.getAllAnimes()
  }

}
