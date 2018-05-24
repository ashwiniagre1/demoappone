/**
 * Created by: MetaMagic
 * Date: 24/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'userregistration',
  templateUrl: 'userregistration.component.html'
})
export class UserregistrationComponent implements OnInit{
  userregistrationModel:UserregistrationModel;
        radiogroupData:any; 
  constructor(private http: HttpClient) {
    this.userregistrationModel=new UserregistrationModel();
     	 	this.radiogroupData={"data":[{"gender":"female","genderId":"key"},{"gender":"male","genderId":"key"}]};
	  }
        onBlur_firstname(eventData:any){} 
      input_firstname(eventData:any){} 
      focus_firstname(eventData:any){} 
        onBlur_lastname(eventData:any){} 
      input_lastname(eventData:any){} 
      focus_lastname(eventData:any){} 
        onBlur_phonenumber(eventData:any){} 
      input_phonenumber(eventData:any){} 
      focus_phonenumber(eventData:any){} 
        onSelection_gender(eventData:any){} 
        onClick_cancelBtn(eventData:any){} 
        onClick_saveBtn(eventData:any){} 
    ngOnInit(){
 	  }
 	 	

   
}
export class UserregistrationModel{
  firstname: string;  lastname: string;  phonenumber: number;  gender: string; }
