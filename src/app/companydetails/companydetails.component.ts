import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  companyname = "";
  companymail = "";
  jobtitle = "";
  yrsofexperience = "";
  
  constructor() { 
	this.companyname = localStorage.getItem("companyname");
	this.companymail = localStorage.getItem("companymail");
	this.jobtitle = localStorage.getItem("jobtitle");
	this.yrsofexperience = localStorage.getItem("yrsofexperience");
  }

  ngOnInit(): void {
  }
  
	saveDetails(event: any) {
	  localStorage.setItem("companyname", this.companyname);
	  localStorage.setItem("companymail", this.companymail);
	  localStorage.setItem("jobtitle", this.jobtitle);
	  localStorage.setItem("yrsofexperience", this.yrsofexperience);
	}
}


var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i])
}

function customInput (el) {
  const fileInput = el.querySelector('[type="file"]')
  const label = el.querySelector('[data-js-label]')
  
  fileInput.onchange =
  fileInput.onmouseout = function () {
    if (!fileInput.value) return
    
    var value = fileInput.value.replace(/^.*[\\\/]/, '')
    el.className += ' -chosen'
    label.innerText = value
  }
}