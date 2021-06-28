import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-desc',
  templateUrl: './profile-desc.component.html',
  styleUrls: ['./profile-desc.component.scss']
})
export class ProfileDescComponent implements OnInit {

  @ViewChild('previewprof') previewprofdiv:any;
  @ViewChild('editprof') editprofdiv:any;
  profile:any;
  // profile={
  //   username:"dhuvaraggnajithraj",
  //   profname:"Dhuvaraggn",
  //   description:"Studying B.Tech know java, python, django and basic knowledge on working in google cloud platform",
  //   company:"B.Tech CSE",
  //   location:"trichy india",
  //   website:"https://github.com/Dhuvaraggn",
  //   twitter:"@Dhuvaraggn",
  //   email:"dhuvaraggnajithraj@gmail.com",
  //   followers:21,
  //   following:30,
  //   stars:3
  // }
  editdescription="";
  editwebsite="";
  editemail="";
  editcompany="";
  edittwitter:any;
  editlocation="";
  constructor(private http:HttpClient) { 
    console.log(this.profile)
  }

  ngOnInit(): void {
    var res=this.http.get("https://my-json-server.typicode.com/Dhuvaraggn/jsonserver/profile")
    var r:any=[];
    this.http.get("https://my-json-server.typicode.com/Dhuvaraggn/jsonserver/profile").subscribe(x=>this.profile=x)
    
  }

  editproffunc()
  {
    this.previewprofdiv.nativeElement.style.display="none"
    this.editprofdiv.nativeElement.style.display="block"
    this.editcompany=this.profile.company;
    this.editdescription=this.profile.description;
    this.editemail=this.profile.email;
    this.editlocation=this.profile.location;
    this.edittwitter=this.profile.twitter;
    this.editwebsite=this.profile.website;
  
    
  }
  canceledit()
  {
    this.previewprofdiv.nativeElement.style.display="block"
    this.editprofdiv.nativeElement.style.display="none"
    console.log("cancel button clicked")

  }
  saveedit()
  {
    this.profile.company=this.editcompany;
    this.profile.website=this.editwebsite;
    this.profile.email=this.editemail;
    this.profile.twitter=this.edittwitter;
    this.profile.description=this.editdescription;
    this.profile.location=this.editlocation;
    this.previewprofdiv.nativeElement.style.display="block"
    this.editprofdiv.nativeElement.style.display="none"
    
  }
  
}

