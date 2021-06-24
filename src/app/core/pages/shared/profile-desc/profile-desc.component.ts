import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-desc',
  templateUrl: './profile-desc.component.html',
  styleUrls: ['./profile-desc.component.scss']
})
export class ProfileDescComponent implements OnInit {

  @ViewChild('previewprof') previewprofdiv:any;
  @ViewChild('editprof') editprofdiv:any;
  
  profile={
    username:"dhuvaraggnajithraj",
    profname:"Dhuvaraggn",
    description:"Studying B.Tech know java, python, django and basic knowledge on working in google cloud platform",
    company:"B.Tech CSE",
    location:"trichy india",
    website:"https://github.com/Dhuvaraggn",
    twitter:"@Dhuvaraggn",
    email:"dhuvaraggnajithraj@gmail.com",
    followers:21,
    following:30,
    stars:3
  }
  editdescription="";
  editwebsite="";
  editemail="";
  editcompany="";
  edittwitter:any;
  editlocation="";
  constructor() { }

  ngOnInit(): void {
  }

  editproffunc()
  {
    this.previewprofdiv.nativeElement.style.display="none"
    this.editprofdiv.nativeElement.style.display="block"
  }
  canceledit()
  {
    this.previewprofdiv.nativeElement.style.display="block"
    this.editprofdiv.nativeElement.style.display="none"
  

  }
  saveedit()
  {
    this.profile.company=this.editcompany;
    this.profile.website=this.editwebsite;
    this.profile.email=this.editemail;
    this.profile.twitter=this.edittwitter;
    this.profile.description=this.editdescription;
    this.profile.location=this.editlocation;
    this.canceledit();
  }
  
}

