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
  phonecode = "";
	
  constructor() { 
	this.username = localStorage.getItem("username");
	this.gender = localStorage.getItem("gender");
	this.country = localStorage.getItem("country");
	this.state = localStorage.getItem("state");
	this.phonecode = localStorage.getItem("phonecode");
	this.phone = localStorage.getItem("phone");
  }

  ngOnInit(): void {
  }

	saveDetails(event: any) {
	  localStorage.setItem("username", this.username);
	  localStorage.setItem("gender", this.gender);
	  localStorage.setItem("country", this.country);
	  localStorage.setItem("state", this.state);
	  localStorage.setItem("phonecode", this.phonecode);
	  localStorage.setItem("phone", this.phone);
	}
}
