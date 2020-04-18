import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  username = "";
  gender = "";
  country = "";
  state = "";
  phone = "";
	
  constructor() { }

  ngOnInit(): void {
  }

  
	onKey(event: any) {
	  localStorage.setItem(event.target.name, event.target.value);
	}

}
