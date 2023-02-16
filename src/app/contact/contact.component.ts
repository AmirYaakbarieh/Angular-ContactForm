import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  @ViewChild ('name') name?: ElementRef;
  @ViewChild ('email') email?: ElementRef;
  @ViewChild ('comments') comments?: ElementRef;

  Name: string ='';
  Email: string ='';
  Comments: string ='';
 
  isSubmitted: boolean = false;

  isCallingApi: boolean = false;


  constructor(private service: ContactService, private _snackBar: MatSnackBar){}
  

  ngOnInit(): void {
    
  }

  // public onClick(){
  //   this.isSubmitted = true;
  //   this.Name = this.name?.nativeElement.value;
  //   this.Email = this.email?.nativeElement.value;
  //   this.Comments = this.comments?.nativeElement.value;
  // }

  public onClick(){
    this.isCallingApi = true;
    
    this.service.sendContactForm({
      name: this.name?.nativeElement.value,
      email: this.email?.nativeElement.value,
      Comments: this.comments?.nativeElement.value,
    }).subscribe(output => {
      this.isCallingApi = false;
      if(output.status){
        this.Name = this.name?.nativeElement.value,
        this.Email = this.email?.nativeElement.value,
        this.Comments = this.comments?.nativeElement.value,
        this.isSubmitted = true;

        this._snackBar.open(output.message!, 'dismiss', {duration: 4000})
      }
    });
    
  }

}
